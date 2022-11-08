import './slidercarousel.scss';
import React, {useState} from 'react';
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

function Slidercarousel() {
    const [slideIndex, setSlideIndex] = useState(1)


    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length, 2000)
        }

    }

    const moveDot = index => {
        setSlideIndex(index)

    }

    return (
        <div className="container-slider">


            {dataSlider.map((obj, index,) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <div className="sliders">
                        <p>{ obj .title}</p>
                        <h3>{ obj .subTitle}</h3>
                        <button>{ obj .button}</button>


                        </div>
                       <div className="slider-2-0">
                        <ul>
                            <li><img   src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} /> <h1>Penis</h1> </li>
                          
                        </ul>
                      

                       
                       

                       </div>
                        
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
     
export default Slidercarousel
