import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count, setCount ] = useState(0)
    useEffect(() =>{
        console.log('useEffect')
        const timer =setInterval(()=>{
        console.log('setInterval')
        setCount( state => state + 1)
        // setCount( 이전값 => 이전값 +1)
        // setCount( 이전값 => { return 이전값 + 1})
        },1000)

        // 뒷정리
        return() => {
            clearInterval( timer)
        }

    },[])
    return (
        <div>
            <h1 style={{fontSize:50}}>카운트 : </h1>
            <p>1초 마다 1씩 증가</p>
            
            
        </div>
    );
};

export default Test4;