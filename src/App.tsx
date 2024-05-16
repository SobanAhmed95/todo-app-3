import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [txt , settxt] = useState('abc');
  const [txtlist , setxtlist] = useState<any>([]);
  const del = (i:any) => {
    txtlist.splice(i, 1);
    setxtlist([...txtlist]);

  }
  const edi = (index : number) => { 
    const newtxt = prompt("Enter your new index")
    if(newtxt !== null){
      const newlist = [...txtlist];
      newlist[index] = newtxt;
     setxtlist(newlist);

    }
    
  } 
  return (
    <body className="App">
        <h4>{txt}</h4>
        <input type="text" id='inp' onChange={(e) => {
          settxt(e.target.value);
          console.log(e.target.value);
        }}/>
        <button className='add' onClick={() => {
             txtlist.push(txt);
             setxtlist([...txtlist]);
        }}>Add</button>
        <button className='del' onClick={(i:any) => {
             txtlist.splice(i);
             setxtlist([...txtlist]);
             
        }}>Delete All</button>
        {txtlist.map((x:any , i:any) => (
          <p className='p' key={i}><span className='sp'>{x}</span> 
          <p>
          <button onClick={() => del(i)} className='del'>Delete</button>
          <button onClick={() => edi(i)} className='edi'>Edit</button>
          </p>
          </p>
        ))}
    </body>
  );
}

export default App;
