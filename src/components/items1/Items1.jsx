import './items1.scss';
import dataItems1 from './Dataitems1';

function Items1() {
  return (
    <div className="items-div111">
        { dataItems1.map(item=>(
       <div className="items-div-1">
        <div className="items-div-2">
            <div className="items-div-2-1">
                <img src={item.linkImg} alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>

            </div>
            <div className="items-div-2-2">
                <img src={item.linkImg1} alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>

            </div>
        </div>
       </div>




        ))}
    </div>
  )
}

export default Items1