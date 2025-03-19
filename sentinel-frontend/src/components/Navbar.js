import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    if (location.pathname === '/' && path !== '/') {
      // If we're on home page, scroll to section
      const element = document.getElementById(path.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/') {
      // Navigate to home
      navigate(path);
    } else {
      // Navigate to other pages
      navigate(path);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: isScrolled ? 1 : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          onClick={() => handleNavigation('/')}
        >
          <FaEye size={24} color={isScrolled ? '#007FFF' : '#fff'} />
          <Typography
            variant="h6"
            sx={{
              color: isScrolled ? '#1a1a1a' : '#fff',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
            }}
          >
            Sentinel{' '}
            <Box component="span" sx={{ color: '#007FFF', ml: 0.5 }}>
              Vision
            </Box>
          </Typography>
        </motion.div>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'How It Works', path: '/how-it-works' },
            { name: 'About Us', path: '/about-us' }
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                onClick={() => handleNavigation(item.path)}
                sx={{
                  color: isScrolled ? '#1a1a1a' : '#fff',
                  position: 'relative',
                  '&:hover': {
                    color: '#007FFF',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: location.pathname === item.path ? '100%' : '0%',
                    height: '2px',
                    background: '#007FFF',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
