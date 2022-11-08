import './filter0.scss';
import filterData from './filterData';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GrPowerReset } from 'react-icons/gr';
import React,{useState} from 'react';



function Filter0() {
    const [show, setShow, ]=useState(false)
  return (
    <div className="filter-box">
        <div className="filter-bar">
        <div className="marime">
            <button onClick={()=>setShow(!show)}>Marime<IoMdArrowDropdown/></button>
            {
       show?<div className="marime-box">
                <div className="marime-box-scroll">
                <div className="marime-box-1">
                    <p>Toate Marimile</p>
                    <p>Petit e</p>
                    <p>inalt a</p>
                </div>
                <div className="marime-box-2">
                    <h>Haine</h>
                    <p>International</p>
                    <div className="marime-box-2-1">
                        <span>4XS</span>
                        <span>XXXS</span>
                        <span>XXS</span>
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                        <span>XXXL</span>
                        <span>4XXXL</span>
                        <span>5XXXL</span>
                        <span>6XXXL</span>
                        <span>7XXXL</span>
                        <span>8XXXL</span>
                        <span>9XXXL</span>
                        <span>10XXXL</span>
                        <span>11XXXL</span>
                        <span>12XXXL</span>
                    </div>
                </div>
                </div>
         
                <div className="marime-box-3">
                    <GrPowerReset/>
                    <p>Reseteaza</p>
                </div>
            </div>:null
     }
        </div>
        <div className="culoare">
            <button>Culoare<IoMdArrowDropdown/></button>
        </div>
        <div className="marca">
            <button>Marca<IoMdArrowDropdown/></button>
        </div>
        <div className="pret">
            <button>Pret<IoMdArrowDropdown/></button>
        </div>
        <div className="sale">
            <button>Sale</button>
        </div>
        <div className="stil">
            <button>Stil<IoMdArrowDropdown/></button>
        </div>
        <div className="sustenabil">
            <button>Mai sustenabil</button>
        </div>
        <div className="marimi">
            <button>Marimi speciale<IoMdArrowDropdown/></button>
        </div>
        </div>

        <div className="filtre-extra">
            <p>Mai multe filtre <IoMdArrowDropdown/></p>
        </div>

    </div>

     
    
  );
};

export default Filter0;
