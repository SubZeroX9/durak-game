import React from 'react';
import './styles/App.css';
import Card from './components/Card'; // make sure the path to the Card component is correct
import Deck from './components/Deck'; // make sure the path to the Deck component is correct
import Hand from './components/Hand'; // make sure the path to the Hand component is correct

function App() {
  const cards = [
    { rank: '6', suit: 'hearts' },
    { rank: '7', suit: 'clubs' },
    { rank: '8', suit: 'diamonds' },
    { rank: '9', suit: 'spades' },
    { rank: '10', suit: 'hearts' },
    // Add more cards as needed
  ];
  return (
    <div >

      <Hand initialCards={cards} isFaceUp={true} isPlayerHand={true}/>

      <div>
        <Deck />
      </div>

      <Hand initialCards={cards} isFaceUp={false} isPlayerHand={false}/>
    </div>
  );
}

export default App;
