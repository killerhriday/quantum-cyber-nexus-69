import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHero from "./MobileHero";
import MobileTabs from "./MobileTabs";
import { 
  CompactAbout, 
  CompactProjects, 
  CompactResearch, 
  CompactSkills, 
  CompactContact 
} from "./CompactSections";

const MobileLayout = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleNavigate = (section: string) => {
    setActiveTab(section);
  };

  const renderTabContent = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="min-h-0"
        >
          {activeTab === 'about' && <CompactAbout />}
          {activeTab === 'projects' && <CompactProjects />}
          {activeTab === 'research' && <CompactResearch />}
          {activeTab === 'skills' && <CompactSkills />}
          {activeTab === 'contact' && <CompactContact />}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MobileHero onNavigate={handleNavigate} />
      <MobileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="flex-1 overflow-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MobileLayout;