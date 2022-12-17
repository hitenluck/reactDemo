import React from 'react'
import '../components/Button.css'

//Function component
const Button = (props: any) => {
    const { buttonText, onButtonClick } = props;
    return (
        <div>
            <button className='button' onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

export default Button;