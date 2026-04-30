import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { 
  ChevronDown, 
  Wallet,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Create Drop</h1>
        <p className="text-muted-foreground text-sm">Launch a token distribution in a few simple steps.</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="bg-accent/40 border-border text-xs h-9 hover:bg-accent">
          Save as Draft
        </Button>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "bg-accent/40 border-border h-9 gap-2 cursor-pointer")}>
              <div className="w-5 h-5 rounded-full bg-[#14f195] flex items-center justify-center">
                <span className="text-[10px] text-black font-bold">S</span>
              </div>
              <span className="text-sm font-medium">Solana</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-card border-border">
              <DropdownMenuItem className="gap-2">
                <div className="w-4 h-4 rounded-full bg-[#14f195]" />
                Solana
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                Ethereum
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="bg-accent/40 border-border h-9 gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500" />
            <span className="text-sm font-medium font-mono text-muted-foreground">7xQd...3FZ8</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
}
