import './filter.scss';
import { RiTShirt2Line, RiArrowUpDownFill } from 'react-icons/ri';
import { CgArrowsScrollV } from 'react-icons/cg';
import React,{useState} from 'react';

function Filter() {
  const [show, setShow, ]=useState(false)
  const [showw, setShoww,]=useState(false)
  return (
    <div className="filter-div">
        <div className="filter-div-1">
          <div className="category">
            <p>Femei > Haine</p>
          </div>
          <div className="category-0">
            <div className="category-1">
              <p>Haine</p>
              <span>147,454</span>
            </div>
            <div className="category-2">
              <div className="category-2-1">
                <div className="category-2-1-1" onClick={()=>setShow(!show)}>
     
                  <RiTShirt2Line/>
                  <p>Vizualizare</p>
                  <CgArrowsScrollV />
                </div>
                           {
       show?<div className="category-2-1-2"> <p>Vezi articol</p><p>Vezi Modelul</p></div>:null
     }
                

              </div>
              <div className="category-2-2">
                <div className="category-2-2-1" onClick={()=>setShoww(!showw)}>
                  <RiArrowUpDownFill/>
                  <p>Sorteaza</p>
                  <CgArrowsScrollV />
                </div>
                {
       showw? <div className="category-2-2-2"><p>Stilul tau</p><p>Cel mai mare pret </p><p>Cel mai mic pret </p><p>Noutati</p><p>Cea mai buna reducere</p></div>:null
      }
              </div>
            </div>
          </div>
        </div>
        <div className="line"><p></p></div>
    </div>
    
    
      
    
  )   
}

export default Filter
