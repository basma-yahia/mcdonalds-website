import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5 pt-5 mb-5" style={{ overflowX: 'hidden' }}>
      <h2 className="text-center text-danger mb-4" data-aos="fade-down">📞 Contact Us</h2>

      <div className="row g-5">
        <div className="col-md-6" data-aos="fade-right">
          <h5 className="text-dark fw-bold mb-3">Reach Us At:</h5>
          <p><strong>📍 Address:</strong> 123 McDonald's Street, City, Country</p>
          <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>📧 Email:</strong> info@mcdonalds.com</p>

          <div className="mt-4 d-flex gap-3 flex-wrap">
            <a href="#"><i className="fab fa-facebook text-primary fs-4"></i></a>
            <a href="#"><i className="fab fa-instagram text-danger fs-4"></i></a>
            <a href="#"><i className="fab fa-twitter text-info fs-4"></i></a>
          </div>

          <div className="mt-4">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.911671070788!2d-74.00713868459366!3d40.71277647933117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMzYuMCJX!5e0!3m2!1sen!2sus!4v1634956584211!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0, maxWidth: '100%' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="p-4 bg-light shadow rounded" style={{ overflowX: 'hidden' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
