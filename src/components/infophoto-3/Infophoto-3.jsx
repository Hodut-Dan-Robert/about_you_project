import './infophoto-3.scss';
import  boys from '../../images/boys.jpg';

function Infophoto2() {
  return (
    <div className="panou-1-2">
      <div className="panou-0-2">
        <div className="panou1">
          <p>De la Oras la mare</p>
          <h1>Upgrade la tinutele de plaja </h1>
          <button>Către outfit</button>
        </div>
        <div className="panou2">
          <a href="#Infophoto"><img src={ boys } alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Infophoto2