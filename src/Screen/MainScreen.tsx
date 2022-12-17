import React, { useState } from 'react'
import Button from '../components/Button';


const MainScreen = () => {
    const [number, setNumber] = useState(0);
    //setNumber: is a method
    // number: is a state variable

    const incrementNumber = () => {
        setNumber(number + 1)
    }

    const substraction = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <Button buttonText="Addition" onButtonClick={incrementNumber} />
            <Button buttonText="Substraction" onButtonClick={substraction} />
             <h3>{number}</h3>
        </div>
    )
}

export default MainScreen;