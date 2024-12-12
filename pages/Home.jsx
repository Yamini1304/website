import React from 'react';
import './Home.css';  // Importing the CSS for styling

function Home() {
    const tvItems = [
        {
          id: 1,
          name: 'Samsung Neo QLED" 8K Smart TV',
          price: '1,27,000 INR',
          imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa75qn800ckxxl/gallery/in-qled-qn800c-qa75qn800ckxxl-535909387?$1300_1038_PNG$',
          description: 'Enjoy stunning 8K resolution and smart features with this Samsung TV.',
        },
        {
          id: 2,
          name: 'LG 65" OLED TV',
          price: '70,499 INR',
          imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
          description: 'Experience rich colors and deep blacks with the LG OLED TV.',
        },
        {
          id: 3,
          name: 'Sony 50" LED TV',
          price: '2,20345 INR',
          imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
          description: 'Get vibrant visuals and immersive sound with the Sony LED TV.',
        },
        {
          id: 4,
          name: 'TCL 32" HD Smart TV',
          price: '1,23,999 INR',
          imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
          description: 'Enjoy HD streaming and built-in Roku functionality with this TCL Smart TV.',
        },
        {
          id: 5,
          name: 'Hisense 43" 4K UHD TV',
          price: '2,34,999 INR',
          imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
          description: 'Upgrade to 4K UHD resolution with the Hisense TV for stunning clarity.',
        },
      ];
     
    return (
      <div className="tv-container">
        <h2>Televisions</h2>
        <div className="tv-items">
          {tvItems.map((tv) => (
            <div key={tv.id} className="tv-item">
              <img src={tv.imageUrl} alt={tv.name} className="tv-image"/>
              <h3>{tv.name}</h3>
              <p>{tv.description}</p>
              <p className="price">{tv.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Home;