import { useState } from "react";
import { motion } from "framer-motion";
import { User, FolderOpen, FlaskConical, Zap, Mail } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MobileTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: Tab[] = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'research', label: 'Research', icon: FlaskConical },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'contact', label: 'Contact', icon: Mail }
];

const MobileTabs = ({ activeTab, onTabChange }: MobileTabsProps) => {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-shrink-0 flex items-center gap-2 px-4 py-3 text-sm font-medium
                transition-colors duration-200 relative min-w-0
                ${isActive 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <IconComponent className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{tab.label}</span>
              
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabs;