import React, { useState } from "react";
import { 
  Check, 
  ChevronsUpDown, 
  Search, 
  Coins, 
  Info,
  ArrowRightLeft,
  AlertCircle,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Token {
  value: string;
  label: string;
  symbol: string;
  icon?: string;
  balance: string;
  color: string;
}

const tokens: Token[] = [
  { value: "sol", label: "Solana", symbol: "SOL", balance: "145.20", color: "#14F195" },
  { value: "usdc", label: "USD Coin", symbol: "USDC", balance: "2,540.00", color: "#2775CA" },
  { value: "usdt", label: "Tether", symbol: "USDT", balance: "1,200.00", color: "#26A17B" },
  { value: "bonk", label: "Bonk", symbol: "BONK", balance: "15,000,000.00", color: "#F5A623" },
  { value: "jup", label: "Jupiter", symbol: "JUP", balance: "850.50", color: "#4CC9F0" },
];

interface TokenAmountProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export function TokenAmount({ formData, updateFormData }: TokenAmountProps) {
  const [open, setOpen] = useState(false);
  const selectedToken = tokens.find((t) => t.value === formData.token) || null;

  return (
    <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <h2 className="text-xl font-bold">3. Token & Amount</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Token Selection */}
          <div className="space-y-4">
            <Label className="text-sm font-bold">Select Token</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger className={cn(buttonVariants({ variant: "outline" }), "w-full justify-between bg-accent/40 border-border h-14 px-4 hover:bg-accent cursor-pointer")}>
                {selectedToken ? (
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                      style={{ backgroundColor: selectedToken.color }}
                    >
                      {selectedToken.symbol[0]}
                    </div>
                    <div className="flex flex-col items-start leading-none text-left">
                      <span className="font-bold text-sm">{selectedToken.label}</span>
                      <span className="text-[10px] text-muted-foreground">{selectedToken.symbol}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Coins className="w-4 h-4" />
                    <span>Choose token...</span>
                  </div>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </PopoverTrigger>
              <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-card border-border shadow-2xl">
                <Command className="bg-transparent">
                  <CommandInput placeholder="Search token..." className="h-11 border-none focus:ring-0" />
                  <CommandList className="max-h-[300px]">
                    <CommandEmpty>No token found.</CommandEmpty>
                    <CommandGroup heading="Available Balance">
                      {tokens.map((token) => (
                        <CommandItem
                          key={token.value}
                          value={token.value}
                          onSelect={(currentValue) => {
                            updateFormData({ token: currentValue });
                            setOpen(false);
                          }}
                          className="flex items-center justify-between p-3 cursor-pointer hover:bg-primary/10 data-[selected=true]:bg-primary/10"
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                              style={{ backgroundColor: token.color }}
                            >
                              {token.symbol[0]}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-xs">{token.label}</span>
                              <span className="text-[10px] text-muted-foreground">{token.symbol}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] font-bold">{token.balance}</span>
                            {formData.token === token.value && (
                              <Check className="h-3 w-3 text-primary mt-1" />
                            )}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Amount Input */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="amount" className="text-sm font-bold">Total Amount</Label>
              {selectedToken && (
                <button 
                  className="text-[10px] font-bold text-primary hover:underline"
                  onClick={() => updateFormData({ amount: selectedToken.balance.replace(/,/g, '') })}
                >
                  MAX: {selectedToken.balance}
                </button>
              )}
            </div>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                className="bg-accent/40 border-border h-14 pl-4 pr-16 font-mono text-lg font-bold focus-visible:ring-primary"
                value={formData.amount || ""}
                onChange={(e) => updateFormData({ amount: e.target.value })}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
                {selectedToken?.symbol || "TOKEN"}
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex gap-4 mt-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold">Distribution Method</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Amounts will be split equally among all recipients by default. You can customize individual amounts in the next step or upload a CSV.
            </p>
          </div>
        </div>

        {/* Warning if balance exceeded */}
        {selectedToken && formData.amount && parseFloat(formData.amount) > parseFloat(selectedToken.balance.replace(/,/g, '')) && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive border border-destructive/20 animate-in fade-in zoom-in duration-200">
            <AlertCircle className="w-4 h-4" />
            <p className="text-[10px] font-bold uppercase tracking-tight">Insufficient balance in your wallet</p>
          </div>
        )}
      </div>

      {/* Advanced Settings */}
      <div className="space-y-6 pt-6 border-t border-border">
        <h3 className="text-sm font-bold flex items-center gap-2">
          Advanced Distribution Settings
          <span className="text-[10px] font-medium bg-accent px-1.5 py-0.5 rounded text-muted-foreground">OPTIONAL</span>
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2 p-4 rounded-xl border border-border bg-accent/20 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <Search className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-3 h-3 rounded-full border border-border" />
            </div>
            <p className="text-xs font-bold">Auto-Verify</p>
            <p className="text-[9px] text-muted-foreground">Verify recipients before sending</p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-accent/20 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <Shield className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-3 h-3 rounded-full border border-border" />
            </div>
            <p className="text-xs font-bold">Encrypted Link</p>
            <p className="text-[9px] text-muted-foreground">Protect distribution details</p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-accent/20 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-3 h-3 rounded-full border border-border" />
            </div>
            <p className="text-xs font-bold">Custom Label</p>
            <p className="text-[9px] text-muted-foreground">Add personal note to TX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
