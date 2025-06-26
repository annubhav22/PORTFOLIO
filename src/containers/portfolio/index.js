import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../helper/images/image1.jpg';
import ImageTwo from '../../helper/images/image2.jpg';
import ImageThree from '../../helper/images/image3.jpg';
import ImageFour from '../../helper/images/image4.jpg';
import ImageFive from '../../helper/images/image5.jpg';
import ImageSix from '../../helper/images/image6.jpg';
import ImageSeven from '../../helper/images/image7.jpg';
import ImageEight from '../../helper/images/image8.jpg';
import ImageNine from '../../helper/images/image9.jpg';
import ImageTen from '../../helper/images/image10.jpg';
import "./styles.scss";

const PortfolioData = [
  { id: 2, name: "MERN-Ecommerce", image: ImageOne, link: 'https://github.com/annubhav22/MERNSTACK-ECOM' },
  { id: 3, name: "TO-DO App", image: ImageTwo, link: 'https://github.com/annubhav22/TODO-FINAL-MAIN' },
  { id: 2, name: "Music-Frontend", image: ImageThree, link: 'https://github.com/annubhav22/MUSIC-player' },
  { id: 4, name: "sleep_disorder_prediction", image: ImageFour, link: 'https://github.com/annubhav22/sleep_disorder_prediction' },
  { id: 2, name: "Twitter Clone", image: ImageFive, link: 'https://github.com/annubhav22/twitter-clone' },
  { id: 2, name: "E-com-Frontend", image: ImageSix, link: '' },
  { id: 4, name: "Financial_Market", image: ImageSeven, link: 'https://github.com/annubhav22/Financial_Market' },
   { id: 4, name: "CUSTOMER", image: ImageEight, link: 'https://github.com/annubhav22/BANK_CUSTOMER_churn_prediction' },
    { id: 4, name: "PRACTICEAI", image: ImageNine, link: 'https://github.com/annubhav22/PRACTICEAI' },
     { id: 4, name: "Digit-Predictor", image: ImageTen, link: 'https://github.com/annubhav22/Hand-Written-Digit-Predictor' },
];

const filterData = [
  { filterId: 1, label: 'All' },
  { filterId: 2, label: 'Development' },
  { filterId: 3, label: 'Design' },
  { filterId: 4, label: 'AIML' },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  console.log("================================");
  console.log(filteredValue)
  console.log("================================");

  const filteredItems = filteredValue === 1
    ? PortfolioData :
     PortfolioData.filter(item => item.id === filteredValue);

     console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem-${item.name.trim()}-${index}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                 </a>
                
                  {hoveredValue === index && (
                     <div className="overlay">
    <div>
      <p>{item.name}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <button>Visit</button>
      </a>
    </div>
  </div>
)}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
