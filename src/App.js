import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const App = () => {
    const generateNewDie = () => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
    });

    const allNewDice = () => {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    };

    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    const rollDice = () => {
        if (!tenzies) {
            return setDice(prevDice => (
                prevDice.map(die => {
                    return die.isHeld
                        ? die
                        : generateNewDie();
                })
            ));
        }
        setTenzies(false);
        setDice(allNewDice());
    };

    const holdDice = (id) => setDice(
        prevDice => prevDice.map(die => {
            return die.id === id
                ? { ...die, isHeld: !die.isHeld }
                : die;
        })
    );

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ));

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