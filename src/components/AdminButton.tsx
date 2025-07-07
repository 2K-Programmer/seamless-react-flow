import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

interface AdminButtonProps {
  onClick: () => void;
}

const AdminButton = ({ onClick }: AdminButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
        rotate: 90
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      title="Open Admin Panel"
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="group-hover:animate-none"
      >
        <Settings className="w-6 h-6 text-white" />
      </motion.div>
      
      {/* Pulse ring animation */}
      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
    </motion.button>
  );
};

export default AdminButton;