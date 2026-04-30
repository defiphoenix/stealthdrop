import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface Step {
  id: number;
  label: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between px-8 py-8 w-full max-w-5xl">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300",
                  isActive 
                    ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]" 
                    : isCompleted 
                    ? "bg-primary border-primary text-white" 
                    : "bg-accent/40 border-border text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <div className="flex flex-col text-left">
                <span className={cn(
                  "text-xs font-bold leading-tight",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}>
                  {step.label}
                </span>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                  {step.description}
                </span>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-border mx-4 max-w-[60px]" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
