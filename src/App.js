import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const App = () => {
    const [dice, setDice] = useState([]);
    const [tenzies, setTenzies] = useState(false);


    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container"></div>
            <button className="roll-dice">
                New Game
            </button>
        </main>
    );
};

export default App;