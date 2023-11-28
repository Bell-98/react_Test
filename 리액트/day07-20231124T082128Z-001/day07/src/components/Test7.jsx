import { useState } from "react";

const menuList =[
    {id:1, name:'chk1', text:'수박', isChk:false},
    {id:2, name:'chk2', text:'딸기', isChk:false},
    {id:3, name:'chk3', text:'토마토', isChk:false},
    {id:4, name:'chk4', text:'배', isChk:false},
    {id:5, name:'chk5', text:'사과', isChk:false},
]

const Test7 = () => {
    const [data, setDate]=useState( menuList )
    const changeInput =(e)=> {
        const{ name, checked}=e.target
        if( name ==='all') {
            setDate( data.map(item=> {
                return{
                    ...item,
                    isChk:checked
                }
            }))
            

        }else{
            setDate( data.map( item=> item.name ===name ? {...item, isChk:true}0))
        }   
    }
  
    return (
        <div>
            <p>
                <input type="checkbox" name="all" id="all"value={"전체"} onChange={changeInput} checked={
                    data.filter( item =>item.isChk !== true).length < 1 } />
                <label htmlFor="all"  >전체동의</label>
            </p>
             
            <hr/>
           
           
                {
                    data.map( item => <p key={item.id}>
                        <input type="checkbox" name={item.name} id={item.name} value={item.text}checked={item.isChk} onChange={changeInput}  />
                        <label htmlFor="chk1">{item.text}</label>
                    </p>)
                }
           
          
        </div>
    );
};

export default Test7;