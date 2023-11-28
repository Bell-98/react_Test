import React, { useEffect, useRef, useState } from 'react';

const EditUser = ({current,onUpdata ,setIsEdit}) => {
    const [user, setUser] =useState( current)
    const {name,addr} =user



    useEffect( () =>{
       setUser(current);
    },[current])

    const changeInput = e =>{
        const{ name ,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    } 
    const onSubmit=(e) =>{
        e.preventDefault()
        if( !name || !addr) return
        onUpdata(user)
       
        setUser({
            name:'', addr:''
        })
    }

    
    
    return (
        <form>
        <h2>고객명단 수정</h2>
        <p>
           <label htmlFor="">이름</label>
           <input type="text" name='name'  value={name} onChange={changeInput} onUpdata={onUpdata} />
        </p>
        <p>
           <label htmlFor="">주소</label>
           <input type="text" name='addr' value={addr} onChange={changeInput} />
        </p>
        <p>
           <button type='submit'>수정</button>
           <button onClick={()=>setIsEdit(false) }>취소</button>
        </p>
        
   </form>
    );
};

export default EditUser;