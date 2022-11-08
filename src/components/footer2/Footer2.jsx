import './footer2.scss'

function Footer2() {
  return (
    <div className="footer-2-2">
        <h1>Nu rata nimic!</h1>
        <h3>Aboneaza-te la newsletter pentru a primi promoții exclusive</h3>
        <div className="footer-2-1">
            <div className="footer-2-1-1">
            <input type="radio" checked="checked"/>
            <p>Pentru femei</p>

            </div>
            <div className="footer-2-1-2">
            <input type="radio" checked="checked"/>
            <p>Pentru barbați</p>

            </div>
        </div>
        <div className="input-style">
        <input type="text" placeholder='Adresa ta de e-mail'/>

        </div>
        <button>Aboneaza-te</button>
        <div className="text">
        <p>Doresc să primesc pe e-mail informații despre vouchere, oferte și ultimele tendințe din modă.
Te poți dezabona oricând vrei, gratuit.</p>

        </div>
    </div>
  )
}

export default Footer2