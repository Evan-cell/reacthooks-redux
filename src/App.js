
import React, {useState} from 'react';
import './App.css';
import Card from './Card';
import { faker } from '@faker-js/faker';

function App() {
  const [name,setName] = useState('evan kimani')
  const buttonsMarkup = (
    
    <div>
      <button className="button">Yes</button>
      <button className="button button2">No</button>
    </div>
  )
  const changeNameHandler = () => {
    setName('jacky chan')
  }
  return (
    <div className="App">
      
      <Card name={name}
      title='Global Program Manager'
      onChangeName={changeNameHandler}
      image='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/351.jpg'>{buttonsMarkup}
      <button className="button" onClick={changeNameHandler}>Change name</button>
      </Card>
      
    </div>
  );
}

export default App;
