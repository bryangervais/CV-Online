import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'profile'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {activeTab === 'home' ? <Home /> : <Profile />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
