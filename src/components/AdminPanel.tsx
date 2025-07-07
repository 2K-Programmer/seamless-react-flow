import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, User, Briefcase, Award, Code, Palette, FileText, Star, Mail } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General Info', icon: User },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Star },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">General Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Job Title</label>
                <input
                  type="text"
                  defaultValue="Full Stack Developer"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Headline</label>
                <textarea
                  rows={3}
                  defaultValue="Passionate about creating exceptional digital experiences with modern technologies."
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">About Section</h3>
            <div className="text-slate-400">About section editing coming soon...</div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Skills Management</h3>
            <div className="text-slate-400">Skills editing coming soon...</div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Projects Management</h3>
            <div className="text-slate-400">Projects editing coming soon...</div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Experience & Internships</h3>
            <div className="text-slate-400">Experience editing coming soon...</div>
          </div>
        );
      
      case 'certifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Certifications Management</h3>
            <div className="text-slate-400">Certifications editing coming soon...</div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="text-slate-400">Contact editing coming soon...</div>
          </div>
        );
      
      case 'design':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Design Settings</h3>
            <div className="text-slate-400">Design settings coming soon...</div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Site Settings</h3>
            <div className="text-slate-400">Site settings coming soon...</div>
          </div>
        );
      
      default:
        return <div>Select a tab to begin editing</div>;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Admin Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-4xl bg-slate-900/95 backdrop-blur-md border-l border-slate-700 z-50 flex"
          >
            {/* Sidebar with tabs */}
            <div className="w-64 bg-slate-800/50 border-r border-slate-700 p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Admin Panel
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Content area */}
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {renderTabContent()}
              </motion.div>
              
              {/* Save button */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdminPanel;