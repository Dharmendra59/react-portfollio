import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <motion.div 
        className="loader-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <motion.circle 
              cx="50" 
              cy="50" 
              r="40" 
              stroke="#ff3e6f" 
              strokeWidth="4" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path 
              d="M30,50 L45,65 L70,35" 
              stroke="#ffb86c" 
              strokeWidth="4" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Loading<span className="dots"><span>.</span><span>.</span><span>.</span></span>
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Loader;