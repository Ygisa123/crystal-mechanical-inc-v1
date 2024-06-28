
import '../../App.css';
import Footer from '../Footer';
import React, { useState, useEffect } from 'react';
import './Heating.css';
import '../Cards.css';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

export default function Cooling() {
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
      <div className="heating-section cooling">
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
      <div className='cards'>
      <div className="choose-us-section">
          <h1>Our Home Cooling and Air Conditioning Services</h1>
          <div className="features-container">
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_4.png" alt="Furnace Repairs" /> 
              </div>
              <h3>Air Conditioner repair</h3>
              <p>When the airflow from your home’s central air conditioning system declines, it’s time to seek repair services from our technical expert team. </p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_9.png" alt="Replace your furnace" />
              </div>
              <h3>Replace your Air conditioning system</h3>
              <p>We offer a variety of AC units, and our team will help you find the best air conditioning system for your home.</p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img-20.png" alt="Heating plan" />
              </div>
              <h3>Cooling maintenance plan</h3>
              <p>Annual tune-ups and inspections by a licensed technician include a thorough, up-to-22-point check to identify potential issues before your air conditioner breaks down.</p>
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