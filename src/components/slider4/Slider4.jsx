import './slider4.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dataSlideritems4 from './DataSlider4';

function Slider4() {    
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
    <div className="appp4">
      <h2>Vară</h2>
      <p>Cele mai tari ținute pentru noul sezon!</p>
        <Slider {...settings}>
        {dataSlideritems4.map(item=>(   
                  <div className="card2">
                  <div className="card-top2">
                      <img src={item.linkImg} alt={item.title} />
                      <p>{item.title}</p>
                     
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

export default Slider4;