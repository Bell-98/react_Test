import React, { useState } from 'react';

const dataList=[
    {id:1 , text:'홍길동' , addr:'서울'},
    {id:2 , text:'강호동' , addr:'전주'},
    {id:3 , text:'김철수' , addr:'인천'},
    {id:4 , text:'임수철' , addr:'경기'},
    {id:5 , text:'유재석' , addr:'울산'},
    {id:6 , text:'송혜교' , addr:'부산'},
]
const Test2 = () => {
    const [ data, setData ] = useState ( dataList)
    const onName = () => {
        // 정렬은 원본바뀐다
        setData( [...data].sort((a, b)=> a.text > b.text ? 1 : -1))
    }
    return (
        <div>
            <p>
                <button onClick={onName}>이름</button>
                <button>주소</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id}/{ item.text}/{ item.addr}
                    </li>)
                }
            </ul>
            
        </div>
    );
};

export default Test2;