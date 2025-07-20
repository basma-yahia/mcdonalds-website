import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
export default function Home() {
  return (
    <div className="mt-5">

      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/img/hero.jpg')", // تأكدي من وجود الصورة
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="bg-dark bg-opacity-75 p-4 rounded">
          <h1 className="display-4 fw-bold">Welcome to McDonald's</h1>
          <p className="lead">Delicious meals made with love, served hot and fresh.</p>
          <Link to="/menu" className="btn btn-warning fw-bold px-4 mt-3">
            View Menu 🍔
          </Link>
        </div>
      </div>

      {/* Specials Carousel */}
      <div className="container py-5">
        <h2 className="text-center text-danger mb-4">🔥 Today's Specials</h2>

        <div id="specialsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="/img/fries.jpg"
                className="d-block w-100"
                alt="Fries"
               style={{ maxHeight: '450px', objectFit: 'contain', background: 'black'}}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Free Fries Friday</h5>
                <p>Get free fries with any Big Mac order!</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="/img/bigmac.jpg"
                className="d-block w-100"
                alt="Big Mac"
                style={{ maxHeight: '450px', objectFit: 'contain', background: 'black'}}

              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Big Mac Combo</h5>
                <p>Buy 1 Big Mac, get a drink 50% off!</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="/img/mcflurry.jpg"
                className="d-block w-100"
                alt="McFlurry"
                style={{ maxHeight: '450px', objectFit: 'contain', background: 'black'}}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>McFlurry Deal</h5>
                <p>Cool off with a free McFlurry after 9 PM!</p>
              </div>
            </div>

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#specialsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#specialsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
