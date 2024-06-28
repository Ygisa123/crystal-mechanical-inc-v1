import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Heating.css';
import '../Cards.css';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

export default function Heating() {
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
      <div className="heating-section heat">
        <div className="heating-content">
          <h2>Heating Options for Every Household</h2>
          <ul>
            <li>✔ Looking to purchase a new heating system for your home? Whether you need a furnace, boiler, fireplace, or heat pump, we have you covered. With Crystal, 
              you can have new heating equipment installed as soon as the next day.</li>
            <li>✔ We also offer protection and maintenance plans to ensure your heating equipment remains operational during the coldest winters.</li>
          </ul>
          <Link to='/contact'><button className="call-button">Contact to Book Your repair 1-613-302-1995</button></Link>
        </div>
      </div>
      <div className='cards'>
        <div className="choose-us-section">
          <h1>Our Home Heating Services</h1>
          <div className="features-container">
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_5.png" alt="Furnace Repairs" /> 
              </div>
              <h3>Furnace Repairs</h3>
              <p>If your furnace isn't functioning properly, our technicians can identify the issue and quickly and efficiently repair it, ensuring your heating and cooling systems are operational again.</p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img_9.png" alt="Replace your furnace" />
              </div>
              <h3>Replace your furnace</h3>
              <p>With our same-day installation services, having a properly installed furnace is crucial for keeping your home warm and comfortable during the cold seasons. Our expert technicians will help you select the right new furnace and make sure it is installed correctly.</p>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src="./images/img-20.png" alt="Heating plan" />
              </div>
              <h3>Heating plan</h3>
              <p>In case of a furnace or boiler failure, give us a call before 24/7, and we will send a fully licensed technician to address the issue same day. We cover parts and labour for expensive furnace and boiler repairs or any other parts replacement.</p>
            </div>
          </div>
        </div>

        <div className="why-choose-container">
          <div className="why-choose-section">
            <h1 className="why-choose-title">Why Choose Crystal for Home Heating?</h1>
            <p className="why-choose-description">
              When you choose Crystal, you get expert advice and quality work from one of our friendly, professional and fully licensed technician along with:
            </p>
            <div className="why-choose-features">
              <div className="feature-item">
                <i className="fas fa-fire feature-icon"></i>
                <p className="feature-text">We size, install and maintain heating equipment from all leading manufacturers.</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-tools feature-icon"></i>
                <p className="feature-text">We can install your new furnace as soon as next day.</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-wrench feature-icon"></i>
                <p className="feature-text">We offer same-day<sup>1</sup> repairs through our Crystal Advantage<sup>TM</sup> program.</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-file-alt feature-icon"></i>
                <p className="feature-text">We secure all permits (if required) before doing any work in your home.</p>
              </div>
            </div>
          </div>
        </div>
        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

        <div className='cards__container3'>
          <h1>Brands we offer</h1>
          <div className='cards__wrapper3'>
            <ul className='cards__items3'>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture1.jpg' alt='Brand 1' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture2.jpg' alt='Brand 2' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture3.png' alt='Brand 3' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture4.jpg' alt='Brand 4' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture5.jpg' alt='Brand 5' className='card-imge' />
                </div>
              </li>
              <li className='cards__item3'>
                <div className='carde'>
                  <img src='/images/Picture6.jpg' alt='Brand 6' className='card-imge' />
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