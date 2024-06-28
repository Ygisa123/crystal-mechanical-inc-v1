import './Cards.css';
import CardItem from './CardItem';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cards() {

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
    <div className='cards'>
    <div className='cards__container2'>
      <h1>Where Quality Meets Comfort</h1>
      <div className='cards__wrapper2'>
        <ul className='cards__items2'>
          <li className='cards__item2'>
            <div className='card circle heating'>
              <img src='/images/image_21.jfif' alt='Heating' className='card-img' />
              <h2>Proficient in heating</h2>
              <p>Heating Solutions</p>
            </div>
          </li>
          <li className='cards__item2'>
            <div className='card circle coolin'>
              <img src='/images/image_22.jfif' alt='Cooling' className='card-img'/>
              <h2>Proficient in cooling</h2>
              <p>Cooling Solutions</p>
            </div>
          </li>
          <li className='cards__item2'>
            <div className='card circle watero'>
              <img src='/images/image_23.jfif' alt='Water Filtration' className='card-img' />
              <h2>Proficient in water filtration</h2>
              <p>Water Solutions</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
      <div class="choose-us-section">
        <h1>Why choose Crystal?</h1>
        <p>Our customers are our top priority. We listen to your needs, provide personalized solutions, and ensure you’re satisfied with our work. Our transparent pricing and detailed quotes mean no surprises on your bill.</p>
        <div class="features-container">
            <div class="feature-card">
                <div class="icon-container">
                    <img src="./images/img_13.png" alt="Leading manufacturers" /> 
                </div>
                <h3>Energy Efficiency and Savings</h3>
                <p>We focus on energy-efficient solutions that not only keep you comfortable but also reduce your energy bills. Our expert advice on the best systems and practices helps you save money in the long run.</p>
            </div>
            <div class="feature-card">
                <div class="icon-container">
                    <img src="./images/img_8.png" alt="Best solutions" />
                </div>
                <h3>Best solutions</h3>
                <p>You can trust our experts to find a solution best suited for your home and family. Plus, our licensed technicians can install your new system immediately or the next day.</p>
            </div>
            <div class="feature-card">
                <div class="icon-container">
                    <img src="./images/img_7.png" alt="No surprises" />
                </div>
                <h3>Quality Products</h3>
                <p>We only use high-quality, reliable products and parts in our installations and repairs. This commitment to quality ensures the longevity and performance of your HVAC systems.</p>
            </div>
            <div class="feature-card">
                <div class="icon-container">
                    <img src="./images/img_16.png" alt="Budget friendly" />
                </div>
                <h3>Licensed and Insured</h3>
                <p>Our business is fully licensed and insured, giving you peace of mind knowing that you are working with professionals who adhere to the highest standards of safety and quality.</p>
            </div>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <div className="call-expert-container">
        <Link className="call-expert-button"  to='/contact'>
          <i className="fas fa-phone"></i>
            <span>Contact</span>
        </Link>
      <p className="phone-number">1-613-302-1995</p>
    </div>
      <div className='cards__container3'>
        <h1>Brands we carry</h1>
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
    </div>
  );
}

export default Cards;