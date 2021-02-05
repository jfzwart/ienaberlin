import React from 'react';
import '../stylesheets/HomePage.css';
import '../stylesheets/Button.css';
import '../stylesheets/HomePage.css';

const Home = () => {
    return (
        <div className="container">
            <div className="home-banner" style={{ backgroundImage: "url(/Main.png"}}>
            <button class="button center">
                    <div class="button-text">
                    WEBSITE UNDER CONSTUCTION
                    </div>
                    <div class="text-center">
                    x
                    </div>
                </button>                
            </div>
            <div className="home-box">   
                <div className="home-text">
                    <p>"As a stylist I learned to put myself my client's shoes. I translate his/her desired into an image that appeals. It is easy for me to adapt myself so that I can contribute what is necessary to a team or a situation. This social ability combined with my creativity helps me to create the perfect atmosphere to reach my goals. Combining my visual art with my fashion background results into unique pieces for you interior of wardrobe." 
                    </p>
                    <img src="/colorBanner.png" alt="color-banner"></img>
                </div>
                <div className="home-image">
                    <img src="/jenny.png" alt="Girl in white jacket" ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;