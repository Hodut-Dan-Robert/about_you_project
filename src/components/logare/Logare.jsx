import './logare.scss';
import fa from '../../images/Fac.png';
import ap from '../../images/App.png';
import { Link } from 'react-router-dom';



function Logare() {
   
  return (
  
    <div className="box">
        <div className="box-width">
        </div>
      <div className="box1">
        <div className="box2">
        <div className="box-1">
            <h2>Logare</h2> 
            <div className="box-exit">
            <Link to="/"><button>x</button></Link>
            </div>
        </div>
        <div className="box-2">
            <div className="butoane">
                <button>Inregistreaza-te</button>
                <button>Logare</button>
            </div>
            <div className="butoane-2">
                <div className="facebook">
                    <img src={ fa } alt="" />
                    <span>Facebook</span>
                </div>
                <div className="Apple">
                    <img src={ ap } alt="" />
                    <span>Apple</span>
                </div>
            </div>
            <div className="line">
                <p>Sau cu adresa ta de e-mail</p>
            </div>
        </div>   
        <div className="box-3">
            <input type="text" placeholder='Prenume'/>
            <input type="text" placeholder='Nume'/>
            <input type="text" placeholder='Adresa ta de e-mail'/>
            <input type="text" placeholder='Parola(min.6 caractere)'/>
        </div>
        <div className="box-4">
            <p>Formula de adresare</p>
           <div className="label">
           <div className="label-1">
           <input type="radio" checked="checked" />
            <label htmlFor="Dna.">Dna.</label>
           </div>
            <div className="label-2">
            <input type="radio" checked="checked"/>
            <label htmlFor="Dl.">Dl.</label>
            </div>
           </div>
        </div>
        <div className="box-5">
            <input type="checkbox" checked="checked"/>
            <p>Vreau să mă anunțați în viitor despre tendințe actuale, reduceri & coduri voucher ABOUT YOU pe e-mail. Este oricând posibil să te dezabonezi.</p>
         </div>
        <div className="box-6">
            <button>Inregistreaza-te acum</button>
        </div>
        <div className="box-7">
            <p>Conform practicii obișnuite în orice magazin online, vei primi toate actualizările relevante pe e-mail (confirmarea comenzii, confirmarea livrării, informații cu privire la retur, recomandări). Poți să te dezabonezi oricând de la recomandări.</p>
        </div>
        </div>
      </div>

    
    </div>
  );
};

export default Logare;
