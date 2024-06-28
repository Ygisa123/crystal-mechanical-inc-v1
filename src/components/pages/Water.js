import '../../App.css';
import Footer from '../Footer';
import React, { useState, useEffect } from 'react';
import './Heating.css';
import '../Cards.css';
import './Water.css';
import { Link } from 'react-router-dom';

export default function Water() {
  useEffect(() => {
    // Ajoute un gestionnaire d'événements pour tous les liens
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        window.scrollTo(0, 0);
      });
    });

    // Nettoie les gestionnaires d'événements lors du démontage du composant
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {
          window.scrollTo(0, 0);
        });
      });
    };
  }, []);
    return (
        <>

            <div className="heating-section water">
                <div className="heating-content">
                  <h2>Cooling Solutions to Fit Every Home and Budget</h2>
                  <ul>
                    <li>✔ Looking for optimal cooling solutions for the summer? Whether you're renovating your home or replacing an outdated unit, 
                      we provide a diverse selection of high-efficiency air conditioner options.</li>
                    <li>✔ Crystal ensures you achieve comfort quickly and affordably.</li>
                  </ul>
                  <Link to='/contact'><button className="call-button">Contact to Book Your repair 1-613-302-1995</button></Link>
                </div>
              </div>
              <section class="water-heaters">
                <h2>Two Types of Water Heaters</h2>
                <div class="water-heaters-container">
                    <div class="heater-card">
                        <h3>Tank based water tanks</h3>
                        <p>Conventional tank-style water heaters are straightforward and dependable. They come in models that heat water using electricity, natural gas, or propane</p>
                        <button class="learn-more-btn">Tank based water tanks</button>
                    </div>
                    <div class="heater-card">
                        <h3>Tankless Water Heaters</h3>
                        <p>Tankless water heaters offer energy efficiency and endless hot water, though they require specific installation conditions due to their complexity</p>
                        <button class="learn-more-btn">Learn About Tankless Water Heaters</button>
                    </div>
                </div>
            </section>
            <section class="water-heater-repair">
                <h2>Water heater break downs</h2>
                <p>Experiencing a sudden lack of hot water can be frustrating and disrupt your day. Fortunately, Crystal is here to assist. Our team of fully licensed water heater repair technicians is adept at diagnosing and fixing issues with all brands and types of water heaters, frequently completing repairs on the same day. </p>
                <button class="repair-btn">See Water Heater Repair Options</button>
            </section>
            <section class="water-treatment">
                <h2>Crystal’s Strategy for Water Treatment</h2>
                <p class="intro-text">Crystal's water treatment enhances water quality by primarily eliminating contaminants, ensuring it's suitable for various uses, from drinking to bathing. We are committed to providing clean, healthy water for everyone. That's why Crystal offers customizable water treatment solutions tailored to meet the specific needs and preferences of your family.</p>
                <h3>Water Treatment Options</h3>
                <p class="sub-text">We offer several options to meet your unique water treatment needs.</p>
                <div class="water-treatment-container">
                    <div class="treatment-card">
                        <h4>Reverse Osmosis</h4>
                        <p>Achieve pure, clear, and great-tasting water directly from your tap by eliminating 90-99.99% of contaminants.</p>
                    </div>
                    <div class="treatment-card">
                        <h4>Water Softener</h4>
                        <p>If you reside in an area with hard water, a water softener is an excellent complement to your water treatment setup.</p>
                    </div>
                    <div class="treatment-card">
                        <h4>Whole Home Filters</h4>
                        <p>Ensure your entire home enjoys top-quality water by removing heavy metals, chlorine, industrial volatile chemicals, and other toxins.</p>
                    </div>
                    <div class="treatment-card">
                        <h4>Well Water Treatments</h4>
                        <p>Ensure the safety and cleanliness of your well water with specialized solutions tailored for iron, tannin, and bacteria.</p>
                    </div>
                </div>
            </section>
            <div className="choose-us-section">
          <h1>Why choose Crystal?</h1>
          <p>Our customers are our top priority. We listen to your needs, provide personalized solutions, and ensure you’re satisfied with our work. Our transparent pricing and detailed quotes mean no surprises on your bill.</p>
          <div className="features-container">
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_13.png" alt="Energy Efficiency and Savings" /> 
              </div>
              <h3>Energy Efficiency and Savings</h3>
              <p>We focus on energy-efficient solutions that not only keep you comfortable but also reduce your energy bills. Our expert advice on the best systems and practices helps you save money in the long run.</p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_8.png" alt="Best solutions" />
              </div>
              <h3>Best solutions</h3>
              <p>You can trust our experts to find a solution best suited for your home and family. Plus, our licensed technicians can install your new system immediately or the next day.</p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_7.png" alt="Quality Products" />
              </div>
              <h3>Quality Products</h3>
              <p>We only use high-quality, reliable products and parts in our installations and repairs. This commitment to quality ensures the longevity and performance of your HVAC systems.</p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_16.png" alt="Licensed and Insured" />
              </div>
              <h3>Licensed and Insured</h3>
              <p>Our business is fully licensed and insured, giving you peace of mind knowing that you are working with professionals who adhere to the highest standards of safety and quality.</p>
            </div>
          </div>
        </div>
          <Footer />
        </>
      );
    }