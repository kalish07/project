import React from 'react';
import { useParams } from 'react-router-dom';
import carData from '../data/carData'; // Adjust the path if needed
import { Rating } from '@mui/material'; // Make sure to install @mui/material
import '../styles/CarDetailsPage.css'; // Import the CSS file

const CarDetailsPage = () => {
  const { carId } = useParams();
  const car = carData.find(car => car.id === Number(carId)); // Convert carId to number

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="container">
      <div className="gallery">
        <img src={car.images[0]} alt="Car" className="mainImage" />
        <div className="thumbnails">
          {car.images.map((image, index) => (
            <img key={index} src={image} alt={`Thumbnail ${index}`} className="thumbnail" />
          ))}
        </div>
      </div>
      <div className="details">
        <h1>{car.name}</h1> {/* Updated to use car.name */}
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Fuel Type:</strong> {car.fuelType}</p>
        <p><strong>Seating Capacity:</strong> {car.seats}</p>
      </div>
      <div className="ratings">
        <h2>Ratings and Reviews</h2>
        <Rating name="read-only" value={car.rating} readOnly />
        <ul>
          {car.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
      <div className="location">
        <h2>Pickup Location</h2>
        <p>{car.location}</p>
      </div>
      <div className="offers">
        <h2>Exclusive Offers</h2>
        <p>{car.offers.join(', ')}</p> {/* Join offers array with commas */}
      </div>
      <div className="pricing">
        <h2>Pricing</h2>
        <p><strong>Base Price:</strong> {car.price}</p>
        <p><strong>Additional Costs:</strong> {car.additionalCosts}</p>
      </div>
      <div className="actions">
        <button className="button">Login to Continue</button>
        <button className="button">Book Now</button>
      </div>
    </div>
  );
};

export default CarDetailsPage;