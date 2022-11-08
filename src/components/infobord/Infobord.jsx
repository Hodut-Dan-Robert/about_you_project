import './infobord.scss';import dropuri from '../../images/dropuri.jpg';
import only from '../../images/only.png';import adidas from '../../images/adidas.png';
import vero from '../../images/vero.png';import mango from '../../images/mango.png';
import le from '../../images/le.png';import nike from '../../images/nike.png';
import about from '../../images/about.png';import levi from '../../images/levi.png';
import addidas from '../../images/addidas.png';import tom from '../../images/tom.png';
import converse from '../../images/converse.png';import tamaris from '../../images/tamaris.png';
import puma from '../../images/puma.png';import vans from '../../images/vans.png';
import arm from '../../images/arm.png';import ree from '../../images/ree.png';
import guess from '../../images/guess.png';import cal from '../../images/cal.png';
import kal from '../../images/kal.png';import mic from '../../images/mic.png';
import pil from '../../images/pil.png';import Sw from '../../images/Sw.png';
import tom1 from '../../images/tom1.png';import jon from '../../images/jon.png';
import boss from '../../images/boss.png';import hugo from '../../images/hugo.png';
import lau from '../../images/lau.png';import pat from '../../images/pat.png';
import polo from '../../images/polo.png';import ted from '../../images/ted.png';
import wee from '../../images/wee.png';
import reb from '../../images/reb.jpg';
import rawi from '../../images/rawi.jpg';
import xin from '../../images/xin.jpg';
import body from '../../images/body.jpg';
import doi from '../../images/doi.jpg';
import sarc from '../../images/sarc.jpg';
import reduceri from '../../images/reduceri.png';

import {RiArrowRightSFill} from 'react-icons/ri';

import dataSlider from './dataSlider'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import BtnSlider from './BtnSlider'


function Infobord() {


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
        setSlideIndex(dataSlider.length)
    }
}




 return (
  <div className="infobord">
    <Link to="/dropuripage">  <div className="dropuri-hover">
      <div className="dropuri">
      
      <p>Dropuri</p>

       
         <div className="dropuri-panou">
          <div className="dropuri-p1">
           <div className="dropuri-p">
            <ul> <a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/> </div>Dropuri Exclusive</a>
                 <a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div> Calendar lansări sneakers</a>
                 <a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div> Dropuri premium</a>
            </ul> 
            </div> 
          <div className="dropuri-poza"> <img src={ dropuri } alt=""/></div></div>
         </div> 
        </div>
           </div> </Link>
 
 <div className="haine">
   <div className="haine-1">
     <div className="haine-2">
     <Link to="/hainepage"><span>Haine</span></Link>
         <div className="haine-panou">
           <div className="haine-panou-0">
             <div className="haine-panou-1">
              <span>Categorii</span>
               </div>
                 <div className="haine-title">
                   <div className="haine-title1">
                    <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Noutăți</a></li>
                        <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Trending</a></li>
                        <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Rochii</a></li>
                        <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Tricouri & Topuri</a></li>
                        <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Jeans</a></li>
                        <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Pantaloni</a></li>
                        <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Bluze si tunici</a></li>
                        <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Modă de plajă</a></li>
                        <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Fuste</a></li>
                        <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Salopete</a></li>
                    </ul>
                  </div>
                <div className="haine-title2">
               <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Geci</a></li>
                  <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Lenjerie</a></li>
                  <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Pulovere & Haine tricotate</a></li>
                  <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Haine de ocazie</a></li>
                  <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Mărimi mari</a></li>
                  <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Modă pentru femei însarcinate</a></li>
                  <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Sacouri</a></li>
                  <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Sweat</a></li>
                  <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Paltoane</a></li>
               <div className="grey">
                <li ><a href="#Infobord">Arată mai mult</a></li>
                  </div></ul>
                 </div>
                  </div>
                   <div className="haine-panou-2">
                     <div className="haine-p-2">
                      <span>Highlits</span>
                        <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Mai sustenabil</a></li>
                            <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Exclusiv</a></li>
                            <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Premium</a></li></ul>
                    </div>
                     <div className="haine-p-3">
                      <span>Marimi spaciale</span>
                 <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Cu forme</a></li>
                     <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Petite</a></li>
                     <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Înaltă</a></li>
                     <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Modă pentru femei însarcinate</a></li></ul>
                     </div>
                      </div>
                       <div className="haine-panou-3">
                        <span>Branduri de top</span>
                         <div className="haine-img">
                          <a href="#Infobord"><img className='picture1' src={ only } alt="" /></a>
                          <a href="#Infobord"><img className='picture2' src={ nike } alt="" /></a>
                          <a href="#Infobord"><img className='picture3' src={ addidas} alt="" /></a>
                          <a href="#Infobord"><img className='picture4' src={ about } alt="" /></a>
                          <a href="#Infobord"><img className='picture5' src={ vero } alt="" /></a>
                          <a href="#Infobord"><img className='picture6' src={ levi } alt="" /></a>
                          <a href="#Infobord"><img className='picture7' src={ mango } alt="" /></a>
                          <a href="#Infobord"><img className='picture8' src={ adidas } alt="" /></a>
                          <a href="#Infobord"><img className='picture9' src={ le } alt="" /></a>
                          <a href="#Infobord"><img className='picture10' src={ tom } alt="" /></a>
                        <div/> </div> </div> </div> </div> </div> </div> </div>
                
   <div className="pantofi">
    <div className="pantofi-p">
     <div className="pantofi-p1">
      <span>Pantofi</span>
       <div className="pantofi-panou">
        <div className="pantofi-panou-1">
         <div className="pantofi-panou-2">
           <div className="pantofi-list-1">
             <span>Categorii</span>
              <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Noutăți</a></li>
               <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Trending</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Sandale</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Sneaker</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Pumps si pantofi cu toc</a></li>
               <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Saboți</a></li>
               <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Pantofi</a></li>
               <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Balerini</a></li>
               <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Pantofi sport</a></li>
               <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Botine</a></li> </ul>
              </div>
               <div className="pantofi-list-2">
                <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Cizme</a></li>
                 <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Papuci de casă</a></li>
                 <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Exclusiv</a></li>
                 <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Mai sustenabil</a></li></ul>
               </div>
                <div className="pantofi-img">
                 <div className="pantofi-span"> 
                 <span>Branduri de top</span></div>
                  <div className="pantofi-img1">
                  <a href="#Infobord"><img className='picture1' src={ adidas } alt="" /></a>
                  <a href="#Infobord"><img className='picture2' src={ nike } alt="" /></a>
                  <a href="#Infobord"><img className='picture3' src={ converse } alt="" /></a>
                  <a href="#Infobord"><img className='picture4' src={ tamaris } alt="" /></a>
                  <a href="#Infobord"><img className='picture5' src={ puma } alt="" /></a>
                  <a href="#Infobord"><img className='picture6' src={ about } alt="" /></a>
                  <a href="#Infobord"><img className='picture7' src={ tom } alt="" /></a>
                  <a href="#Infobord"><img className='picture8' src={ vans } alt="" /></a>
                  <a href="#Infobord"><img className='picture9' src={ addidas } alt="" /></a>
                  <a href="#Infobord"><img className='picture10' src={ guess } alt="" /></a>
                 <div/> </div> </div> </div> </div> </div> </div> </div> </div>   

      <div className="sport">
        <div className="sport-p">
          <div className="sport-p1">
          <span>Sport</span>
          <div className="sport-panou">
            <div className="sport-panou-0">
              <div className="sport-panou-1">
                <div className="sport-list-items">
                  <div className="sport-list-items-1">
                    <span>Îmbrăcaminte sport</span>
           <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Pantaloni sport</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Tricouri sport</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Lenjerie sport</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Geci sport</a></li>
               <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Îmbrăcaminte înot & surf</a></li>
               <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Treninguri</a></li>
               <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Pulovere sport</a></li>
               <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Fuste sport</a></li>
               <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Rochii sport</a></li>
                   <p>Arată mai mult</p>
               </ul>
                    

                  </div>
                  <div className="sport-list-items-2">
                  <span>Tipuri de sport</span>
           <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Fitness</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Alergare</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Yoga</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Tenis si padel</a></li>
               <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Outdoor</a></li>
               <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Fotbal</a></li>
               <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Înot</a></li>
               <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Beach si surf</a></li>
               <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Baschet</a></li>
                   <p>Arată mai mult</p>
               </ul>
                  </div>
                  <div className="sport-list-items-3">
                  <h3>Pantofi sport</h3>
           <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Înacălțaminte outdoor</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Pantofi sport de alergat</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Pantofi sport</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Șlapi</a></li> </ul>
               <p>Arată mai mult</p>
               <div className="span-change-font">
                <span>Rucsacuri si genți de sport</span>  </div>


           <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Genți sport</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Rucsacuri sport</a></li> </ul>

                  </div>
                  <div className="sport-list-items-4">
                  <span>Branduri de top</span>
                  <a href="#Infobord"><img className='picture1' src={ addidas } alt="" /></a>
                  <a href="#Infobord"><img className='picture2' src={ nike } alt="" /></a>
                  <a href="#Infobord"><img className='picture3' src={ puma } alt="" /></a>
                  <a href="#Infobord"><img className='picture4' src={ arm } alt="" /></a>
                  <a href="#Infobord"><img className='picture5' src={ ree } alt="" /></a>
                    
                  </div>
                </div>
                <div className="sport-panou-slider-carusel-0"> 
                <div className="container-slider-0">
                  <div className="container-slider-1-0">
                  {dataSlider.map((obj,index)=>{
                    return (
                      <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        
                        <div className="slide1"> 
                          <img  src={ process.env.PUBLIC_URL + `/png-uri/img${index + 0 + 1  }.jpg`} alt="" />
                          <img  src={ process.env.PUBLIC_URL + `/png-uri/img${index + 1 + 1 }.jpg`} alt="" />
                          <img  src={ process.env.PUBLIC_URL + `/png-uri/img${index + 2 + 1  }.jpg`} alt="" />
                          <img  src={ process.env.PUBLIC_URL + `/png-uri/img${index + 0 + 4  }.jpg`} alt="" />
                          <img  src={ process.env.PUBLIC_URL + `/png-uri/img${index + 0 + 5  }.jpg`} alt="" />
                       

                        </div>

                  
                     
                        
                       

                      </div>
                      
                   
                    )
                    
                  } )}
   
                  </div>

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>



                  
                  


                  </div>  
                  
                </div>
              </div>
            </div>

          </div>



          </div>
        </div>
      </div>

      <div className="accesorii">
    <div className="accesorii-p">
     <div className="accesorii-p1">
      <span>Accesorii</span>
       <div className="accesorii-panou">
        <div className="accesorii-panou-1">
         <div className="accesorii-panou-2">
           <div className="accesorii-list-1">
             <span>Categorii</span>
              <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Noutăți</a></li>
               <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Genți si rucsacuri</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Bijuterii</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Pălarii & căciuli</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Ochelari de soare</a></li>
               <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Curele</a></li>
               <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Portofele</a></li>
               <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Ceasuri</a></li>
               <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Fulare si esarfe</a></li>
               <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Accesorii de locuit</a></li> </ul>
              </div>
               <div className="accesorii-list-2">
                <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Huse de smartphoneuri</a></li>
                 <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Accesorii de păr</a></li>
                 <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Manuși</a></li>
                 <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Măști de stofa</a></li>
                 <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Exclusiv</a></li>
                 <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Mai sustenabil</a></li>
                 <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Reciclare</a></li>
                 </ul>
               </div>
                <div className="accesorii-img">
                 <div className="accesorii-span"> 
                 <span>Branduri de top</span></div>
                  <div className="accesorii-img1">
                  <a href="#Infobord"><img className='picture1' src={ guess } alt="" /></a>
                  <a href="#Infobord"><img className='picture2' src={ tom1 } alt="" /></a>
                  <a href="#Infobord"><img className='picture3' src={ mic } alt="" /></a>
                  <a href="#Infobord"><img className='picture4' src={ kal } alt="" /></a>
                  <a href="#Infobord"><img className='picture5' src={ about } alt="" /></a>
                  <a href="#Infobord"><img className='picture6' src={ addidas } alt="" /></a>
                  <a href="#Infobord"><img className='picture7' src={ Sw } alt="" /></a>
                  <a href="#Infobord"><img className='picture8' src={ cal } alt="" /></a>
                  <a href="#Infobord"><img className='picture9' src={ pil } alt="" /></a>
                  <a href="#Infobord"><img className='picture10' src={ jon } alt="" /></a>
                 <div/> </div> </div> </div> </div> </div> </div> </div> </div>   

       <div className="premium">
    <div className="premium-p">
     <div className="premium-p1">
      <span>Premium</span>
       <div className="premium-panou">
        <div className="premium-panou-1">
         <div className="premium-panou-2">
           <div className="premium-list-1">
             <span>Categorii</span>
              <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Noutăți</a></li>
               <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Rochii</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Haine Tricotate</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Tricouri și Topuri</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Jeans</a></li>
               <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Pantaloni</a></li>
               <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Bluze & tunici</a></li>
               <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Lenjerie & modă de plajă</a></li>
               <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Fuste</a></li>
               <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Jumpsuits & Overalls</a></li> </ul>
              </div>
               <div className="premium-list-2">
                <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Sweat</a></li>
                 <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Geci & paltoane</a></li>
                 <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Pantofi</a></li>
                 <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Accesorii</a></li>
                 </ul>
               </div>
                <div className="premium-img">
                 <div className="premium-span"> 
                 <span>Branduri de top</span></div>
                  <div className="premium-img1">
                  <a href="#Infobord"><img className='picture1' src={ hugo } alt="" /></a>
                  <a href="#Infobord"><img className='picture2' src={ lau } alt="" /></a>
                  <a href="#Infobord"><img className='picture3' src={ mic } alt="" /></a>
                  <a href="#Infobord"><img className='picture4' src={ polo } alt="" /></a>
                  <a href="#Infobord"><img className='picture5' src={ boss } alt="" /></a>
                  <a href="#Infobord"><img className='picture6' src={ kal } alt="" /></a>
                  <a href="#Infobord"><img className='picture7' src={ boss } alt="" /></a>
                  <a href="#Infobord"><img className='picture8' src={ wee } alt="" /></a>
                  <a href="#Infobord"><img className='picture9' src={ pat } alt="" /></a>
                  <a href="#Infobord"><img className='picture10' src={ ted } alt="" /></a>
                 <div/> </div> </div> </div> </div> </div> </div> </div> </div>  

   <div className="sale">
    <div className="sale-p">
     <div className="sale-p1">
      <span >SALE</span>
       <div className="sale-panou">
        <div className="sale-panou-1">
         <div className="sale-panou-2">
           <div className="sale-list-1">
              <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Rochii</a></li>
               <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Tricouri & topuri</a></li>
               <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Jeans</a></li>
               <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Pantaloni</a></li>
               <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Bluze & tunici</a></li>
               <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Geci</a></li>
               <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Fuste</a></li>
               <li><a href="#Infobord"><div className="arrow7"><RiArrowRightSFill/></div>Pulovere & Haine tricotate</a></li>
               <li><a href="#Infobord"><div className="arrow8"><RiArrowRightSFill/></div>Paltoane</a></li>
               <li><a href="#Infobord"><div className="arrow9"><RiArrowRightSFill/></div>Lenjerie</a></li> </ul>
              </div>
               <div className="sale-list-2">
                <ul><li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Modă de plajă</a></li>
                 <li><a href="#Infobord"><div className="arrow1"><RiArrowRightSFill/></div>Salopete</a></li>
                 <li><a href="#Infobord"><div className="arrow2"><RiArrowRightSFill/></div>Modă pentru femei însarcinate</a></li>
                 <li><a href="#Infobord"><div className="arrow3"><RiArrowRightSFill/></div>Blazere</a></li>
                 <li><a href="#Infobord"><div className="arrow4"><RiArrowRightSFill/></div>Sweat</a></li>
                 <li><a href="#Infobord"><div className="arrow5"><RiArrowRightSFill/></div>Mărimi Mari</a></li>
                 <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Pantofi</a></li>
                 <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Accesorii</a></li>
                 <li><a href="#Infobord"><div className="arrow6"><RiArrowRightSFill/></div>Premium</a></li>
                 <div className="grey">
                <li ><a href="#Infobord">Arata mai mult</a></li>
                  </div>
                 </ul>
               </div>
                <div className="sale-img">
                 
                  <div className="sale-img1">
                  <a href="#Infobord"><img className='picture1' src={ reduceri } alt="" /></a>
                
                 <div/> </div> </div> </div> </div> </div> </div> </div> </div>  

      
      <div className="top100">
        <div className="top111">
        <span>Top 100</span>
        </div>
        <div className="top101">
        <span>Nou</span>
        </div>

        
      </div>

                 
      <div className="branduri">
        <div className="branduri-p">
          <div className="branduri-p-1">
           <span>Branduri</span>
           <div className="branduri-panou">
            <div className="branduri-panou-">
              <div className="branduri-panou-0">
              <div className="branduri-panou-1">
                <ul>
                  <li><a href="#Infobord"><div className="underline1">ADIDAS ORIGINALS</div></a></li>
                  <li><a href="#Infobord"><div className="underline2">Nike Sportwear</div></a></li>
                  <li><a href="#Infobord"><div className="underline3">ONLY</div></a></li>
                  <li><a href="#Infobord"><div className="underline4">ABOUT YOU</div></a></li>
                  <li><a href="#Infobord"><div className="underline5">ADIDAS PERFORMANCE</div></a></li>
                  <li><a href="#Infobord"><div className="underline6">NIKE</div></a></li>
                  <li><a href="#Infobord"><div className="underline7">TOMMY HILFIGER</div></a></li>
                  <li><a href="Infobord"><div className="underline8">GUESS</div></a></li>
                </ul>

              </div>
              <div className="branduri-panou-2">
              <ul>
                  <li><a href="#Infobord"><div className="underline1">PUMA</div></a></li>
                  <li><a href="#Infobord"><div className="underline2">VERO MODA</div></a></li>
                  <li><a href="#Infobord"><div className="underline3">LEVI'S</div></a></li>
                  <li><a href="#Infobord"><div className="underline4">LeGer by Lena Gerc...</div></a></li>
                  <li><a href="#Infobord"><div className="underline5">CONVERSE</div></a></li>
                  <li><a href="#Infobord"><div className="underline6">MANGO</div></a></li> </ul>
                  <div className="branduri-ul">
                  <ul>
                    <li>  <p>Arată mai mult</p> </li>
                  </ul>
                  </div>
                  
              </div>

              </div>
              <div className="branduri-button">
                <button>Caută după branduri</button>
              </div>

            </div>
           </div>

          </div>
        </div>
      </div>


      <div className="inspiratie">
        <div className="inspiratie-p">
          <div className="inspiratie-p1">
           <span>Inspirație</span>
           <div className="inspiratie-panou">
            <div className="inspiratie-panou-">
              <div className="inspiratie-panou-0">
                <div className="inspiratie-panou-1">
                  <span>Outfituri</span>
                  <div className="inspiratie-div-1">
                  <div className="inspiratie-panou-1-1">
                    <a href="#Infobord"><img src={ reb } alt="" /></a>
                    <h3>Rebecca Nmyr</h3>
                    <p>Classy Purple ...</p>
                  </div>
                  <div className="inspiratie-panou-1-2">
                    <a href="#Infobord"><img src={ rawi } alt="" /></a>
                    <h3>Rawi</h3>
                    <p>Sporty Dress ...</p>
                  </div>
                  <div className="inspiratie-panou-1-3">
                    <a href="#Infobord"><img src={ xin } alt="" /></a>
                    <h3>Xin</h3>
                    <p>We are Sports ...</p>
                  </div>
                  </div>
                  <h2>descopera toate outfiturile</h2>
                </div>
                <div className="inspiratie-panou-2">
                <span>Storyuri</span>
                <div className="inspiratie-div-2">
                <div className="inspiratie-panou-2-1">
                    <a href="#Infobord"><img src={ body } alt="" /></a>
                    <h3>Every body in...</h3>
                    <p>Calvin Klein U...</p>
                  </div>
                  <div className="inspiratie-panou-2-2">
                    <a href="#Infobord"><img src={ doi } alt="" /></a>
                    <h3>Stil pentru doi</h3>
                    <p>Tricot confort...</p>
                  </div>
                  <div className="inspiratie-panou-2-3">
                    <a href="#Infobord"><img src={ sarc } alt="" /></a>
                    <h3>Pentru sarcină</h3>
                    <p>Lookuri pentr...</p>
                  </div>
                </div>
                  <h2>descopera toate storyurile</h2>

                </div>
              </div>
            </div>
           </div>

          </div>
        </div>
      </div>
















      
      






     
 </div>
    
  );
};

export default Infobord;

