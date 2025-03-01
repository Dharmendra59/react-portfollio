import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Rocket, 
  BarChart 
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Creating responsive, fast, and user-friendly websites using the latest technologies and best practices.',
      color: '#ff3e6f'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Designing beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.',
      color: '#ffb86c'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Building native and cross-platform mobile applications that work seamlessly across all devices.',
      color: '#4d79ff'
    },
    {
      icon: <Globe size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Developing secure, scalable online stores that drive sales and provide a smooth shopping experience.',
      color: '#36e2ec'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Performance Optimization',
      description: 'Improving website speed and performance to enhance user experience and boost search engine rankings.',
      color: '#9c6bff'
    },
    {
      icon: <BarChart size={40} />,
      title: 'SEO & Analytics',
      description: 'Implementing strategies to improve visibility in search engines and analyzing user behavior for insights.',
      color: '#ff6b6b'
    }
  ];

  return (
    <div className="services" ref={ref}>
      <div className="container services-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I offer a wide range of services to help your business grow and succeed in the digital world
        </motion.p>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={serviceVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="service-icon" style={{ background: service.color }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.div 
                className="service-bg"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ background: `${service.color}20` }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Let's work together to create something amazing</p>
          </div>
          <motion.a 
            href="#contact" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;