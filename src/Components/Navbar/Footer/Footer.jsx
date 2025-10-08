import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-black bg-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Company</h5>
            <p className="text-muted">
              Building amazing digital experiences with passion and dedication. 
              Your trusted partner in web development.
            </p>
          </div>
          
          <div className="col-md-2 mb-3">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-black text-decoration-none">Home</Link></li>
              <li><Link to="/Drivers" className="text-black text-decoration-none">Drivers</Link></li>
              <li><Link to="/Teams" className="text-black text-decoration-none">Teams</Link></li>
              <li><a to="/History" className="text-black text-decoration-none">History  </a></li>
            </ul>
          </div>
          
          
          <div className="col-md-4 mb-3">
            <h6 className="mb-3">Contact Info</h6>
            <div className="text-muted">
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Main Street, City, State 12345
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                (555) 123-4567
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@company.com
              </p>
            </div>
            
            <div className="mt-3">
              <h6 className="mb-2">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="text-md-end">
              <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none me-3">Terms of Service</a>
              <a href="#" className="text-light text-decoration-none">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;