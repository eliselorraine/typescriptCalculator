import React from 'react';
import '../styles/Board.css';
import Button from './Button';
import { useState } from 'react';
import { FaDivide, FaMinus, FaTimes, FaPlus, FaEquals } from 'react-icons/fa';

export const Board: React.FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
    const [input, setInput] = useState<string>('');
    const [operator, setOperator] = useState<string>('');

    const calc = (op: string): number | string => {
        const expression = input.split(' ');
        const a = parseFloat(expression[0]);
        const b = parseFloat(expression[2]);
        let answer: number | string = 'ERROR';
        switch (op) {
            case '+': {
                if(isNaN(a + b)) {
                    return answer;
                }
                answer = a + b;
                break;
            }
            case '-': {
                if(isNaN(a - b)) {
                    return answer;
                }
                answer = a - b;
                break;
            }
            case '*': {
                if(isNaN(a * b)) {
                    return answer;
                }
                answer = a * b;
                break;
            }
            case '/': {
                if(isNaN(a / b)) {
                    return answer;
                }
                answer = a / b;
                break;
            } 
            
        }
        return answer;
    }

    const math = (e: React.MouseEvent) => {
        const clicked = e.target as Element;
        if(operator !== '' && 
           clicked.id !== "equalSign" &&
           clicked.id !== "clear") return;
        switch (clicked.id) {
            case "plus": {
                setInput(input + ' + ');
                setOperator('+');
                break;
            }
            case "subtract": {
                if(input.length > 0) {
                    setInput(input + ' - ');
                    setOperator('-');
                } else {
                    setInput('-');
                }
                break;
            }
            case "multiply": {
                setInput(input + ' * ');
                setOperator('*');
                break;
            }
            case "divide": {
                setInput(input + ' / ');
                setOperator('/');
                break;
            }
            case "equalSign": {
                const answer = calc(operator);
                setInput(input + ' = ' + answer);
                break;
            }
            case "clear": {
                setInput('');
                setOperator('');
            }
        }
    }
    
    return (
        <div>
            <div className="board">
                <div className="board_screen">
                    <input readOnly className="screen_user-input" value={input} onChange={() => console.log('')} />
                </div>
                <div className="board_container">
                    <div className="board_number-container">
                        <button id="clear" className="clear-button" onClick={math}>
                            AC
                        </button>
                        {numbers.map(element => {
                            return <Button 
                            num={element} 
                            userInput={input} 
                            setInput={setInput} 
                            key={Math.floor(Math.random() * 100000)} />
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
    // switch(expression[1]) {
    //     case '+': {
    //         answer = (number2 + number2).toString();
    //         setInput(answer);
    //         break;
    //     }
    //     case '-': {
    //         answer = (number2 - number2).toString();
    //         setInput(answer);
    //         break;
    //     }
    //     case '*': {
    //         answer = (number2 * number2).toString();
    //         setInput(answer);
    //         break;
    //     }
    //     case '/': {
    //         answer = (number2 / number2).toString();
    //         setInput(answer);
    //         break;
    //     }
    // }