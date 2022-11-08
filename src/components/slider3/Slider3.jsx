import './slider3.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dataSlideritems3 from './DataSlider3';
import { FaRegHeart } from 'react-icons/fa';


function Slider3() {    
     const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="appp3">
      <h2>Branduri la modă</h2>
      <p>Brandurile noastre preferate pentru tine</p>
        <Slider {...settings}>
        {dataSlideritems3.map(item=>(   
                  <div className="card2">
                  <div className="card-top">
                      <img src={item.linkImg} alt={item.title} />
                      <p>{item.title}</p>
                      <div className="heart-f-slider">
                      <FaRegHeart/>{item.count}
                      </div>
                     
                  </div>
                  <div className="card-bottom">
                    <p>{item.price}</p>
                    <p>{item.cateogry}</p>
          
                  </div>
              </div>
        ))}
        </Slider>
      
    </div>

  )
}

export default Slider3;