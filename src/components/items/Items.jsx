import './items.scss';
import dataItems from './Dataitems';

function Items() {
  return (
    <div className="items-div">
        { dataItems.map(item=>(    
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

export default Items