
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="footer-column">
            <h3>Shaheer Khan Niazi</h3>
            <p>Assisstant manager Internal Audit</p>
          </div>

          {/* Contact Section */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Sindh, Karachi</li>
              <li>niazi2822@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/shaheer.niazi.90/"
            className="facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="google">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Copyright: YourCompany.com</p>
      </div>
    </footer>
  );
}
