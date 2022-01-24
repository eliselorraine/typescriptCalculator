import React from 'react';
import '../styles/Board.css';
import Button from './Button';
import { useState } from 'react';

export const Board: React.FC = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [input, setInput] = useState<string>('');

    return (
        <div>
            <div className="board">
                <div className="board_screen">
                    <input className="screen_user-input" value={input} onChange={() => console.log(input)}/>
                </div>
                <div className="board_button-container">
                    {numbers.map(element => {
                        return <Button num={element} setInput={setInput} key={Math.floor(Math.random() + 10000)}/>
                    })}
                </div>
            </div>
        </div>
    )
}