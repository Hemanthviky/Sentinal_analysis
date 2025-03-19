import React from 'react';
import { Box, Container, Typography, Grid, Card, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const team = [
  {
    name: 'Dineshkumar L',
    role: 'ML Engineer',
    email: 'ldineshkumar38@gmail.com',
    image: '',
  },
  {
    name: 'Hemanth N',
    role: 'UI/UX Designer',
    email: 'hemanthviky@gmail.com',
    image: '',
  },
  {
    name: 'Navaneeth S',
    role: 'Backend Developer',
    email: 'navaneeth.wb@gmail.com',
    image: '',
  },
  {
    name: 'Sridhar G',
    role: 'Full Stack Developer',
    email: 'sridharG@gmail.com',
    image: '',
  },
];

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(45deg, #1a1a1a 30%, #007FFF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
              mb: 8,
            }}
          >
            Meet our team of experts dedicated to revolutionizing video analysis technology
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: '#fff',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '4px solid #fff',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#1a1a1a',
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#007FFF',
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      color: '#666',
                      '& svg': {
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#007FFF',
                        },
                      },
                    }}
                  >
                    <FaEnvelope size={20} title={member.email} />
                    <FaLinkedin size={20} />
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
