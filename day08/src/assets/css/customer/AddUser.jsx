import { useRef, useState } from "react";
const AddUser = ({ onAdd }) => {
    const [ user , setUser ] = useState({
        name:'', addr:''
    })
    const nameRef = useRef()
    const { name, addr } = user
    const changeInput = e  => {
        const { name , value } = e.target
        setUser({
            ...user ,
            [name]:value
        })
    }
    const onSubmit  = (e) => {
        e.preventDefault()
        onAdd( user )
        // onAdd( name, addr )
        setUser({
            name:'', addr:''
        })
        nameRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <h2> 고객명단 추가 </h2>
            <p>
                <label htmlFor="name">이름</label>
                <input type="text" value={name} name="name" id="name" placeholder="이름을 입력하세요" onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label htmlFor="addr">주소</label>
                <input type="text" name="addr" id="addr" value={addr} placeholder="주소를 입력하세요" onChange={changeInput} />
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};
export default AddUser;