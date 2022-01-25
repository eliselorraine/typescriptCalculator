import React from 'react';
import '../styles/Button.css'

interface Props {
    num: number | string;
    userInput: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Button: React.FC<Props> = (prop: Props) => {

    const handleClick = (e: React.MouseEvent) => {
        const clicked = e.target as Element;
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