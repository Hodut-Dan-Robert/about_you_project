import './footer.scss';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SiCodesandbox } from 'react-icons/si';
import { FaTshirt } from 'react-icons/fa';
import visa from '../../images/visa.jpg';

function Footer() {
  return (

    <div className="footer">
            <div className="footer-1">
        <h3>Haine pentru femei - Pregătește-te să fii remarcată</h3>

        <p>Prima impresie contează în aproape toate situațiile în care te vei afla de-a lungul vieții, iar hainele pe care le porți te pot ajuta să te faci mai ușor remarcată. Moda pentru femei este în continuă schimbare, de aceea, pe site-ul About You, vei găsi mereu o gamă variată de haine de damă care să se potrivească stilului tău și tendințelor actuale.</p>
    
        <h3>Modele de îmbrăcăminte pentru toate gusturile</h3>


        <p>Colecțiile de modă pentru femei pe care le vei găsi pe site-ul nostru sunt potrivite indiferent dacă preferi un stil elegant ori dacă ești adepta hainelor casual sau sport. Din sutele de modele de haine de damă, cu siguranță vei putea să îți alegi ținuta vestimentară potrivită pentru o seară în oraș cu prietenii, pentru o cină romantică, pentru o plimbare în parc sau pentru
             <span>o întâlnire de afaceri.</span></p>


        <h3>Îndrăznește să te reinventezi prin modă pentru femei cu accesoriile potrivite pentru tine</h3>

        <p>Poate că hainele din garderoba ta sunt în continuare la modă, însă stilul nu se mai potrivește cu personalitatea ta din prezent. O schimbare de atitudine pornește de la stilul vestimentar pe care îl abordezi și nu e niciodată prea târziu să te reinventezi. Nu te teme să fii îndrăzneață și să porți 
            <span>pantaloni strâmți, din piele, pantofi stiletto</span> ori <span>topuri</span> decoltate. Sau poate preferi 
            <span>blugi</span> heavy washed, bluze din molton și <span>adidași</span>. Indiferent de stilul abordat, alegerea ținutei vestimentare potrivite trebuie să îți aducă bucurie, iar outfiturile zilnice să te ajute să te faci remarcată fie că ești într-un cerc de prieteni, la coadă la supermarket sau la o întâlnire de business. Încearcă noi stiluri vestimentare și uimește-i pe ceilalți cu fiecare apariție. Rămâi pe About You, alege cu atenție haine la modă potrivite pentru tine și poartă-le cu încredere!</p>
    </div>
    <div className="footer-2">
        <div className="footer-div-1">
        <RiSecurePaymentLine/>
        <p>PLATA RAMBURS</p>
        </div>
        <div className="footer-div-2">
            <SiCodesandbox/>
            <p>LIVRARE & RETUR GRATUITE</p>
        </div>
        <div className="footer-div-3">
            <FaTshirt/>
            <p>PESTE 1000 DE BRANDURI</p>
        </div>
    </div>
    <div className="footer-3">
        <img src={ visa } alt="" />
    </div>
    </div>





  )
}

export default Footer