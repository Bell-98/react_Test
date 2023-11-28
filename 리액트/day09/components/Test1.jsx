import React, { useState } from 'react';

const Test1 = () => {
 const [ color, setColor ]= useState('yellow')

 const cahngeInput = e =>{
    const { value } =e.target
    setColor( value)
 }


    return (
        <div>
            <div style={{width:500, height:100,
                    background:'pink', margin:'auto' ,
                    lineHeight:'100px', textAlign:'center' ,fontSize:50 }}>
                 xxx 
            </div>
            <select onChange={cahngeInput}>
                <option> == 컬러선택 </option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="skyblue">skyblue</option>    
            </select>
        </div>
    );
};

export default Test1;