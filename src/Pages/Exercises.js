import React from 'react';
import '../App.css';
import { cardDeck } from './Tutorial'


function Exercises() {
    const [cardImg, setCardImg] = React.useState('');
    const [cardValue, setCardValue] = React.useState();
    const [correct, setCorrect] = React.useState(0);
    const [feedback, setFeedback] = React.useState('');
    const [exerciseStatus, setExerciseStatus] = React.useState(null);

    function ExerciseOne() {
        // Choose random card from deck
        function GetRandomCard() {
            const keys = Object.keys(cardDeck)
            const randomCard = keys[Math.floor(Math.random() * keys.length)]

            setCardValue(cardDeck[randomCard])
            setCardImg(randomCard)
        }


        function UserInputButtons() {
            // Display card values on buttons
            return (
                <div>
                    {<button onClick={() => CheckAnswer(-1)}>-1</button>}
                    {<button onClick={() => CheckAnswer(0)}>0</button>}
                    {<button onClick={() => CheckAnswer(1)}>+1</button>}
                </div>
            )
        }

        function CheckAnswer(userInput) {

            function Correct() {
                // Increment correct answers by one
                setCorrect(correct + 1)
                setFeedback('Correct')
            }

            // Check user input
            if (userInput === -1 && cardValue === -1) {
                Correct();
            } else if (userInput === 0 && cardValue === 0) {
                Correct()
            } else if (userInput === 1 && cardValue === 1) {
                Correct()
            } else {
                setFeedback('Incorrect. Try again.')
            }

        }


        return (
            <div>
                {!exerciseStatus && <button id="btn" onClick={() => { GetRandomCard(); setExerciseStatus(1); }}>Start</button>}
                {exerciseStatus === 1 && <p>Choose the correct value</p>}
                <p id='card'>
                    {cardImg}
                </p>
                <div>
                    {cardImg && UserInputButtons()}
                </div>
                <div>
                    {feedback}
                </div>
                <div>
                    {feedback === 'Correct' && correct !== 20 && <button onClick={() => { GetRandomCard(); setFeedback('') }}>Next</button>}
                </div>
                <div>
                    {correct}/20
                </div>
                <div>
                    {correct === 20 && <button onClick={() => { GetRandomCard(); setCorrect(0); setFeedback('') }}>Play Again</button>}
                </div>
            </div>
        )
    }


    return (
        <div>
            <h1>Exercise</h1>
            <ExerciseOne />
        </div>
    );
}

export default Exercises;