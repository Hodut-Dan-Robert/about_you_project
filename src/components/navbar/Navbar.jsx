import './navbar.scss';
import  about  from '../../images/about.jpg';import  you  from '../../images/you.jpg';
import  flag  from '../../images/flag.jpg';import  arabia  from '../../images/arabia.jpg';
import  austria  from '../../images/austria.jpg';import  belgia  from '../../images/belgia.jpg';
import  bulgaria  from '../../images/bulgaria.jpg';
import  croatia  from '../../images/croatia.jpg';
import  danemarca  from '../../images/danemarca.jpg';
import  elvetia  from '../../images/elvetia.jpg';
import  estonia  from '../../images/estonia.jpg';
import  finlanda  from '../../images/finlanda.jpg';
import  franta  from '../../images/franta.jpg';
import { AiOutlineSearch } from 'react-icons/ai';import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';import { BsGlobe2 } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown, MdAddShoppingCart} from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  let [menuOpen, setMenuOpen ] = useState(true);

  let menuRef = useRef();

  useEffect (() => {
    document.addEventListener ("mouseleave", (event) => {
      if (!menuRef.current.contains (event.target))
      setMenuOpen(false);
    });

  });


  return (
    <div className='categories'>
      <div className="gen">
      
      <Link to="/femeipage">    
      <a href="/femeipage">Femei</a>     
      </Link>  
      
        
      <Link to="/barbatipage">    
      <a href="/barbatipage">Bărbaţi</a>     
      </Link>    
      
       <a href="/infophoto2">Copii</a>
      </div>
    <div className="logo">
    <a href="#Navbar">
      <img src={ about } alt="" />
      <img src={ you } alt="" />
    </a>
    </div>
     <div className="icons">
      <div className="input">
       <input type="text" />
        </div>
          <div className="search">
            <AiOutlineSearch/>
          </div>
        <div className="flag1">
          <div className="flag ">
            <div className="flag2">
                <img src={ flag } alt="" />
                <span>RO</span>
            </div>
        <div className="panou">
         <div className="panou1">
          <div className="panou-hover"> </div>
           <div className="panou2">
             <BsGlobe2/>
             <h3>Țară</h3>
           </div>
           <div ref ={menuRef} className="cart">
          <p> Magazin Actual</p>
         <div className="cart1">
        <img src= { flag } alt=""/>
       <p>Romania</p>
      <div className="arrow" onClick={()=>setMenuOpen(!menuOpen)}>
        <MdOutlineKeyboardArrowDown/>  
      </div>
      { menuOpen?
      <div className="menu ">
      <table>
       <ul>                              
         <li> <img src={ arabia } alt="" /><p>Arabia Saudita</p></li>                   
         <li><img src={ austria } alt="" /><p>Austria</p></li>
         <li><img src={ belgia } alt="" /><p>Belgia</p></li>
         <li><img src={ bulgaria } alt="" /><p>Bulgaria</p></li>
         <li><img src={ croatia } alt="" /><p>Croatia</p></li>
         <li><img src={ danemarca } alt="" /><p>Danemarca</p></li>
         <li><img src={ elvetia } alt="" /><p>Elvetia</p></li>
         <li><img src={ estonia } alt="" /><p>Estonia</p></li>
         <li><img src={ finlanda } alt="" /><p>Finlanda</p></li>
         <li><img src={ franta } alt="" /><p>Franta</p></li>
       </ul> </table>
      </div> :null } 
      
      
      </div> </div> </div> </div> </div> </div>
 <div className="user">
  <div className="user-div-1">
   <div className="user-div-2">
    <HiOutlineUser/>
     </div>
 <div className="panou-1">
  <div className="panou2-3">
   <div className="panou-2">
    <span>Nu te-ai logat!</span>
    <button>Logare</button>
     
  </div>
  <div className="panou-3">
   <div className="panou-3-1">
    <div className="panou-3-icon1">
     <MdAddShoppingCart/>
    </div>
   <span>Urmărește-ți comenzile</span>
  </div>
  <div className="panou-3-2">
 <div className="panou-3-icon2">
  <FaRegHeart />
</div>
<span>Dă like hainelor tale preferate</span>
</div> </div> </div> </div> </div> </div>         
  <div className="heart">
   <div className="heart-1">
    <div className="heart-2">
     <FaRegHeart/>
    </div>          
   <div className="panou-h">
    <div className="panou-h-1">
    <span>Lista ta de favorite este goală!</span>
   </div>
    <div className="panou-h-2">
     <span>Adaugă ceva   <FaRegHeart/>   în listă.</span>
    </div>
   <div className="panou-h2-1">
 <div className="panou-hover-heart"> </div>
  <div className="panou-h2">
   <button> Către lista de favorite</button>
   </div> </div>  </div> </div> </div>
    <div className="shop">
     <div className="shop-1">
      <div className="shop-2">
       <HiOutlineShoppingBag/>
     </div>
    <div className="panou-shop">
   <div className="panou-shop-1">
  <div className="panou-s">
 <div className="panou-s-1">
 <span>Coșul tău de cumpărături e gol!</span>
</div>
 <div className="panou-s-2">
  <span>Adaugă articole în coșul de cumpărături.</span>
 </div>
 <div className="panou-s-3">
 <span>Nu ai găsit nimic încă?</span>
 <button className='button1'>Comandă noutăți</button>
 <button className='button2'>Descoperă outfituri</button>
  </div> </div> </div> </div> </div> </div> </div> </div>
  ); };
export default Navbar;