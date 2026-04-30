import React from "react";
import { UserPlus, Upload, FileText, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface RecipientsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Recipients({ formData, updateFormData }: RecipientsProps) {
  return (
    <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <h2 className="text-xl font-bold">2. Add Recipients</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer bg-accent/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Upload CSV / JSON</p>
              <p className="text-[10px] text-muted-foreground mt-1">Download our template to get started</p>
            </div>
          </div>

          <div className="p-8 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer bg-accent/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Add Manually</p>
              <p className="text-[10px] text-muted-foreground mt-1">Enter addresses one by one</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <Label className="text-sm font-bold">Recipient List (0)</Label>
            <div className="relative w-48">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input placeholder="Search..." className="h-8 pl-8 text-xs bg-accent/40 border-border" />
            </div>
          </div>

          <div className="bg-accent/20 border border-border rounded-xl p-12 flex flex-col items-center justify-center space-y-3 opacity-50">
            <FileText className="w-8 h-8 text-muted-foreground" />
            <p className="text-xs font-medium text-muted-foreground">No recipients added yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
