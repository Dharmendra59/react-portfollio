import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2
      }
    }
  };

  const socialItemVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <div className="home">
      <div className="home-bg"></div>
      <div className="container home-container">
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="greeting" variants={itemVariants}>
            Hello, I'm
          </motion.span>
          <motion.h1 className="name" variants={itemVariants}>
            Dharmendra <span>Singh</span>
          </motion.h1>
          <motion.h2 className="profession" variants={itemVariants}>
            Creative <span className="highlight">Developer</span> & <span className="highlight">Designer</span>
          </motion.h2>
          <motion.p className="description" variants={itemVariants}>
            I craft stunning digital experiences that live at the intersection of art and technology. 
            With a passion for creating beautiful, functional designs, I help brands stand out in the digital landscape.
          </motion.p>
          
          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight size={16} />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="social-links"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" variants={socialItemVariants}>
              <Github size={20} />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" variants={socialItemVariants}>
              <Linkedin size={20} />
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" variants={socialItemVariants}>
              <Twitter size={20} />
            </motion.a>
            <motion.a href="mailto:singhdhas9559604443a@gmail.com" variants={socialItemVariants}>
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="singh" />
          </div>
          <div className="experience-badge">
            <span className="years">3+</span>
            <span className="text">Years<br/>Experience</span>
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div 
          className="mouse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div 
            className="wheel"
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5
            }}
          ></motion.div>
        </motion.div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          Scroll Down
        </motion.span>
      </div>
    </div>
  );
};

export default Home;