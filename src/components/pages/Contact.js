import React, { useState } from 'react';
import './Contact.css';
import Footer from '../Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalcode: '',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://wwwcrystalinc.ca/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact</h1>
          <p>Crystal has invested significantly in strong resources and technology to ensure that when our customers 
            call us, they receive prompt response and support.</p>
          <ul>
            <li>Our state-of-the-art National Operations Support Centre is available 24/7, 365 days per year.</li>
            <li>All calls are assigned on a priority basis.</li>
            <li>95% of our calls are answered within 20 seconds.</li>
            <li>Our technicians carry real-time handheld devices to allow our Call Centre to track their location — anytime and anywhere — and send them to the nearest job site for immediate support.</li>
            <li>Our ability to provide fast response time allows our customers to reduce the downtime of their equipment and thereby save money.</li>
            <li>For immediate service, call our Support Call Centre:</li>
          </ul>
          <div className="contact-details">
            <div className="contact-country">
              <button className="active">Canada</button>
            </div>
            <p className="contact-phone">Call: 1-613-302-1995</p>
            <p className="contact-email">Email: info@crystalinc.ca</p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">Firstname*</label>
              <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Lastname*</label>
              <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address2">Address 2</label>
              <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="city">City*</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="province">Province*</label>
              <input type="text" id="province" name="province" value={formData.province} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="postalcode">Postal Code</label>
              <input type="text" id="postalcode" name="postalcode" value={formData.postalcode} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="note">Add a note*</label>
              <textarea id="note" name="note" value={formData.note} onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="captcha">CAPTCHA</label>
              <div className="captcha">
                <input type="checkbox" id="captcha" name="captcha" />
                <label htmlFor="captcha">I'm not a robot</label>
              </div>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}