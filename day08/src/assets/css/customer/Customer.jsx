import './style.scss'
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import { useRef, useState } from 'react';
const dataList = [
    {id:1, name:'김철수', addr:'서울'},
    {id:2, name:'홍길동', addr:'부산'},
    {id:3, name:'강호동', addr:'울산'},
    {id:4, name:'유재석', addr:'제주'},
]
const Customer = () => {
    const [ data , setData ] = useState( dataList )
    const [isEdit, setIsEdit] =useState(false)
    const [current,setCurrent] =useState({})


    const no  = useRef( data.length + 1 )
    //추가
    const onAdd  = ( user )  => {
        user.id = no.current++
        setData([
            ...data ,
            user
        ])
    }
    // 삭제
    const onDel = ( id) =>{
        setData( data.filter( item => item.id !==id))
    }

    // 수정

    const onEdit = () => {
       setIsEdit( true)
    }
    // 내용수정

    const onUpdata =( user ) => {
        setData( data.map ( item => item.id === user.id ? { } : item ))
        setIsEdit(false)
    }

    return (
        <div className="Customer">
            {
                isEdit ?<EditUser current={current} onUpdata={onUpdata} setIsEdit={setIsEdit} /> :
                <AddUser onAdd={onAdd} />

            }
           
          
            <ListUser data={data} onDel={onDel} onEdit={onEdit}  />
        </div>
    );
};
export default Customer;

/* 
 1. 명단추가
 2. 명단수정, 삭제
*/