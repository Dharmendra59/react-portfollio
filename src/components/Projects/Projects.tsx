import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'mobile', 'design'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      description: 'A modern e-commerce platform with a sleek design and seamless user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 2,
      title: 'Travel App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      description: 'A mobile application for travelers to discover and book unique experiences.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      description: 'A creative portfolio design for a photographer showcasing their work in a unique layout.',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      description: 'A productivity tool that helps teams organize and track their tasks efficiently.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1510440777527-38815cfc6cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      description: 'A mobile app that tracks workouts, nutrition, and provides personalized fitness plans.',
      technologies: ['Flutter', 'Firebase', 'HealthKit'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 6,
      title: 'Restaurant Branding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      description: 'Complete branding package for a high-end restaurant including logo, menu, and website design.',
      technologies: ['Illustrator', 'InDesign', 'Photoshop'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="projects" ref={ref}>
      <div className="container projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Check out some of my recent work
        </motion.p>
        
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid"
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                className="project-card"
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.liveLink} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">
            View More on GitHub <Github size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;