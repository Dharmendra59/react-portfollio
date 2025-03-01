import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: <Briefcase size={24} />, count: '50+', label: 'Projects Completed' },
    { icon: <Award size={24} />, count: '10+', label: 'Awards Received' },
    { icon: <Heart size={24} />, count: '30+', label: 'Happy Clients' },
    { icon: <GraduationCap size={24} />, count: '5+', label: 'Years Experience' }
  ];

  return (
    <div className="about" ref={ref}>
      <div className="container about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" alt="About Me" />
            </div>
            <div className="experience-shape">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF3E6F" d="M41.3,-59.1C54.4,-51.2,66.9,-41.7,73.5,-28.5C80.2,-15.4,81,-1.5,77.8,11.5C74.6,24.5,67.3,36.6,57.4,46.9C47.5,57.2,35,65.7,20.8,70.3C6.6,74.9,-9.3,75.6,-23.9,71.1C-38.5,66.6,-51.8,56.9,-61.2,44.2C-70.6,31.5,-76.1,15.7,-76.3,-0.2C-76.5,-16.1,-71.4,-32.3,-61.5,-43.9C-51.6,-55.5,-36.9,-62.6,-22.8,-69.8C-8.7,-77,5.8,-84.3,19.2,-81.1C32.6,-77.9,45,-67.1,41.3,-59.1Z" transform="translate(100 100)" />
              </svg>
            </div>
          </motion.div>
          
          <div className="about-text">
            <motion.h3
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Creative Developer & Designer Based in New York
            </motion.h3>
            
            <motion.p
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate developer and designer with over 5 years of experience creating stunning digital experiences. My journey in the digital world began when I discovered my love for bringing creative ideas to life through code.
            </motion.p>
            
            <motion.p
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              I specialize in building modern, responsive websites and applications that not only look beautiful but also deliver exceptional user experiences. My approach combines creative design thinking with technical expertise to create solutions that stand out.
            </motion.p>
            
            <motion.div 
              className="skills-container"
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="skill-group">
                <h4>Design</h4>
                <div className="skills">
                  <span>UI/UX</span>
                  <span>Figma</span>
                  <span>Adobe XD</span>
                  <span>Photoshop</span>
                </div>
              </div>
              
              <div className="skill-group">
                <h4>Development</h4>
                <div className="skills">
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="about-cta"
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
            >
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="stats-container"
          variants={statsVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              className="stat-item" 
              key={index}
              variants={statItemVariants}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <h3 className="stat-count">{stat.count}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;