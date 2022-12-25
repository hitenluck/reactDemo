import React, { useState } from 'react'

//Function component
const InputBox = (props: any) => {

    const { setInputText, inpuText } = props;
    return (
        <div>
           <input onChange={(event) => setInputText(event.target.value)}  />
           <h2>{inpuText}</h2>
        </div>
    )
}

export default InputBox;