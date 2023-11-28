
const dataList=[
    {id:1 , text:'홍길동' , addr:'서울'},
    {id:2 , text:'강호동' , addr:'전주'},
    {id:3 , text:'김철수' , addr:'인천'},
    {id:4 , text:'임수철' , addr:'경기'},
    {id:5 , text:'유재석' , addr:'울산'},
    {id:6 , text:'송혜교' , addr:'부산'},
]

const Test3 = () => {
    const [ data, setData ] = useState ( dataList)
    
  
    const cahngeInput = e =>{
        const { value } =e.target
            // 제목텍스트 정렬
            setData([...data].sort((a, b)=>a(value) > b[value]? 1 : -1 ))
        
     }
    return (
        <div>
               <select onChange={cahngeInput}>
                <option> == 컬러선택 </option>
                <option value="text">이름</option>
                <option value="addr">주소</option>
            </select>
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

export default Test3;