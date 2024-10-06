import React, { useEffect, useState } from 'react';
import './aboutUs.css';

function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false); // For animation effects

  // Trigger the animation only once on the first load
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500); // Apply animation once after page load
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="about-container">
      <div className={`about-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="image-section">
          <img
            src="/istockphoto.jpg" // Replace with your image URL
            alt="About Us"
            className="about-image"
          />
        </div>
        <div className={`text-section ${isLoaded ? 'slide-in' : ''}`}>
          <h2>About Us</h2>
          <p>
          At Dantewada, we believe in creating a memorable and luxurious experience for every guest. Located in the heart of Dantewada, our hotel offers the perfect combination of comfort, convenience, and style. Whether you’re traveling for business or leisure, we cater to your every need, ensuring that your stay is both relaxing and enjoyable.
          </p>

          {/* <h3>Your Solutions</h3> */}
          <ul>
            <li>
              <strong>Our Mission:</strong> Our mission is simple: to provide exceptional hospitality that exceeds our guests' expectations. From the moment you step through our doors, we aim to make you feel at home, offering personalized service, luxurious accommodations, and a wide range of amenities designed to enhance your stay.</li>
            <li>
              <strong>Why Choose Us:</strong> We offer a prime location near Danteshwari Temple, affordable luxury, and attentive service that ensures your stay is comfortable and hassle-free. </li>
            <li>
              <strong>Our Values:</strong>We are guided by our core values of hospitality, integrity, and excellence. Our team is committed to creating a welcoming environment where every guest feels valued and respected. We constantly strive to improve, ensuring that every stay is better than the last.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
