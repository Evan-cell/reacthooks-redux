import React, {useState} from 'react';
import './App.css';
import Card from './Card';
import { faker } from '@faker-js/faker';

function App() {

const [card, setCard] = useState([
  { 
   id:1,
   name : 'evan kimani',
  title : 'developer',
  avatar : 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1629513965.1654170963'},
  {
   id:2,
   name : 'mozeee',
  title : 'developer',
  avatar : 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1629513965.1654170963'},
  { 
   id:3,
   name : 'dansoo',
  title : 'developer',
  avatar : 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1629513965.1654170963'},
  ])

  const [showCard,setshowCard] = useState(true)
  const toggleShowCard = () => setshowCard(!showCard)
  const deleteCardHandler = (cardIndex) =>{
    const cards_copy = [...card]
    cards_copy.splice(cardIndex,1)
    setCard(cards_copy)
  }
  const changeNameHandler = (event,id) =>{
     const cardIndex = card.findIndex(card=>card.id == id)
     const card_copy = [...card]
     card_copy[cardIndex].name = event.target.value
     setCard(card_copy)
  }
  const cardMarkup = showCard && (
  card.map((card,index)=><Card 
    title={card.title}
    name={card.name}
    image={card.avatar}
    key={card.id}
    onDelete={()=>deleteCardHandler(index)}
    onChangeName = {(event)=>changeNameHandler(event,card.id)}
  />)
  )
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle</button>
      
    {cardMarkup}
      
    </div>
  );
}

export default App;
