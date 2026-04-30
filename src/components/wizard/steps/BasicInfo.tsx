import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Globe, Shield, EyeOff, Play, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BasicInfoProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export function BasicInfo({ formData, updateFormData }: BasicInfoProps) {
  const dropTypes = [
    { 
      id: "public", 
      label: "Public Drop", 
      icon: Globe, 
      description: "Everyone can see the recipients and amounts on-chain." 
    },
    { 
      id: "stealth", 
      label: "Stealth Drop", 
      icon: Shield, 
      badge: "POPULAR",
      description: "Recipients and amounts are hidden. Only you can audit this drop." 
    },
    { 
      id: "hybrid", 
      label: "Hybrid Drop", 
      icon: EyeOff, 
      description: "Hidden distribution with optional reveal of summary stats." 
    },
  ];

  const scheduleOptions = [
    { id: "now", label: "Execute Now", sub: "Start the drop immediately", icon: Play },
    { id: "later", label: "Schedule for Later", sub: "Choose a future date and time", icon: Calendar },
  ];

  return (
    <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <h2 className="text-xl font-bold">1. Basic Information</h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="drop-name" className="text-sm font-bold">Drop Name</Label>
              <span className="text-[10px] text-muted-foreground font-mono">21/50</span>
            </div>
            <Input 
              id="drop-name" 
              placeholder="e.g. Q2 Contributor Rewards" 
              className="bg-accent/40 border-border h-12 focus-visible:ring-primary"
              value={formData.name || ""}
              onChange={(e) => updateFormData({ name: e.target.value })}
            />
            <p className="text-[10px] text-muted-foreground">A name to help you identify this drop</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="description" className="text-sm font-bold">Description (Optional)</Label>
              <span className="text-[10px] text-muted-foreground font-mono">59/200</span>
            </div>
            <Textarea 
              id="description" 
              placeholder="Add a description for your recipients..." 
              className="bg-accent/40 border-border min-h-[140px] focus-visible:ring-primary resize-none"
              value={formData.description || ""}
              onChange={(e) => updateFormData({ description: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Drop Type Selection */}
      <div className="space-y-4">
        <Label className="text-sm font-bold">Drop Type</Label>
        <p className="text-xs text-muted-foreground">Choose how you want this distribution to be executed.</p>
        
        <RadioGroup 
          value={formData.type || "stealth"} 
          onValueChange={(val) => updateFormData({ type: val })}
          className="grid grid-cols-3 gap-4"
        >
          {dropTypes.map((type) => (
            <div key={type.id} className="relative">
              <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
              <Label
                htmlFor={type.id}
                className={cn(
                  "flex flex-col h-full p-5 rounded-xl border-2 transition-all cursor-pointer space-y-4",
                  formData.type === type.id 
                    ? "bg-primary/5 border-primary shadow-[0_0_15px_rgba(124,58,237,0.1)]" 
                    : "bg-accent/40 border-border hover:border-accent-foreground/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <type.icon className={cn("w-5 h-5", formData.type === type.id ? "text-primary" : "text-muted-foreground")} />
                  {formData.type === type.id && (
                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm tracking-tight">{type.label}</span>
                    {type.badge && (
                      <span className="bg-primary/20 text-primary text-[8px] font-bold px-1.5 py-0.5 rounded leading-none italic uppercase">
                        {type.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Schedule Selection */}
      <div className="space-y-4">
        <Label className="text-sm font-bold">Schedule (Optional)</Label>
        <p className="text-xs text-muted-foreground">Execute this drop immediately or schedule for later.</p>
        
        <RadioGroup 
          value={formData.schedule || "now"} 
          onValueChange={(val) => updateFormData({ schedule: val })}
          className="grid grid-cols-2 gap-4"
        >
          {scheduleOptions.map((opt) => (
            <div key={opt.id} className="relative">
              <RadioGroupItem value={opt.id} id={opt.id} className="sr-only" />
              <Label
                htmlFor={opt.id}
                className={cn(
                  "flex items-center gap-4 p-5 rounded-xl border-2 transition-all cursor-pointer",
                  formData.schedule === opt.id 
                    ? "bg-primary/5 border-primary" 
                    : "bg-accent/40 border-border hover:border-accent-foreground/50"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                  formData.schedule === opt.id ? "bg-primary/10 text-primary" : "bg-accent text-muted-foreground"
                )}>
                  <opt.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{opt.label}</span>
                    {formData.schedule === opt.id && (
                       <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">{opt.sub}</p>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
