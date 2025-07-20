import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faClock, faSmile } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      name: "Mohamed A.",
      feedback: "The food was amazing and the service was excellent. I’ll definitely come back!",
      icon: "fas fa-user-circle"
    },
    {
      name: "Sara B.",
      feedback: "Fast delivery and delicious meals. Highly recommend their Big Mac!",
      icon: "fas fa-smile"
    },
    {
      name: "Youssef K.",
      feedback: "Perfect experience from start to finish. Friendly staff and great taste.",
      icon: "fas fa-star"
    },
  ];

  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center text-danger mb-5" data-aos="fade-down">🍟 About Us</h2>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <img  src="/img/about.jpg" alt="About McDonald's" className="img-fluid rounded shadow" />

        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h3 className="fw-bold text-danger mb-3">Welcome to McDonald's</h3>
          <p className="text-muted">
            At McDonald's, we're all about delivering great taste with a smile. Whether you're craving a classic Big Mac
            or a refreshing drink, our team is here to serve you fast and fresh!
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="row text-center mb-5">
        <div className="col-md-4" data-aos="zoom-in">
          <FontAwesomeIcon icon={faUtensils} className="fa-2x text-danger mb-2" />
          <h5 className="fw-bold">Quality Food</h5>
          <p className="text-muted">Always fresh, hot, and tasty meals made with care.</p>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <FontAwesomeIcon icon={faClock} className="fa-2x text-danger mb-2" />
          <h5 className="fw-bold">Fast Service</h5>
          <p className="text-muted">Your time matters. We serve quickly without sacrificing quality.</p>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <FontAwesomeIcon icon={faSmile} className="fa-2x text-danger mb-2" />
          <h5 className="fw-bold">Happy Customers</h5>
          <p className="text-muted">Our team is always here to make your visit enjoyable.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-5">
        <h2 className="text-center text-danger mb-5" data-aos="zoom-in">💬 Testimonials</h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div className="col-md-4" data-aos="fade-up" key={index}>
              <div className="card shadow-sm text-center p-4 h-100">
                <i className={`${t.icon} fa-2x text-danger mb-3`}></i>
                <h5 className="fw-bold">{t.name}</h5>
                <p className="text-muted">{t.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
