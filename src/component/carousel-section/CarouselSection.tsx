import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSection.css';
import { Carousel } from 'react-responsive-carousel';
const CarouselSection = () => {
  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          interval={2000}
          infiniteLoop={true}
        >
          <div>
            <img src="img/p1.png" alt="1" />
          </div>
          {/* <div>
            <img src="img/p1.png" alt="1" />
          </div>
          <div>
            <img src="img/p1.png" alt="1" />
          </div>
          <div>
            <img src="img/p1.png" alt="1" />
          </div>
          <div>
            <img src="img/p1.png" alt="1" />
          </div> */}
          <div>
            <img src="img/p2.jpeg" alt="1" />
          </div>
          <div>
            <img src="img/p3.jpeg" alt="1" />
          </div>
          <div>
            <img src="img/p4.jpeg" alt="1" />
          </div>
          <div>
            <img src="img/p5.jpeg" alt="1" />
          </div>
          <div>
            <img src="img/p6.jpeg" alt="1" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
