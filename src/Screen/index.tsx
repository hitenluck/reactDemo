import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import InputBox from '../components/InputBox';

const students = [{
    name: 'hiten',
    marks: 200,
    rno: 120,
    std: 10
},
{
    name: 'hiten',
    marks: 200,
    rno: 120,
    std: 10
},
{
    name: 'hiten',
    marks: 200,
    rno: 120,
    std: 9
},
{
    name: 'hiten',
    marks: 200,
    rno: 120,
    std: 8
}]

const MainScreen = () => {

    const [number , setNumber] = useState(0)
    const [number2 , setNumber2] = useState(0)

    useEffect(() => {
        console.log('hey component will mount')  
    })

    useEffect(() => {
        console.log('hey component Did mount')  
    },[])

    useEffect(() => {
        console.log('hey component Did update')  
    },[number])
    

    return (
        <div>

            <Button onButtonClick={() => setNumber(number + 1)} buttonText='clickme' />
            <Button onButtonClick={() => setNumber2(number2 + 1)} buttonText='clickme2' />
            <h2>{number}</h2>
            <h2>{number2}</h2>
         
        </div>
    )
}

export default MainScreen;