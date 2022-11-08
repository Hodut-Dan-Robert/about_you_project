import './infophoto.scss';
import  ema from '../../images/ema.jpg';

function Infophoto() {
  return (
    <div className="panou">
      <div className="panou-0">
        <div className="panou1">
          <p>Ema Louise</p>
          <h1>Sophisticated Violet Look by Ema Louise x About You</h1>
          <button>Către outfit</button>
        </div>
        <div className="panou2">
          <a href="#Infophoto"><img src={ ema } alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Infophoto
