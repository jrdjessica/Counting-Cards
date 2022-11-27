import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export const cardDeck = {
    // Spades playing cards
    '\u{1F0A1}': -1,
    '\u{1F0A2}': 1,
    '\u{1F0A3}': 1,
    '\u{1F0A4}': 1,
    '\u{1F0A5}': 1,
    '\u{1F0A6}': 1,
    '\u{1F0A7}': 0,
    '\u{1F0A8}': 0,
    '\u{1F0A9}': 0,
    '\u{1F0AA}': -1,
    '\u{1F0AB}': -1,
    '\u{1F0AD}': -1,
    '\u{1F0AE}': -1,
    // Hearts playing cards
    '\u{1F0B1}': -1,
    '\u{1F0B2}': 1,
    '\u{1F0B3}': 1,
    '\u{1F0B4}': 1,
    '\u{1F0B5}': 1,
    '\u{1F0B6}': 1,
    '\u{1F0B7}': 0,
    '\u{1F0B8}': 0,
    '\u{1F0B9}': 0,
    '\u{1F0BA}': -1,
    '\u{1F0BB}': -1,
    '\u{1F0BD}': -1,
    '\u{1F0BE}': -1,
    // Diamonds playing cards
    '\u{1F0C1}': -1,
    '\u{1F0C2}': 1,
    '\u{1F0C3}': 1,
    '\u{1F0C4}': 1,
    '\u{1F0C5}': 1,
    '\u{1F0C6}': 1,
    '\u{1F0C7}': 0,
    '\u{1F0C8}': 0,
    '\u{1F0C9}': 0,
    '\u{1F0CA}': -1,
    '\u{1F0CB}': -1,
    '\u{1F0CD}': -1,
    '\u{1F0CE}': -1,
    // Clubs playing cards
    '\u{1F0D1}': -1,
    '\u{1F0D2}': 1,
    '\u{1F0D3}': 1,
    '\u{1F0D4}': 1,
    '\u{1F0D5}': 1,
    '\u{1F0D6}': 1,
    '\u{1F0D7}': 0,
    '\u{1F0D8}': 0,
    '\u{1F0D9}': 0,
    '\u{1F0DA}': -1,
    '\u{1F0DB}': -1,
    '\u{1F0DD}': -1,
    '\u{1F0DE}': -1,
}

function Tutorial() {
    const [words, setWords] = React.useState("");
    const [cards, setCards] = React.useState("");
    const [pageCount, setPageCount] = React.useState(1);


    React.useEffect(() => {
        if (pageCount === 1) {
            setWords('The Hi-Lo Strategy works as values are assigned to cards and players keep a running count based off these cards')
            setCards('')
        };
        if (pageCount === 2) {
            setWords('Aces = -1')
            setCards('\u{1F0A1}')
        };
        if (pageCount === 3) {
            setWords('Card values 2-6  = +1')
            setCards(['\u{1F0A2}', '\u{1F0A3}', '\u{1F0A4}', '\u{1F0A5}', '\u{1F0A6}'])
        };
        if (pageCount === 4) {
            setWords('Card values 7-9 = 0')
            setCards(['\u{1F0A7}', '\u{1F0A8}', '\u{1F0A9}'])
        };
        if (pageCount === 5) {
            setWords('Card values 10+ = -1')
            setCards(['\u{1F0AA}', '\u{1F0AB}', '\u{1F0AD}', '\u{1F0AE}'])
        };
        if (pageCount === 6) {
            setWords('Summary: Aces = -1. Card values 2-6  = +1. Card values 7-9 = 0. Card values 10+ = -1.')
            setCards('')
        };
        if (pageCount === 7) {
            setWords('Betting: Increase your bet when count is +2 or greater.')
        };
        if (pageCount === 8) {
            setWords('Congratulations! You finished the tutorial. Now choose exercise to get started or review previous slides.');
        };
    }, [pageCount]);

    const navigate = useNavigate();
    const routeChange = () => {
        const path = "/exercise";
        navigate(path);
    }

    return (
        <div>
            <h1>Tutorial</h1>
            <div>
                {words}
                <div>
                    <p id='card'>{cards}</p>
                </div>
                <div>
                    {pageCount > 1 && <button onClick={() => setPageCount(pageCount - 1)}>Prev</button>}
                    {1 <= pageCount && pageCount <= 7 && <button onClick={() => setPageCount(pageCount + 1)}>Next</button>}
                </div>
                {pageCount === 8 && <button onClick={routeChange}>Exercise</button>}
            </div>
        </div>
    );
}

export default Tutorial;
