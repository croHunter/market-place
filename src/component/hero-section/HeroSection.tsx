import React from 'react';
import './HeroSection.css';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__wrapper">
        <div className="hero-section__left">
          <h1>EASY WAY TO FIND YOU DREAM PROPERTY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit.
          </p>
          <div className="hero-section__btns">
            <button className="btn btn-primary">LIKE OUR PAGE</button>
            <button className="btn btn-secondary">LEAVE A MESSAGE</button>
          </div>
        </div>
        <div className="hero-section__right">
          <img src="img/p1.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
