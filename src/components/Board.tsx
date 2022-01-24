import React from 'react';
import '../styles/Board.css';
import Button from './Button';
import { useState } from 'react';
import { FaDivide, FaMinus, FaTimes, FaPlus, FaEquals } from 'react-icons/fa';

// Do we want to add decimal?

export const Board: React.FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [input, setInput] = useState<string>('');

    const math = (e: React.MouseEvent) => {
        const clicked = e.target as Element;
        switch (clicked.id) {
            case "plus": {
                setInput(input + '+');
                break;
            }
            case "subtract": {
                setInput(input + '-');
                break;
            }
            case "multiply": {
                setInput(input + '*');
                break;
            }
            case "divide": {
                setInput(input + '/');
                break;
            }
            case "equalSign": {
                console.log(input);
                setInput(eval(input));
            }
        }
    }

    return (
        <div>
            <div className="board">
                <div className="board_screen">
                    <input readOnly className="screen_user-input" value={input} onChange={() => console.log('is it working')} />
                </div>
                <div className="board_container">
                    <div className="board_number-container">
                        {numbers.map(element => {
                            return <Button num={element} userInput={input} setInput={setInput} key={Math.floor(Math.random() * 10000)} />
                        })}
                    </div>
                    <div className="board_operator-container">
                        <button id="plus" className="board_operator" onClick={math}>
                            <FaPlus id="plus" onClick={math} />
                        </button>
                        <button className="board_operator" id="subtract" onClick={math}>
                            <FaMinus id="subtract" onClick={math} />
                        </button>
                        <button className="board_operator" id="multiply" onClick={math}>
                            <FaTimes id="multiply2" onClick={math} />
                        </button>
                        <button className="board_operator" id="divide" onClick={math}>
                            <FaDivide id="divide" onClick={math} />
                        </button>
                        <button id="equalSign" className="board_operator" onClick={math}>
                            <FaEquals id="equalSign" onClick={math} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}