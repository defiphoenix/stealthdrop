import React from "react";
import { 
  LayoutDashboard, 
  PlusCircle, 
  Droplets, 
  FileCheck, 
  Wallet, 
  BarChart3, 
  Users, 
  Settings,
  ChevronDown,
  Info,
  HelpCircle,
  BookOpen,
  MessageSquare,
  MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: PlusCircle, label: "Create Drop", id: "create-drop", active: true },
  { icon: Droplets, label: "Drops", id: "drops" },
  { icon: FileCheck, label: "Claims", id: "claims" },
  { icon: Wallet, label: "Treasury", id: "treasury" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Users, label: "Contacts", id: "contacts" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export function Sidebar() {
  return (
    <div className="w-64 h-full border-r border-border bg-background flex flex-col p-4 space-y-6">
      {/* Brand */}
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Droplets className="text-white w-5 h-5 fill-current" />
        </div>
        <span className="font-bold text-xl tracking-tight">StealthDrop</span>
      </div>

      {/* Team Selector */}
      <div className="px-1">
        <button className="w-full flex items-center justify-between p-2 rounded-lg bg-accent/50 border border-border hover:bg-accent transition-colors">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600" />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Team Alpha</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              item.active 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Treasury Card */}
      <div className="px-1 mt-auto">
        <div className="p-4 rounded-xl bg-accent/40 border border-border space-y-3">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Treasury Balance</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold tracking-tight">$425,183.42</h3>
          </div>
          <button className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline">
            View Treasury <span>→</span>
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="px-1">
        <div className="p-4 rounded-xl bg-accent/20 border border-border space-y-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Need help?</span>
          </div>
          <p className="text-xs text-muted-foreground">Check our docs or contact support.</p>
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md border border-border text-[10px] font-bold uppercase tracking-widest hover:bg-accent">
              <BookOpen className="w-3 h-3" />
              Docs
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md border border-border text-[10px] font-bold uppercase tracking-widest hover:bg-accent">
              <MessageSquare className="w-3 h-3" />
              Support
            </button>
          </div>
        </div>
      </div>

      {/* User profile */}
      <div className="px-1 pt-4 border-t border-border">
        <div className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-accent transition-colors">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 rounded-lg">
              <AvatarImage src="" />
              <AvatarFallback className="bg-orange-500 text-white rounded-lg">A</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-bold">Admin</p>
              <p className="text-[10px] text-muted-foreground font-medium truncate w-32">admin@teamalpha.io</p>
            </div>
          </div>
          <MoreVertical className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
