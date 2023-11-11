import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <p className="text-center text-white">SUBSCRIBE NOW</p>
          <h2 className="text-center text-white fw-bold">GET OUR UPDATES ALWAYS FAST</h2>
          <p className="text-center text-white fw-bold">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
          <div className="input-button text-center mb-5">
            <input type="email" placeholder="Enter Your Email Id" />
            <Link className="text-white"><FontAwesomeIcon icon={faChevronRight} className='icon-footer' /></Link>
          </div>
          <p className="the-p text-center text-white">
            <Link to="#" className="text-decoration-none text-white">SEARCH</Link> |
            <Link to="#" className="text-decoration-none text-white">HELP</Link> |
            <Link to="#" className="text-decoration-none text-white">INFORMATION</Link> |
            <Link to="#" className="text-decoration-none text-white">PRIVACYPOLICY</Link> |
            <Link to="#" className="text-decoration-none text-white">SHIPPINGDETAILS</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;