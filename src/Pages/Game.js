import React from 'react';
import '../App.css';

function Game() {

    function ChooseDifficulty() {
        return (
            <div>
                <button>Easy</button>
                <button>Medium</button>
                <button>Hard</button>
            </div>
        )
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
