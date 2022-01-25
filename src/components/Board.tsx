import React from 'react';
import '../styles/Board.css';
import Button from './Button';
import { useState } from 'react';
import { FaDivide, FaMinus, FaTimes, FaPlus, FaEquals } from 'react-icons/fa';

export const Board: React.FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
    const [input, setInput] = useState<string>('');

    const calculate = (arr: string[]): void => {
        const number1 = parseFloat(arr[0]);
        const number2 = parseFloat(arr[2]);
        const answer = (number1 + number2).toString();
        if(answer === 'NaN') {
            setInput('ERROR');
        }
        setInput(answer);
    }   

    const math = (e: React.MouseEvent) => {
        const clicked = e.target as Element;
        const expression = input.split(' ');
        switch (clicked.id) {
            case "plus": {
                if (expression.length  === 3) {
                    calculate(expression);
                    return;
                }
                setInput(input + ' + ');
                break;
            }
            case "subtract": {
                if(input.length > 0) {
                    setInput(input + ' - ');
                } else {
                    setInput('-');
                }
                break;
            }
            case "multiply": {
                setInput(input + ' * ');
                break;
            }
            case "divide": {
                setInput(input + ' / ');
                break;
            }
            case "equalSign": {
                const expression = input.split(' ');
                const number1 = parseFloat(expression[0]);
                const number2 = parseFloat(expression[2]);
                const answer = (number1 + number2).toString();
                if(answer === 'NaN') {
                    setInput('ERROR');
                    break;
                }
                setInput(answer);
                break;
            }
            case "clear": {
                setInput('');
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
                        <button id="clear" className="clear-button number-button" onClick={math}>
                            AC
                        </button>
                        {numbers.map(element => {
                            return <Button num={element} userInput={input} setInput={setInput} key={Math.floor(Math.random() * 100000)} />
                        })}
                    </div>
                    <div className="board_operator-container">
                        <button id="plus" className="board_operator add-button" onClick={math}>
                            <FaPlus id="plus" onClick={math} />
                        </button>
                        <button className="board_operator subtract-button" id="subtract" onClick={math}>
                            <FaMinus id="subtract" onClick={math} />
                        </button>
                        <button className="board_operator multiply-button" id="multiply" onClick={math}>
                            <FaTimes id="multiply2" onClick={math} />
                        </button>
                        <button className="board_operator divide-button" id="divide" onClick={math}>
                            <FaDivide id="divide" onClick={math} />
                        </button>
                        <button id="equalSign" className="board_operator equals-button" onClick={math}>
                            <FaEquals id="equalSign" onClick={math} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}