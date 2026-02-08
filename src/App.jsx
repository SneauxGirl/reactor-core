import './App.css'
import React from 'react';


function App() {

  const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
  ];

  return (
    <div className='container'>
      <h2>Fruit List</h2>
      <ui>
        {
          items.map((item, index) =>
             <li key={item.id}>{index + 1}. {item.name}</li>
            //  Can also use index as key for unique identifier every time
            // Be careful using OL versus numbering within - styling gets complicated
          )
        }
      </ui>
    </div>
  )
}

export default App
