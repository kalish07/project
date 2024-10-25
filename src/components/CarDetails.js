import React, { useEffect, useState } from 'react';
import '../styles/CarDetails.css';
import CustomAppBar from './CustomAppBar'; // Import the Custom AppBar
import Footer from './Footer';
import faqs from './FAQs'; // Import the FAQs
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '@mui/material/Modal'; // Import Modal from Material UI
import ChatBot from './ChatBot';

const CarDetailsPage = () => {
  const { id } = useParams(); // Get car ID from URL parameters
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mainImage, setMainImage] = useState(''); // Initially empty
  const [rating, setRating] = useState(0); // State to store rating
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [faqOpen, setFaqOpen] = useState(null); // To handle the open/close state of each FAQ

  const [modalOpen, setModalOpen] = useState(false); // State for modal
  const [startDate, setStartDate] = useState(null); // Start date for booking
  const [endDate, setEndDate] = useState(null); // End date for booking
  const [totalPrice, setTotalPrice] = useState(0); // State to track the total price

  const openModal = () => setModalOpen(true); // Open the modal
  const closeModal = () => setModalOpen(false); // Close the modal

  const handleBookingContinue = () => {
    // Assuming we calculate total price based on date selection
    const pricePerDay = carDetails.price || 1000; // Default price if not available
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Calculate number of days
    if (days > 0) {
      setTotalPrice(days * pricePerDay); // Update total price
      closeModal(); // Close the modal after calculating price
    } else {
      alert('Please select valid dates.');
    }
  };

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (isNaN(id)) { // Validate ID format - should be a number
        setError('Invalid car ID format');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/car/${id}`); // Correct URL
        if (!response.ok) {
          throw new Error('Failed to fetch car details');
        }
        const data = await response.json();
        setCarDetails(data); // Set the car data
        setMainImage(data.image); // Set the main image dynamically to car's main image
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err); // Log the error
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return <div>Loading car details...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error state
  }

  const thumbnails = carDetails?.images || []; // Default to empty array if undefined

  const handleThumbnailClick = (image) => {
    setMainImage(image); // Set the selected thumbnail as the main image
  };

  const handleStarClick = (index) => {
    setRating(index + 1); // Set rating based on the clicked star
  };

  const handleStarHover = (index) => {
    setHoverRating(index + 1); // Show hover effect up to the hovered star
  };

  const handleStarMouseOut = () => {
    setHoverRating(0); // Reset the hover effect
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index); // Toggle open/close FAQ
  };

  return (
    <div className="car-details-container">
      {/* Custom Navigation Bar */}
      <CustomAppBar />
      
      {/* Main Image and Thumbnails */}
      <div className="car-details-main-image-container">
        <img src={mainImage} alt="Car" className="car-details-main-image" />
        <div className="car-details-thumbnail-container">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="car-details-thumbnail"
              onClick={() => handleThumbnailClick(thumbnail)}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="car-details-main-content">
        {/* Header Section */}
        <div className="car-details-header-section">
          <h1 className="car-details-title">{carDetails.name || 'Car name not available'}</h1>
          <div className="car-rating">
            <span className="rating-stars">⭐⭐⭐⭐⭐</span>
            <span className="rating-value">{carDetails.rating || 'No rating available'} ({carDetails.reviews?.length || 0} reviews)</span>
          </div>
          <p className="location">{carDetails.distance || 'Distance not available'}</p>

          {/* Book Now Button */}
          <button className="book-now-button" onClick={openModal}>Book Now</button>
        </div>

        {/* Details Section */}
        <div className="details">
          <div className="detail">
            <span className="icon">💺</span>
            <span>Seats</span>
            <span>{carDetails.seats || 'Not specified'}</span>
          </div>
          <div className="detail">
            <span className="icon">⚙️</span>
            <span>Transmission</span>
            <span>{carDetails.transmission || 'Not specified'}</span>
          </div>
          <div className="detail">
            <span className="icon">⛽️</span>
            <span>Fuel</span>
            <span>{carDetails.fuelType || 'Not specified'}</span>
          </div>
          <div className="detail">
            <span className="icon">🏎️</span>
            <span>Horsepower</span>
            <span>{carDetails.horsepower || 'Not specified'}</span>
          </div>
          <div className="detail">
            <span className="icon">🔧</span>
            <span>Torque</span>
            <span>{carDetails.torque || 'Not specified'}</span>
          </div>
          <div className="detail">
            <span className="icon">🛞</span>
            <span>Car Type</span>
            <span>{carDetails.type}</span>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="car-details-reviews-section">
          <h2 className="car-details-reviews-header">Customer Reviews</h2>
          {carDetails.reviews?.map(review => ( // Check for reviews
            <div key={review.id} className="car-details-review">
              <p className="car-details-reviewer-name">{review.reviewer || 'Anonymous'}</p>
              <p className="car-details-review-date">{review.date || 'Date not available'}</p>
              <p className="car-details-review-comment">{review.comment || 'No comments provided'}</p>
            </div>
          ))}

          {/* Review Submission Input */}
          <div className="car-details-review-submission">
            <h2>Submit a Review</h2>
            <input type="text" placeholder="Your name" className="car-details-reviewer-name-input" />
            <input type="email" placeholder="Your email" className="car-details-reviewer-email-input" />
            <textarea placeholder="Write your review" className="car-details-review-comment-input"></textarea>

            {/* Rating Section */}
            <h4>Rating</h4>
            <div className="car-details-review-rating">
              {[...Array(5)].map((star, index) => (
                <span
                  key={index}
                  className={`star ${index < (hoverRating || rating) ? 'gold' : ''}`}
                  onClick={() => handleStarClick(index)}
                  onMouseOver={() => handleStarHover(index)}
                  onMouseOut={handleStarMouseOut}
                >
                  &#9733;
                </span>
              ))}
            </div>

            <button className="car-details-review-submit-button">Submit Review</button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="car-details-faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h4>{faq.question}</h4>
                <span>{faqOpen === index ? '-' : '+'}</span>
              </div>
              {faqOpen === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        <Modal open={modalOpen} onClose={closeModal}>
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-button" onClick={closeModal}>&times;</button>
              <h2>Select Booking Dates</h2>

              {/* Date Picker Container */}
              <div className="date-picker-container">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start Date"
                />
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="End Date"
                />
              </div>

              <button className="continue-button" onClick={handleBookingContinue}>
                Continue
              </button>
            </div>
          </div>
        </Modal>

        {/* Total Price Section */}
        {totalPrice > 0 && (
          <div className="total-price">
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
            <button className="proceed-to-pay-button">Proceed to Pay</button>
          </div>
        )}
      </div>
      <ChatBot />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CarDetailsPage;