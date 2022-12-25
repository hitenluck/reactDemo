import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import InputBox from '../components/InputBox';



const MainScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPasswordText] = useState('');

    // First and then Always when state changes(means when state re-renders)
    useEffect(() => {
        console.log('parent useEffect componentWillMount')
    })

    //Only once when component mounts , means only first time
    useEffect(() => {
        console.log('parent useEffect componentDidMount')
    },[])

    // call when passing state/props values changes
    useEffect(()=> {
        if (userName.includes('@')) {
            alert('valid')
        }
    },[userName]) //will trigger based on changes of these passing variables  

    const setUserText = (value: string) => {
        if (value.includes('@')) {
            alert('valid')
        }
        //setUserName(value)
    }

    const setPassword = (password: string) => {
        setPasswordText(password)
    }

    return (
        <div>
          <InputBox setInputText={setUserText} inpuText={userName} />
          <InputBox setInputText={setPassword} inpuText={userName} />
        </div>
    )
}

export default MainScreen;