import React from 'react';
import '../App.css';
import { cardDeck } from './Tutorial'


const minusOneValue = [0, 10, 11, 12, 13, 14, 24, 25, 26, 27, 28, 29, 40, 41, 42, 52, 53, 54, 55]

const zeroValue = [7, 8, 9, 21, 22, 23, 35, 36, 37, 49, 50, 51]

const plusOneValue = [1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 43, 44, 45, 46, 47, 48]


function Exercises() {
    const [exercise, setExercise] = React.useState(false);
    const [cardImg, setCardImg] = React.useState('');
    const [correct, setCorrect] = React.useState(0);
    const [cardIndex, setCardIndex] = React.useState(0);
    const [feedback, setFeedback] = React.useState("");
    console.log('exercises')
    console.log(cardIndex)


    function ExerciseOne() {
        setCardIndex(Math.floor(Math.random() * cardDeck.length));

        const randomCard = cardDeck[cardIndex];

        setExercise(true);
        setCardImg(randomCard);
        console.log('tutorial')
        if (minusOneValue.includes(cardIndex)) {
            console.log('-1')
        } else if (zeroValue.includes(cardIndex)) {
            console.log('0')
        } else if (plusOneValue.includes(cardIndex)) {
            console.log('+1')
        }
    }


    function checkAnswer(userInput) {
        console.log(userInput)
        if (minusOneValue.includes(cardIndex) && userInput == -1) {
            setCorrect(correct + 1)
            setFeedback('Correct')


        } else if (zeroValue.includes(cardIndex) && userInput == 0) {
            setCorrect(correct + 1)
            setFeedback('Correct')
        } else if (plusOneValue.includes(cardIndex) && userInput == 1) {
            setCorrect(correct + 1)
            setFeedback('Correct')
        } else {
            setFeedback('Incorrect. Try again.')
        }
    }

    return (
        <div>
            Exercise 1
            <button id="btn" onClick={ExerciseOne}>Start</button>
            {exercise && <p>Choose the correct value</p>}
            <div>
                {feedback}
            </div>
            <div>
                {cardImg}
            </div>
            <div>
                {exercise && <button onClick={() => checkAnswer(-1)}>-1</button>}
                {exercise && <button onClick={() => checkAnswer(0)}>0</button>}
                {exercise && <button onClick={() => checkAnswer(1)}>+1</button>}
            </div>
            <div>
                {correct}/10
            </div>
            <div>
                {feedback && <button onClick={ExerciseOne}>Next Question</button>}
            </div>
        </div>
    );
}

export default Exercises;