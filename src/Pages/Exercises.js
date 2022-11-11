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

        function GetRandomCard() {
            const keys = Object.keys(cardDeck)
            const randomCard = keys[Math.floor(Math.random() * keys.length)]

            setCardValue(cardDeck[randomCard])
            setCardImg(randomCard)
        }


        function UserInputButtons() {

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
                setCorrect(correct + 1)
                setFeedback('Correct')
            }

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
                Exercise {exerciseStatus}
                {!exerciseStatus && <button id="btn" onClick={() => { GetRandomCard(); setExerciseStatus(1); }}>Exercise 1</button>}
                {exerciseStatus === 1 && <p>Choose the correct value</p>}
                {cardImg}
                <div>
                    {cardImg && UserInputButtons()}
                </div>
                {feedback}
                {feedback === 'Correct' && <button onClick={() => { GetRandomCard(); setFeedback('') }}>Next</button>}
                <div>
                    {correct}/20
                </div>
            </div>
        )
    }


    return (
        <div>
            <ExerciseOne />

            {/* <ExerciseTwo /> */}

        </div>
    );
}

export default Exercises;