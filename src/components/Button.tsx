import React from 'react';
import '../styles/Button.css'

interface Props {
    num: number | string;
    userInput: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Button: React.FC<Props> = (prop: Props) => {
    const error = (): void => {
        if(prop.userInput.length >= 5) {
            prop.setInput('WHY');
            return;
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        if (prop.userInput === 'ERROR') {
        }
        const clicked = e.target as Element;
        console.log(prop.userInput.split(' '));
        prop.setInput(prop.userInput + clicked.innerHTML);
    }

    return (
        <div className="button">
            <button onClick={handleClick} className="number-button">
                {prop.num}
            </button>
        </div>

    )
}

export default Button;