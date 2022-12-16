import React from "react";
import "styles/home/brains-behind.css";

const BrainsBehind = ({markdownObject}: any) => {
  return (
    <div className="brains-behind">
      <div className="brains-behind-header">
        <h1>
          <span className="brains-behind-header-word-color">Brains</span> behind
        </h1>
        <button className="brains-behind-header-btn">Meet the full team</button>
      </div>

      <div className="cards">
        <div className="card1">
          <img src="/images/home/people-img-4.svg" alt="" />
          <div className="cards-content">
            <h1>Alicia Pierrou</h1>

            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                One of Sweden&apos;s foremost experts in social media.
              </p>
            </div>
            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Former national team player in water polo
              </p>
            </div>
            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Trained and coached top athletes and influencers in Sweden on how to be successful in the digital age
              </p>
            </div>
          </div>
        </div>

        <div className="card2">
          <img src="/images/home/people-img-5.svg" alt="" />
          <div className="cards-content">
            <h1>Fredrik Niemelä</h1>

            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Won 2 world championship gold medals in programming
              </p>
            </div>
            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Officially one of the brains behind Spotify
              </p>
            </div>
            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Member of the World Programming Committee
              </p>
            </div>
          </div>
        </div>

        <div className="card3">
          <img src="/images/home/people-img-6.svg" alt="" />
          <div className="cards-content">
            <h1>Rustan Håkansson</h1>

            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Award winning for fastest growing company in Sweden, as COO
              </p>
            </div>
            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                Designer of several hit board games
              </p>
            </div>
            <div className="brains-behind-cards-content">
              <p className="brains-behind-cards-dot">•</p>
              <p className="brains-behind-cards-peragraph">
                A great chess player
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainsBehind;
