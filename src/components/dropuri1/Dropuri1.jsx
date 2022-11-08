import './dropuri1.scss';
import dropuri2 from '../../images/dropuri2.jpg'
import dropuri3 from '../../images/dropuri3.jpg'
import dropuri6 from '../../images/dropuri6.jpg'

function Dropuri1() {
  return (
   <div className="dropuri-div-1">
    <div className="dropuri-div-2">
      <p>ACUM</p>
      <span>Lansate Azi</span>
      <div className="dropuri-div-2-1">
        <div className="dropuri-div-2-1-1">
          <img src={ dropuri2 } alt="" />
          <p>Amsterdam City Moments</p>
          <h2>Guido Maria Kretschmer Collection</h2>
          <h3>Doar de la ABOUT YOU</h3>
        </div>
        <div className="dropuri-div-2-1-2">
          <p>Exclusiv aici</p>
          <h2>Guido Maria Kretschmer Collection</h2>
          <h3>De când tot așteptam! În sfârșit s-a lansat noua colecție de toamnă/iarnă de la Guido Maria Kretschmer! Sezonul acesta, colecția a fost inspirată de Amsterdam și de toate fațetele acestuia. Ce zici de o plimbare printre standurile piețelor de flori? Iar noi abia așteptăm să descoperim următoarele surprize pregătite de Guido!</h3>
          <button>Cumpara acum</button>
        </div>
      </div>
      <div className="dropuri-div-2-2">
      <div className="dropuri-div-2-2-1">
          <img src={ dropuri3 } alt="" />
          <p>Future Vintage</p>
          <h2>Pacemaker</h2>
          <h3>Doar de la ABOUT YOU</h3>
        </div>
        <div className="dropuri-div-2-2-2">
          <p>Exclusiv aici</p>
          <h2>Pacemaker</h2>
          <h3>Super brandul de streetwear Pacemaker dorește să continue succesul ultimelor sale lansări și în cazul ultimei colecții capsulă. Iar asta pentru că între timp PASICS, piesele basic de la Pace, au devenit deja articole emblematice. De data aceasta, brandul face un salt până în anul 2025 și își imaginează ce piese vor fi disponibile în magazinele vintage ale viitorului. „Viitorul Vintage” impresionează mulțumită elementelor grafice puternice și noilor croieli de o calitate superioară.</h3>
          <button>Cumpara acum</button>
        </div>
      </div>
      <div className="dropuri-div-2-3">
      <div className="dropuri-div-2-3-1">
          <img src={ dropuri6 } alt="" />
          <p>Strong & Independent</p>
          <h2>RÆRE by Lorena Rae</h2>
          <h3>Doar de la ABOUT YOU</h3>
        </div>
        <div className="dropuri-div-2-1-2">
          <p>Exclusiv aici</p>
          <h2>RÆRE by Lorena Rae</h2>
          <h3>Noul brand RÆRE al supermodelului Lorena Rae se adresează femeilor cărora nu le este teamă să își urmeze visurile, indiferent de cât de îndrăznețe sunt. Lorena este o adevărată sursă de inspirație și le învață cum să fie sofisticate fără să renunțe la confort, totul prin piesele din colecția sa. Mesajul ei: nu te teme să visezi și trăiește-ți povestea unică!</h3>
          <button>Cumpara acum</button>
        </div>
      </div>
    </div>
   </div>
      
    
  )
}

export default Dropuri1
