import React, { useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    const [ isShow, setIsShow] =useState(true)
    const [ isMsg, setIsMsg] =useState(true)
    const [ msg, setMsg] =useState('hi')

    const onToggle =() => {
        setIsShow( !isShow)
    }
    const onMsg= ( txt) => {
        setMsg( txt)
        setMsg( !msg)
    }

    return (
        <div>
            <button onClick={onToggle}>{ isShow? "숨기기":"보이기"}</button>
            <hr/>
            <p>
                <button onClick={() => onMsg('안녕 철수') }>철수인사</button>
                <button onClick={() => onMsg('안녕 영희')}>영희인사</button>
            </p>
            <hr/>
           {
            isShow &&  <Test6Sub msg={msg} isMsg ={isMsg} setIsMsg={setIsMsg} />
           }
            
        </div>
    );
};

export default Test6;