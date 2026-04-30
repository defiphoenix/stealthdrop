import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StepIndicator, Step } from "@/components/wizard/StepIndicator";
import { BasicInfo } from "@/components/wizard/steps/BasicInfo";
import { Recipients } from "@/components/wizard/steps/Recipients";
import { TokenAmount } from "@/components/wizard/steps/TokenAmount";
import { SummaryPanel } from "@/components/wizard/SummaryPanel";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const steps: Step[] = [
  { id: 1, label: "Basic Info", description: "Drop details" },
  { id: 2, label: "Recipients", description: "Add your recipients" },
  { id: 3, label: "Token & Amount", description: "Select token and set amounts" },
  { id: 4, label: "Privacy Settings", description: "Configure privacy options" },
  { id: 5, label: "Review", description: "Review and confirm" },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "Q2 Contributor Rewards",
    description: "Rewards for core contributors of Q2. Thank you for building with us! 🚀",
    type: "stealth",
    schedule: "now"
  });

  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Header />
        
        <main className="flex-1 flex flex-col items-center">
          <StepIndicator steps={steps} currentStep={currentStep} />
          
          <div className="w-full max-w-6xl px-12 pb-32">
            <div className="flex gap-12">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  {currentStep === 1 && (
                    <BasicInfo formData={formData} updateFormData={updateFormData} />
                  )}
                  {currentStep === 2 && (
                    <Recipients formData={formData} updateFormData={updateFormData} />
                  )}
                  {currentStep === 3 && (
                    <TokenAmount formData={formData} updateFormData={updateFormData} />
                  )}
                  {currentStep > 3 && (
                    <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-border rounded-xl">
                      <p className="text-muted-foreground font-medium">Step {currentStep} content coming soon...</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <SummaryPanel data={formData} />
            </div>
          </div>
        </main>

        {/* Footer controls */}
        <div className="fixed bottom-0 right-0 w-[calc(100%-16rem)] p-8 bg-background/80 backdrop-blur-md border-t border-border flex items-center justify-between px-12 z-10">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-10 h-14 bg-accent/40 border-border font-bold tracking-wide"
            onClick={currentStep === 1 ? undefined : prevStep}
          >
            {currentStep === 1 ? "Cancel" : "Back"}
          </Button>

          <Button 
            size="lg" 
            className="px-10 h-14 bg-primary hover:bg-primary/90 text-white font-bold tracking-tight shadow-[0_4px_20px_rgba(124,58,237,0.3)] gap-3"
            onClick={nextStep}
          >
            {currentStep === 1 ? "Next: Add Recipients" : 
             currentStep === steps.length ? "Confirm & Launch Drop" : 
             `Next: ${steps[currentStep]?.label || "Finish"}`}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
