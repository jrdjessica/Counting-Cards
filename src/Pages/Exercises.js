import React from 'react';
import '../App.css';
import { cardDeck } from './Tutorial'


const minusOneValue = [0, 10, 11, 12, 13, 14, 24, 25, 26, 27, 28, 29, 40, 41, 42, 52, 53, 54, 55]

const zeroValue = [7, 8, 9, 21, 22, 23, 35, 36, 37, 49, 50, 51]

const plusOneValue = [1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 43, 44, 45, 46, 47, 48]


function Exercises() {
    const [cardImg, setCardImg] = React.useState('');
    // const [correct, setCorrect] = React.useState(0);
    const [cardIndex, setCardIndex] = React.useState();
    const [feedback, setFeedback] = React.useState("");
    const [exerciseStatus, setExerciseStatus] = React.useState(null);

    function ExerciseOne() {

        // console.log(cardIndex)

        return (
            <div>
                ex {exerciseStatus}
                {!exerciseStatus && <button id="btn" onClick={() => { GetRandomCard(); setExerciseStatus(1); }}>Exercise 1</button>}
                {exerciseStatus === 1 && <button onClick={GetRandomCard}>Next</button>}
            </div>
        )
    }

    // function ExerciseTwo() {
    //     return (
    //         <div>
    //             ex 2
    //             <button id="btn" onClick={GetRandomCard}>Start</button>
    //         </div>
    //     )
    // }

    function GetRandomCard() {
        const randomCard = cardDeck[cardIndex];
        setCardImg(randomCard);
        setCardIndex(Math.floor(Math.random() * cardDeck.length));
    }


    function UserInputButtons() {
        return (
            <div>
                {<button onClick={() => checkAnswer(-1)}>-1</button>}
                {<button onClick={() => checkAnswer(0)}>0</button>}
                {<button onClick={() => checkAnswer(1)}>+1</button>}
            </div>
        )
    }


    function checkAnswer(userInput) {
        console.log(cardIndex)

        if (minusOneValue.includes(cardIndex) && userInput === -1) {
            console.log('-1')
            // setCorrect(correct + 1)
            setFeedback('Correct')


        } else if (zeroValue.includes(cardIndex) && userInput === 0) {
            console.log('0')
            // setCorrect(correct + 1)
            setFeedback('Correct')
        } else if (plusOneValue.includes(cardIndex) && userInput === 1) {
            console.log('1')
            // setCorrect(correct + 1)
            setFeedback('Correct')
        } else {
            console.log('else')
            setFeedback('Incorrect. Try again.')
        }

    }

    return (
        <div>
            <ExerciseOne />
            {/* <ExerciseTwo /> */}
            <div className='cardImg'>
                {cardImg}
            </div>
            {cardIndex}
            <div>
                <UserInputButtons />
            </div>
            {feedback}
        </div>
    );
}

export default Exercises;