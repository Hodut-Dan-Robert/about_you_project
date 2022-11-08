import './items2.scss';
import dataItems2 from './Dataitems2';

function Items2() {
  return (
    <div className="items-div222">
        { dataItems2.map(item=>(
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

export default Items2