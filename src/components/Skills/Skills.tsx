import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Vue.js', level: 75 },
    { name: 'TypeScript', level: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Firebase', level: 85 }
  ];

  const designSkills = [
    { name: 'Figma', level: 90 },
    { name: 'Adobe XD', level: 85 },
    { name: 'Photoshop', level: 80 },
    { name: 'Illustrator', level: 75 },
    { name: 'UI/UX Design', level: 90 }
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Responsive Design', level: 95 },
    { name: 'SEO', level: 75 },
    { name: 'Performance Optimization', level: 85 },
    { name: 'Testing', level: 70 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderSkillBars = (skills) => {
    return skills.map((skill, index) => (
      <motion.div 
        className="skill-item"
        key={index}
        variants={skillVariants}
      >
        <div className="skill-info">
          <h3>{skill.name}</h3>
          <span>{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div 
            className="skill-progress"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          ></motion.div>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="skills" ref={ref}>
      <div className="container skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive overview of my technical expertise and proficiency
        </motion.p>
        
        <div className="skills-content">
          <div className="skills-grid">
            <motion.div 
              className="skills-category"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h2 className="category-title">Frontend</h2>
              {renderSkillBars(frontendSkills)}
            </motion.div>
            
            <motion.div 
              className="skills-category"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <h2 className="category-title">Backend</h2>
              {renderSkillBars(backendSkills)}
            </motion.div>
            
            <motion.div 
              className="skills-category"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <h2 className="category-title">Design</h2>
              {renderSkillBars(designSkills)}
            </motion.div>
            
            <motion.div 
              className="skills-category"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <h2 className="category-title">Other</h2>
              {renderSkillBars(otherSkills)}
            </motion.div>
          </div>
          
          <motion.div 
            className="skills-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Skills" />
            <div className="experience-badge">
              <span>5+</span>
              <p>Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;