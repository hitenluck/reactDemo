import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import InputBox from '../components/InputBox';


const MainScreen = () => {
    const [color, setColorState] = useState('Hiten');
    const [table, setNumber] = useState<any>([]);
    let colorName: string = ''
    let inputNumber: number = 0;

    const setColor = (value:number) => {
       // colorName = value;
       inputNumber = value
    }

    const onButtonClick = () => {
      for(let i= 1 ; i<=10 ; i++) {
        const value = inputNumber * i;
        table.push(value)
        setNumber([...table])
      }
    }

   
  const drawTable = () => {
      const tableElement = table.map((item: number, index: number) => {
          return(
              <h1 key={index}>{item}</h1>
          )
      })
      console.log('tableElement',tableElement)
      return tableElement;
  }

  console.log('table syae', table)
    
    return (
        <div style={{backgroundColor: color}}>
          {/* <InputBox setInputText={setUserText} inpuText={''} /> */}
          <button className='button' onClick={onButtonClick}>{'Click me'}</button>
          <InputBox setInputText={setColor} />
          {drawTable()}
        </div>
    )
}

export default MainScreen;