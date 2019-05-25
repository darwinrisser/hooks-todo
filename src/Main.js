import React, { useState} from 'react';
import App from './App';
import './Main.css';

function Main(){
  const [list, newList] = useState([
    {
      isCompleted: false
    },
    {
      isCompleted: false
    },
    {
      isCompleted: false
    }
  ]);
  
  const addList = () => {
    const addedList = [...list, {isCompleted: false}];
    newList(addedList);
  };

  return(
    <div className="full">
      <button onClick={addList}>New List</button>
      <div className="main">
       {list.map((list, index) => (
          <App
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Main;