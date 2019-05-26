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

  const removeList = index => {
    const newItems = [...list];
    newItems.splice(index, 1);
    newList(newItems);
  };

  return(
    <div className="full">
      <button onClick={addList}>New List</button>
      <div className="main">
       {list.map((list, index) => (
          <App
            index={index}
            key={index}
            removeList={removeList}
          />
        ))}
      </div>
    </div>
  )
}

export default Main;