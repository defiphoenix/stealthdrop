import React from "react";
import { Info, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SummaryPanelProps {
  data: any;
}

const tokenMap: Record<string, { symbol: string, color: string }> = {
  sol: { symbol: "SOL", color: "#14F195" },
  usdc: { symbol: "USDC", color: "#2775CA" },
  usdt: { symbol: "USDT", color: "#26A17B" },
  bonk: { symbol: "BONK", color: "#F5A623" },
  jup: { symbol: "JUP", color: "#4CC9F0" },
};

export function SummaryPanel({ data }: SummaryPanelProps) {
  const selectedToken = data.token ? tokenMap[data.token] : null;

  return (
    <div className="w-[340px] flex flex-col gap-6">
      {/* Drop Summary Card */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-6">
        <h3 className="font-bold text-lg">Drop Summary</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between group cursor-default">
            <span className="text-sm text-muted-foreground">Drop Type</span>
            <div className="bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold px-2 py-1 rounded flex items-center gap-1.5">
              <Shield className="w-3 h-3 fill-current" />
              {data.type === 'public' ? 'Public Drop' : data.type === 'hybrid' ? 'Hybrid Drop' : 'Stealth Drop'}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Recipients</span>
            <span className="text-sm font-medium">{data.recipientsCount || "—"}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Token</span>
            {selectedToken ? (
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold text-black"
                  style={{ backgroundColor: selectedToken.color }}
                >
                  {selectedToken.symbol[0]}
                </div>
                <span className="text-sm font-medium">{selectedToken.symbol}</span>
              </div>
            ) : (
              <span className="text-sm font-medium">—</span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Amount</span>
            <span className="text-sm font-medium">
              {data.amount ? `${data.amount} ${selectedToken?.symbol || ''}` : "—"}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Network</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#14f195]" />
              <span className="text-sm font-medium">Solana</span>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <span className="text-xs font-medium">Est. Network Fee</span>
            <Info className="w-3 h-3" />
          </div>
          <span className="text-sm font-mono font-bold">&lt; 0.01 SOL</span>
        </div>
      </div>

      {/* Info Card 1 */}
      <div className="bg-[#1e1432]/30 border border-primary/20 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Info className="w-5 h-5" />
          <h4 className="text-sm font-bold">How Stealth Drop works</h4>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          We batch your distribution into a single on-chain transaction. Recipients claim via a secure link or by connecting their wallet if on your list.
        </p>
        <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
          Learn more <span>→</span>
        </button>
      </div>

      {/* Info Card 2 */}
      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-emerald-500">
          <Shield className="w-5 h-5 py-0.5" />
          <h4 className="text-sm font-bold">You're in control</h4>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-xs text-muted-foreground">Only you can view recipients</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-xs text-muted-foreground">Exportable audit log</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-xs text-muted-foreground">Revokable viewing key</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
