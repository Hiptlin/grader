import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [page, setPage] = useState('home');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setSuccess(false);
      return;
    }
    if (!city || city.trim().length < 2) {
      setError('Please enter a valid city name.');
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError('');
    toast.success(`Wishlist created for ${email} in ${city}`);
    setPage('thankyou');
    setEmail('');
    setCity('');
  };

  return (
    <div className="app">
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-park">Park</span>
          <span className="logo-ez">EZ</span>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`links ${menuOpen ? 'show-menu' : ''}`}>
          <button onClick={() => { setPage('home'); setMenuOpen(false); }}>
            Home
          </button>
          <button onClick={() => { setPage('about'); setMenuOpen(false); }}>
            About
          </button>
        </div>
      </nav>
      {/* -------- END NAVBAR ------- */}

      {page === 'home' && (
        <div className="page-transition">
          <div className="hero-section">
            <div className="overlay">
              <h1 className="wishlist-heading">
  Create Your Parking Wishlist with <span className="logo"><span className="logo-park">Park</span><span className="logo-ez">EZ</span></span>
</h1>

              <p>
                Connect with parking vendors for pre‑booking with real‑time
                availability. Start joining your parking journey today!
              </p>

              <div className="form-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    setError('');
                    setSuccess(false);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter your city"
                  value={city}
                  onChange={e => {
                    setCity(e.target.value);
                    setError('');
                    setSuccess(false);
                  }}
                />
                <button className="animated-button" onClick={handleSubmit}>
                  join our journey
                </button>
              </div>

              {error && <span className="error-text">{error}</span>}
              {success && (
                <span className="success-text">
                  Thanks for joining <strong>{email}</strong> in{' '}
                  <strong>{city}</strong>!
                </span>
              )}

              <div className="features">
                <p>★★★★★ Easy Booking&nbsp;&nbsp;&nbsp;Real‑time Updates</p>
              </div>

              <div className="testimonial">
                <q>No more last‑minute parking stress!</q>
                <p>— TETRAX AI LABS</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {page === 'about' && (
        <div className="page-transition">
          <div className="about-section">
            <h1>About ParkEZ</h1>
            <p>
              ParkEZ is a pre‑booking platform that connects vendors and users
              with real‑time parking availability. Vendors can manage bookings,
              monitor space usage, and optimize parking operations.
            </p>
            <p>
              Future features include analytics dashboards, space utilization
              heatmaps, and smart alerts to help vendors optimize their capacity.
            </p>

            <div className="return-home-btn">
              <button onClick={() => setPage('home')}>Return Home</button>
            </div>
          </div>
        </div>
      )}

      {page === 'thankyou' && (
        <div className="page-transition">
          <div className="thankyou-section">
            <h1>Thank You for Joining Our Journey!</h1>
            <p>We’ll reach out to you soon with exciting updates and offers.</p>

            <div className="thankyou-buttons">
              <button onClick={() => setPage('home')}>Return Home</button>
              <button onClick={() => setPage('about')}>More Info</button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2025 ParkEZ. All rights reserved.</p>
      </footer>

      <ToastContainer />
    </div>
  );
}

export default App;
