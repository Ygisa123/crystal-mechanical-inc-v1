import React, { useEffect } from 'react';
import './About.css';
import Footer from '../Footer';
import './Heating.css';

export default function About() {
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
      <div className='hero-container'>
        <video src='\videos\video_5.mp4' autoPlay loop muted />
      </div>
      <div class="our-story-container">
        <div class="our-story-image">
          <img src="./images/img-2.jpg" alt="Our Story Image" />
        </div>
        <div class="our-story-content">
          <h1 class="our-story-title">Our Story</h1>
          <ul class="our-story-list">
            <li>• Established in Ottawa during 2018, Crystal has expanded significantly to become the trusted provider of home services in Ottawa.</li>
            <li>• We are committed to providing dependable services 365 days.</li>
            <li>• We specialize in heating, cooling, plumbing, electrical services, and water heating and treatment. Whatever your home requires, we're dedicated to providing the care it deserves.</li>
          </ul>
        </div>
      </div>
      <div className="choose-us-section">
        <h1>Our Core Values</h1>
        <div className="features-container">
          <div className="feature-card">
            <div className="icon-container">
              <img src="./images/img_12.png" alt="Energy Efficiency and Savings" /> 
            </div>
            <h3>Dependability</h3>
            <p>We Ensure quick response times to customer inquiries and service requests. Consistently deliver high-quality HVAC installation, maintenance, and repair services.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="./images/img_14.png" alt="Best solutions" />
            </div>
            <h3>Safety</h3>
            <p>Prioritize Health and Safety for our customers and team members. We adhere to safety regulations and building codes.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="./images/img_11.png" alt="Quality Products" />
            </div>
            <h3>Flexibility</h3>
            <p>We possess the expertise and hands-on experience to effectively resolve any HVAC issue in your home, all while maintaining our rigorous standards of quality and service.</p>
          </div>
        </div>
      </div>
      <div className="products-services-section">
        <h1 class="section-title">Our Products and Services</h1>
        <p class="section-description">
          We sell, rent, repair, and maintain furnaces, boilers, air conditioners, heat pumps, water heaters (tank and tankless), water treatment products, EV chargers, Generac generators and more; serving 1.1 million customers throughout Ontario.
        </p>
        <div class="products-grid">
          <div class="product-card">
            <i class="fas fa-fire-alt product-icon"></i>
            <h2 class="product-title">Heating and Cooling</h2>
            <p class="product-description">
              We offer a wide range of innovative heating and cooling solutions to suit you and your home's needs. Our team of licensed technicians are fully equipped to diagnose and repair all makes and models, often with same-day service.
            </p>
            <button class="learn-more-button">Learn More</button>
          </div>
          <div class="product-card">
            <i class="fas fa-shield-alt product-icon"></i>
            <h2 class="product-title">Protection and Maintenance Plans</h2>
            <p class="product-description">
              We offer a variety of maintenance and protection plans designed to make it both convenient and cost-effective to maintain your equipment and keep them in top shape.
            </p>
            <button class="learn-more-button">Learn More</button>
          </div>
          <div class="product-card">
            <i class="fas fa-fan product-icon"></i>
            <h2 class="product-title">Heat Pumps</h2>
            <p class="product-description">
              A greener solution for heating and cooling that can help keep your home comfortable year-round. Government rebates available.
            </p>
            <button class="learn-more-button">Learn More</button>
          </div>
          <div class="product-card">
            <i class="fas fa-water product-icon"></i>
            <h2 class="product-title">Water Heaters</h2>
            <p class="product-description">
              We carry a broad selection of high-efficiency natural gas, propane and electric units to meet a range of needs and budgets.
            </p>
            <button class="learn-more-button">Learn More</button>
          </div>
          <div class="product-card">
            <i class="fas fa-tint product-icon"></i>
            <h2 class="product-title">Water Treatment</h2>
            <p class="product-description">
              Ensure the water in your home looks, smells and tastes great, whether it’s coming from a municipal system or a private well, with our water treatment solutions.
            </p>
            <button class="learn-more-button">Learn More</button>
          </div>
          <div class="product-card">
            <i class="fas fa-wrench product-icon"></i>
            <h2 class="product-title">Plumbing</h2>
            <p class="product-description">
              We can help with all sizes of plumbing jobs and the price we quote is the price you pay, with all parts and labour included — no hidden charges.
            </p>
            <button class="learn-more-button">Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}