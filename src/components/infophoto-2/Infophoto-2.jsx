import './infophoto-2.scss';
import  lena from '../../images/lena.jpg';

function Infophoto2() {
  return (
    <div className="panou-1-2">
      <div className="panou-0-2">
        <div className="panou1">
          <p>Lena Gercke</p>
          <h1>Cozy Beige Look by LeGer by Lena Gercke </h1>
          <button>Către outfit</button>
        </div>
        <div className="panou2">
          <a href="#Infophoto"><img src={ lena } alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Infophoto2