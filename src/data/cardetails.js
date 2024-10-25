import React, { useState } from 'react';
import '../styles/CarDetails.css';
import CustomAppBar from './CustomAppBar'; // Import the Custom AppBar
import Footer from './Footer'

const CarDetailsPage = () => {
  const [mainImage, setMainImage] = useState('https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80');
  const [rating, setRating] = useState(0); // State to store rating
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [faqOpen, setFaqOpen] = useState(null); // To handle the open/close state of each FAQ

  const carDetails = {
    title: 'Mazda CX-5 2021',
    price: '$43,000',
    location: 'Hoan Kiem district, Ha Noi city',
    rating: 4.8,
    reviews: 2436,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    mileage: '23,000 km',
    similarCars: [
      { id: 1, name: 'Jaguar XE L P250 2019', price: '$400/day', image: '/images/car-similar1.jpg' },
      { id: 2, name: 'BMW X5 2020', price: '$500/day', image: '/images/car-similar2.jpg' },
      { id: 3, name: 'Audi Q5 2021', price: '$450/day', image: '/images/car-similar3.jpg' }
    ],
    customerReviews: [
      { id: 1, reviewer: 'Guy Hawkins', date: 'June 13, 2023', comment: 'Great car, smooth experience!' },
      { id: 2, reviewer: 'Jane Doe', date: 'June 14, 2023', comment: 'The ride was comfortable and fuel-efficient!' },
      { id: 3, reviewer: 'John Smith', date: 'June 15, 2023', comment: 'Highly recommend, clean and well-maintained!' }
    ]
  };

  const thumbnails = [
    'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80',
    'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-exterior-right-front-three-quarter.jpeg?q=80',
    'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-exterior-right-front-three-quarter-70.jpeg?q=80'
  ];

  const faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'To rent a car, you will need a valid driver’s license, a credit card in your name, and proof of insurance.'
    },
    {
      question: 'Is there a mileage limit?',
      answer: 'Yes, there is a mileage limit. For this car, the limit is 150 miles per day. Additional miles will incur extra charges.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking free of charge if you do so 48 hours prior to the booking date. Late cancellations may be subject to a fee.'
    }
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
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
          <h1 className="car-details-title">{carDetails.title}</h1>
          <div className="car-rating">
            <span className="rating-stars">⭐⭐⭐⭐⭐</span>
            <span className="rating-value">{carDetails.rating} ({carDetails.reviews} reviews)</span>
          </div>
          <p className="location">{carDetails.location}</p>
        </div>

        {/* Details Section */}
        <div className="details">
          <div className="detail">
            <span className="icon">💺</span>
            <span>Seats</span>
            <span>7 seats</span>
          </div>
          <div className="detail">
            <span className="icon">⚙️</span>
            <span>Car gearbox</span>
            <span>Auto</span>
          </div>
          <div className="detail">
            <span className="icon">⛽️</span>
            <span>Fuel</span>
            <span>Gas</span>
          </div>
          <div className="detail">
            <span className="icon">🚗</span>
            <span>Car brand</span>
            <span>Kia</span>
          </div>
          <div className="detail">
            <span className="icon">🚗</span>
            <span>Type car</span>
            <span>Carnival</span>
          </div>
          <div className="detail">
            <span className="icon">🛞</span>
            <span>Mileage</span>
            <span>23,000 km</span>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="car-details-reviews-section">
          <h2 className="car-details-reviews-header">Customer Reviews</h2>
          {carDetails.customerReviews.map(review => (
            <div key={review.id} className="car-details-review">
              <p className="car-details-reviewer-name">{review.reviewer}</p>
              <p className="car-details-review-date">{review.date}</p>
              <p className="car-details-review-comment">{review.comment}</p>
            </div>
          ))}

          {/* Review Submission Input */}
          <div className="car-details-review-submission">
            <h2>Review</h2>
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

        {/* Similar Cars Section */}
        <div className="car-details-similar-cars-section">
          <h2>Similar Cars</h2>
          <div className="car-details-similar-cars">
            {carDetails.similarCars.map(car => (
              <div key={car.id} className="car-details-similar-car">
                <img src={car.image} alt={car.name} className="car-details-similar-car-image" />
                <h3 className="car-details-similar-car-name">{car.name}</h3>
                <p className="car-details-similar-car-price">{car.price}</p>
              </div>
            ))}
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
      </div>
      <Footer />
    </div>
  );
};

export default CarDetailsPage;