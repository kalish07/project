import '../styles/Host.css'; // Import your CSS file
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
  Paper,
  InputLabel,
  Select,
} from '@mui/material';
// import './BecomeHost.css'; // Import your CSS file

const BecomeHost = () => {
  const [carName, setCarName] = useState('');
  const [carType, setCarType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [carImages, setCarImages] = useState([]);
  const [documents, setDocuments] = useState([]);

  const handleCarImagesChange = (e) => {
    setCarImages([...carImages, ...Array.from(e.target.files)]);
  };

  const handleDocumentsChange = (e) => {
    setDocuments([...documents, ...Array.from(e.target.files)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      carName,
      carType,
      fuelType,
      modelYear,
      rentalPrice,
      carImages,
      documents,
    });
  };

  return (
    <Container component="main" maxWidth="md" className="become-host-container">
      <Paper elevation={3} className="become-host-paper">
        <Typography variant="h4" align="center" gutterBottom className="become-host-title">
          Start Earning by Hosting Your Vehicle
        </Typography>
        <Typography variant="h6" align="center" paragraph className="become-host-subtitle">
          Share your car with MotoLease and earn money while providing reliable rental services to our community.
        </Typography>
        
        <form onSubmit={handleSubmit} className="become-host-form">
          <TextField
            label="Car Name"
            fullWidth
            margin="normal"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
            className="become-host-input"
          />
          
          <InputLabel id="car-type-label" className="become-host-label">Car Type</InputLabel>
          <Select
            labelId="car-type-label"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            fullWidth
            margin="normal"
            required
            className="become-host-select"
          >
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="SUV">SUV</MenuItem>
            <MenuItem value="Hatchback">Hatchback</MenuItem>
            <MenuItem value="Truck">Truck</MenuItem>
          </Select>

          <InputLabel id="fuel-type-label" className="become-host-label">Fuel Type</InputLabel>
          <Select
            labelId="fuel-type-label"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            fullWidth
            margin="normal"
            required
            className="become-host-select"
          >
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
          </Select>

          <TextField
            label="Model Year"
            fullWidth
            margin="normal"
            value={modelYear}
            onChange={(e) => setModelYear(e.target.value)}
            required
            className="become-host-input"
          />

          <TextField
            label="Rental Price (per day)"
            type="number"
            fullWidth
            margin="normal"
            value={rentalPrice}
            onChange={(e) => setRentalPrice(e.target.value)}
            required
            className="become-host-input"
          />

          <Box mt={2} className="become-host-file-upload">
            <Typography variant="h6" className="become-host-file-title">Images of Car</Typography>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleCarImagesChange}
              required
              className="become-host-file-input"
            />
          </Box>

          <Box mt={2} className="become-host-file-upload">
            <Typography variant="h6" className="become-host-file-title">Documents for Verification</Typography>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
              onChange={handleDocumentsChange}
              required
              className="become-host-file-input"
            />
          </Box>

          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Button type="submit" variant="contained" href ='/' color="primary" className="become-host-submit">
              Sign Up to Become a Host
            </Button>
          </Grid>
        </form>

        <Box mt={4}>
          <Typography variant="h5">Still have questions?</Typography>
          <Typography variant="body1">
            Visit our <a href="/faq">FAQ</a> or <a href="/contact">Contact Us</a> for more information.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default BecomeHost;