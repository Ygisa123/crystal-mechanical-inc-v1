
import '../../App.css';
import Footer from '../Footer';
import '../Cards.css';
import './Plumbing.css';
import './Heating.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Plumbing() {
  const [activeTab, setActiveTab] = useState('plumbing');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
      <div className="heating-section plumbing">
        <div className="heating-content">
          <h2>Depend on our team for all your home plumbing and electrical needs.</h2>
          <h3>Skilled, certified plumbers and electricians
              Capable of managing projects of any scale
              1-year parts warranty and 90-day labor guarantee
          </h3>
          <Link to='/contact'><button className="call-button">Contact to Book Your repair 1-613-302-1995</button></Link>
        </div>
      </div>
      <div className='cards'>
        <div className="container">
          <h1 className="section-title">Our Home Plumbing and Electrical Services</h1>
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'plumbing' ? 'active' : ''}`}
              onClick={() => handleTabClick('plumbing')}
            >
              <i className="fas fa-faucet"></i> Plumbing
            </button>
            <button
              className={`tab-button ${activeTab === 'electrical' ? 'active' : ''}`}
              onClick={() => handleTabClick('electrical')}
            >
              <i className="fas fa-bolt"></i> Electrical
            </button>
          </div>
          <div className={`tab-content ${activeTab === 'plumbing' ? 'active' : ''}`} id="plumbing">
            <div className="service-card">
              <h2>Plumbing Repairs</h2>
              <p>We can help with all sizes of plumbing jobs: whether you have a clogged bathtub or leaky faucet, are installing a new water line for a dishwasher, or have a broken backwater valve or sump pump. Our plumbers will quickly diagnose the issue and provide you with a quote. In many cases, we carry the parts on our trucks so we can fix things right away.</p>
              <button className="service-button">Repair Plumbing</button>
            </div>
            <div className="service-card">
              <h2>Plumbing Protection</h2>
              <p>Protect against future clogs with a Plumbing and Drains Protection Plan. Perfect for homes with frequent plumbing issues, you get unlimited service calls with parts and labour coverage* — any time you have an issue with your piping or drains, we’ll be there. You also get 15% off parts and labour for permanent below-grade drain repairs.**</p>
              <button className="service-button">Protect Plumbing</button>
            </div>
          </div>
          <div className={`tab-content ${activeTab === 'electrical' ? 'active' : ''}`} id="electrical">
            <div className="service-card">
              <h2>Electrical Repairs</h2>
              <p>Our certified electricians can handle all types of electrical repairs, from fixing faulty wiring to replacing old circuit breakers. We ensure your electrical systems are safe and up to code.</p>
              <button className="service-button">Repair Electrical</button>
            </div>
            <div className="service-card">
              <h2>Electrical Protection</h2>
              <p>With our Electrical Protection Plan, you get peace of mind knowing that your home is protected from electrical hazards. Our plan includes regular maintenance checks and priority repair services.</p>
              <button className="service-button">Protect Electrical</button>
            </div>
          </div>
        </div>
        <div className='cards__container3'>
          <h1>Brands we offer</h1>
          <div className='cards__wrapper3'>
            <ul className='cards__items3'>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture1.jpg' alt='Heating' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture2.jpg' alt='Cooling' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture3.png' alt='Water Filtration' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture4.jpg' alt='Water Filtration' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture5.jpg' alt='Water Filtration' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture6.jpg' alt='Water Filtration' className='card-imge' />
                </div>
              </li>
            </ul>
          </div>
        </div>
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
      </div>
      <Footer />
    </>
  );
}