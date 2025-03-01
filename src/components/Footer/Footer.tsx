import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-container">
          <div className="footer-content">
            <div className="footer-about">
              <h3 className="footer-logo">PORTFOLIO</h3>
              <p>
                I create stunning digital experiences that combine beautiful design with flawless functionality. Let's work together to bring your vision to life.
              </p>
              <div className="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-services">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Mobile Development</a></li>
                <li><a href="#services">E-Commerce Solutions</a></li>
                <li><a href="#services">SEO & Analytics</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <MapPin size={18} />
                  <span>Hardoi, Uttar Pradesh(241001)</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+91-7380757082</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>singhdhas9559604443a@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Portfolio. All Rights Reserved.</p>
          <motion.button 
            className="scroll-top"
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;