import React, { useEffect, useState } from 'react';

const Test3sub = () => {
    const [ x, setX] =useState(0)
    const [ y, setY] =useState(0)
    const onMove =(e) =>{
        console.log('onMove')
        setX( e.clientX)
        setY( e.clientY)
    }

    useEffect( () =>{
        console.log('useEffect')
        window.addEventListener('mousemove', onMove)
        //
        return()=> {
            console.log('뒷정리')
            window.removeEventListener('mousemove',onMove)
        }
    },[])


    }
    return (
        <div>
            <h2>마우스 좌표</h2>
            <h2 style={{border:'1px solid #000',padding:5, textAlign:'center' , fontSize:20}}> x:1111, y:22222</h2>
            x: {x}, y:{y}
         </div>
    );


export default Test3sub;