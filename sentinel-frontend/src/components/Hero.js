import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaRobot } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt size={30} />,
    title: 'Enhanced Security',
    description: 'Real-time monitoring and instant alerts for security threats',
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'Advanced Analytics',
    description: 'Detailed insights and patterns from video data',
  },
  {
    icon: <FaRobot size={30} />,
    title: 'AI-Powered',
    description: 'State-of-the-art machine learning algorithms',
  },
];

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #007FFF 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '-20%',
          right: '-10%',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    lineHeight: 1.2,
                    color: '#fff',
                    mb: 3,
                  }}
                >
                  Intelligent Video Analysis with{' '}
                  <Box
                    component="span"
                    sx={{
                      color: '#007FFF',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: '#007FFF',
                      },
                    }}
                  >
                    AI Technology
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#e0e0e0',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  Transform your video surveillance with our cutting-edge AI solutions.
                  Get real-time insights, enhanced security, and powerful analytics.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const element = document.getElementById('services');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{
                    background: '#007FFF',
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: '#0059B2',
                    },
                  }}
                >
                  Explore Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    const element = document.getElementById('how-it-works');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: '#007FFF',
                      color: '#007FFF',
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 3,
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: 2,
                          backdropFilter: 'blur(10px)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                          },
                        }}
                      >
                        <Box sx={{ color: '#007FFF' }}>{feature.icon}</Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ color: '#fff', fontWeight: 'bold', mb: 0.5 }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                            {feature.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
