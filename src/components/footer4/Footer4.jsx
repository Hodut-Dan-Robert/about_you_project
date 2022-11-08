import './footer4.scss';
import  about  from '../../images/about.jpg';
import  you  from '../../images/you.jpg';
import { MdFacebook, } from 'react-icons/md';
import { BsPinterest } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaTiktok, FaStackpath } from 'react-icons/fa';

function Footer4() {
  return (
    <div className="footer-4-div">
        <div className="footer-div-4">
            <div className="footer-4-1">
                <div className="footer-display">
                <img src={ about } alt="" />
                <img src={ you } alt="" />
                </div>
                <div className="footer-icons">
                    <div className="footer-icons-1">
                    <MdFacebook/>
                    </div>
                    <div className="footer-icons-2">
                    <AiFillInstagram/>
                    </div>
                    <div className="footer-icons-3">
                    <AiOutlineTwitter/>
                    </div>
                    <div className="footer-icons-4">
                    <AiFillYoutube/>
                    </div>
                    <div className="footer-icons-5">
                    <BsPinterest />
                    </div>
                    <div className="footer-icons-6">
                    <FaTiktok />
                    </div>
                    

                </div>
            </div>
            <div className="footer-4-2">
                <h3>RELATII CU CLIENTII</h3>
                <p>Ajutor si contact</p>
                <p>Zona de livrare</p>
                <p>Preotectia consumatorului</p>
            </div>
            <div className="footer-4-3">
                <h3>CUMPARATURI SIGURE</h3>
                <div className="footer-display-1">
                    <FaStackpath/>
                    <p>Datele tale sunt in siguranta la noi</p>
                </div>
            </div>
        </div>
           <div className="footer-notice">
           <p>*Cel mai mic preț total din ultimele 30 de zile înainte de reducerea de preț.</p>
            <p>**Apel gratuit din toate rețelele. Apelurile din străinătate pot fi taxate.</p>
            <p>***Toate prețurile includ TVA.</p>
            <p>5) Nu se aplică condiții speciale. https://www.aboutyou.ro/conditii-promotie</p>
           </div>
    </div>
  )
}

export default Footer4