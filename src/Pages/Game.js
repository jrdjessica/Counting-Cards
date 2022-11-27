import React from 'react';
import '../App.css';
import { cardDeck } from './Tutorial'

function Game() {
    const [game, setGame] = React.useState('off');

    let answer = 0;
    const GameCards = []

    function ChooseDifficulty() {
        return (
            <div>
                {game === 'off' && <button onClick={() => GetCards(5)}>Easy</button>}
                {game === 'off' && <button onClick={() => GetCards(15)}>Medium</button>}
                {game === 'off' && <button onClick={() => GetCards(30)}>Hard</button>}
            </div>
        )
    }

    function GetCards(numCards) {
        setGame('on');

        for (let i = 1; i <= numCards; i++) {
            const keys = Object.keys(cardDeck);
            const randomCard = keys[Math.floor(Math.random() * keys.length)];
            GameCards.push(randomCard);
            answer += cardDeck[randomCard]
        }
    }



    return (
        <div>
            Game
            <div>
                <ChooseDifficulty />
            </div>
        </div>
    );
}

export default Game;
