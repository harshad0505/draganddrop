import { feature } from './feature';
import { useState ,useRef} from 'react';
import phone from './phone.png'

import './App.css';

function App() {
  const startItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(feature);
 
  const dragStart = (e, position) => {
    startItem.current = position;
    console.log(startItem.current)
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(dragOverItem.current);
    console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[startItem.current];
    const that=copyListItems[dragOverItem.current];
    console.log(that)
    console.log(dragItemContent)
    copyListItems.splice(startItem.current, 1,that);
   // console.log( copyListItems.splice(startItem.current, 1))
   //copyListItems.splice(startItem.current,0,that);
    copyListItems.splice(dragOverItem.current, 1, dragItemContent);
  //  copyListItems.splice(dragOverItem.current, 1);
  
    startItem.current = null;
    dragOverItem.current = null;
    console.log(copyListItems);
    setList(copyListItems);
  };
 
  return (
    <>
      <img className='immg' src={phone} alt='hello'></img>
    <div className='divv'>
    {
    list&&
    list.map((item, index) => (
    
      <div className={`div div${index} `} 
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
         <h5 className='title'>{item.title}</h5> 
          <p className='desc'>{item.Description}</p>
      </div>
      ))}
    </div>
    </>
  );
}

export default App;
