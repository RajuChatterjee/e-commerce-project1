import React, { useContext, useState, useEffect} from 'react'
import myContext from '../../context/data/myContext'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
      };
    
      const images = [
        'https://www.appslure.com/wp-content/uploads/2021/11/Top-5-Trends-That-Will-Shape-The-Grocery-Industry-In-2021.webp',
        'https://i2.wp.com/blog.contactpigeon.com/wp-content/uploads/2019/03/Website-Make-Over.png?fit=1300%2C644&ssl=1',
        'https://wallpaperaccess.com/full/2593066.jpg',
        // Add more images here
      ];

    return (
        <div>

<div  className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <center>
            <img width="76%" height="200px" src={img} alt={`Slide ${index}`} />
            </center>
          </div>
        ))}
      </Slider>
    </div>


           <center>
           <div>
           <center>

   
               <img  width="100%" height="200px"
               src="https://www.appslure.com/wp-content/uploads/2021/11/Top-5-Trends-That-Will-Shape-The-Grocery-Industry-In-2021.webp" alt="Image not loaded" />
        </center>
        </div>
   
      </center>
        </div>

        
    )
}

export default Testimonial