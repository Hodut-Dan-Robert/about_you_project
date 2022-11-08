import './sidebar.scss'
import {RiArrowRightSFill} from 'react-icons/ri';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-1">
        <div className="sidebar-div">
          <span><RiArrowRightSFill/>Haine</span>
          <ul>
            <li><a href="#Sidebar">Noutati</a></li>
            <li><a href="#Sidebar">Trending</a></li>
            <li><a href="#Sidebar">Tricouri</a></li>
            <li><a href="#Sidebar">Pantaloni</a></li>
            <li><a href="#Sidebar">Jeans</a></li>
            <li><a href="#Sidebar">Camasi</a></li>
            <li><a href="#Sidebar">Sweat</a></li>
            <li><a href="#Sidebar">Geci</a></li>
            <li><a href="#Sidebar">Costume & Sacouri</a></li>
            <li><a href="#Sidebar">Haine de ocazie</a></li>
            <li><a href="#Sidebar">Moda de plaja</a></li>
            <li><a href="#Sidebar">Lenjerie</a></li>
            <li><a href="#Sidebar">Marimi mari</a></li>
            <li><a href="#Sidebar">Pulovere & cardigane</a></li>
            <li><a href="#Sidebar">Paltoane</a></li>
            <li><a href="#Sidebar">Exclusiv</a></li>
            <li><a href="#Sidebar">Mai sustenabil</a></li>
            <li><a href="#Sidebar">Reciclare</a></li>
            <li><a href="#Sidebar">Pantofi</a></li>
            <li><a href="#Sidebar">Sport</a></li>
            <li><a href="#Sidebar">Accesorii</a></li>
            <li><a href="#Sidebar">Premium</a></li>
            <li><a href="#Sidebar">SALE</a></li>
          </ul>
        </div>
        <div className="sidebar-div-1">
        
          <div className="sidebar-div-top">
          <div className="sidebar-div-nou">
          <p>Top</p>
          <p>100</p>
          </div>
          <div className="sidebar-div-nou-1">
          <span>Noutati</span>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar  