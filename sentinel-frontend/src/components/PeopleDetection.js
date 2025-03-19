import React, { useState } from 'react';
import { Box, Container, Typography, Button, LinearProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { FaUserFriends, FaUpload } from 'react-icons/fa';

const PeopleDetection = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
      setResults(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    setUploading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/detect-people', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to process video');
      }

      setResults(data.results);
    } catch (error) {
      console.error('Upload failed:', error);
      setError(error.message || 'Failed to process video. Please try again.');
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 10,
        pb: 6,
        background: 'linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <FaUserFriends size={50} color="#007FFF" />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                mt: 2,
                background: 'linear-gradient(45deg, #1a1a1a 30%, #007FFF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              People Detection
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Upload a video to detect and count people entering and exiting
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              background: '#fff',
              borderRadius: 2,
              p: 4,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              sx={{
                border: '2px dashed #ccc',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: '#007FFF',
                },
              }}
              onClick={() => document.getElementById('video-input').click()}
            >
              <input
                type="file"
                id="video-input"
                accept="video/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <FaUpload size={40} color="#007FFF" />
              <Typography variant="h6" sx={{ mt: 2, color: '#666' }}>
                Drag and drop your video here or click to browse
              </Typography>
              <Typography variant="body2" sx={{ color: '#999', mt: 1 }}>
                Supported formats: MP4, AVI, MOV (Max size: 500MB)
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            {preview && (
              <Box sx={{ mt: 4 }}>
                <video
                  src={preview}
                  controls
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            )}

            {uploading && (
              <Box sx={{ mt: 4 }}>
                <LinearProgress />
                <Typography variant="body2" sx={{ mt: 1, color: '#666', textAlign: 'center' }}>
                  Processing video... This may take a few minutes.
                </Typography>
              </Box>
            )}

            {results && (
              <Box sx={{ mt: 4, p: 3, background: '#f8f9fa', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#1a1a1a' }}>
                  Results
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  People Entering: {results.entering}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  People Exiting: {results.exiting}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  Total Count: {results.total}
                </Typography>
              </Box>
            )}

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 4,
                background: '#007FFF',
                py: 1.5,
                '&:hover': {
                  background: '#0059B2',
                },
              }}
              onClick={handleUpload}
              disabled={!file || uploading}
            >
              {uploading ? 'Processing...' : 'Start Analysis'}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PeopleDetection;
