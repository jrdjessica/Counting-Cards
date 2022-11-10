import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export const cardDeck = [
    // Spades playing cards
    <p>&#x1F0A1;</p>,
    <p>&#x1F0A2;</p>,
    <p>&#x1F0A3;</p>,
    <p>&#x1F0A4;</p>,
    <p>&#x1F0A5;</p>,
    <p>&#x1F0A6;</p>,
    <p>&#x1F0A7;</p>,
    <p>&#x1F0A8;</p>,
    <p>&#x1F0A9;</p>,
    <p>&#x1F0AA;</p>,
    <p>&#x1F0AB;</p>,
    <p>&#x1F0AD;</p>,
    <p>&#x1F0AE;</p>,
    // Hearts playing cards
    <p>&#x1F0B1;</p>,
    <p>&#x1F0B2;</p>,
    <p>&#x1F0B3;</p>,
    <p>&#x1F0B4;</p>,
    <p>&#x1F0B5;</p>,
    <p>&#x1F0B6;</p>,
    <p>&#x1F0B7;</p>,
    <p>&#x1F0B8;</p>,
    <p>&#x1F0B9;</p>,
    <p>&#x1F0BA;</p>,
    <p>&#x1F0BB;</p>,
    <p>&#x1F0BC;</p>,
    <p>&#x1F0BD;</p>,
    <p>&#x1F0BE;</p>,
    // Diamonds playing cards
    <p>&#x1F0C1;</p>,
    <p>&#x1F0C2;</p>,
    <p>&#x1F0C3;</p>,
    <p>&#x1F0C4;</p>,
    <p>&#x1F0C5;</p>,
    <p>&#x1F0C6;</p>,
    <p>&#x1F0C7;</p>,
    <p>&#x1F0C8;</p>,
    <p>&#x1F0C9;</p>,
    <p>&#x1F0CA;</p>,
    <p>&#x1F0CB;</p>,
    <p>&#x1F0CC;</p>,
    <p>&#x1F0CD;</p>,
    <p>&#x1F0CE;</p>,
    // Clubs playing cards
    <p>&#x1F0D1;</p>,
    <p>&#x1F0D2;</p>,
    <p>&#x1F0D3;</p>,
    <p>&#x1F0D4;</p>,
    <p>&#x1F0D5;</p>,
    <p>&#x1F0D6;</p>,
    <p>&#x1F0D7;</p>,
    <p>&#x1F0D8;</p>,
    <p>&#x1F0D9;</p>,
    <p>&#x1F0DA;</p>,
    <p>&#x1F0DB;</p>,
    <p>&#x1F0DC;</p>,
    <p>&#x1F0DD;</p>,
    <p>&#x1F0DE;</p>,
]

function Tutorial() {
    const [words, setWords] = React.useState("");
    const [cards, setCards] = React.useState("");
    const [pageCount, setPageCount] = React.useState(1);


    React.useEffect(() => {
        if (pageCount === 1) {
            setWords('The Hi-Lo Strategy works as values are assigned to cards and players keep a running count based off these cards')
        };
        if (pageCount === 2) {
            setWords('Aces = -1')
            setCards(cardDeck[0])
        };
        if (pageCount === 3) {
            setWords('Card values 2-6  = +1')
            setCards(<div>
                <p>&#x1F0A2;</p>
                <p>&#x1F0A3;</p>
                <p>&#x1F0A4;</p>
                <p>&#x1F0A5;</p>
                <p>&#x1F0A6;</p>
            </div>)
        };
        if (pageCount === 4) {
            setWords('Card values 7-9 = 0')
            setCards(<div>
                <p>&#x1F0A7;</p>
                <p>&#x1F0A8;</p>
                <p>&#x1F0A9;</p>
            </div>)
        };
        if (pageCount === 5) {
            setWords('Card values 10+ = -1')
            setCards(<div>
                <p>&#x1F0AA;</p>
                <p>&#x1F0AB;</p>
                <p>&#x1F0AD;</p>
                <p>&#x1F0AE;</p>
            </div>)
        };
        if (pageCount === 6) {
            setWords('Summary: Aces = -1. Card values 2-6  = +1. Card values 7-9 = 0. Card values 10+ = -1.')
            setCards(cardDeck[0])
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
            Tutorial
            <div>
                {words}
                {cards}
                {pageCount > 1 && <button onClick={() => setPageCount(pageCount - 1)}>Prev</button>}
                {1 <= pageCount && pageCount <= 7 && <button onClick={() => setPageCount(pageCount + 1)}>Next</button>}
                {pageCount === 8 && <button onClick={routeChange}>Exercise</button>}
            </div>
        </div>
    );
}

export default Tutorial;
