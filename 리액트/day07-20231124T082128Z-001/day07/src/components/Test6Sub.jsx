import { useEffect } from "react";


const Test6Sub = ({msg,isMsg, setIsMsg}) => {
    useEffect(() => {
        const timer =setTimeout( () =>{
            setIsMsg(false)
        }, 3000)
        return() => {
            clearTimeout(timer)
        }
    },[isMsg])
   
    return (
        <>
        {
            isMsg &&
            <h2 style={{border:'2px solid #000', padding:20,fontSize:20,textAlign:'center',margin:'40px auto'}}> 인사:{msg} </h2>
            
        }
       
        </>
    );
};

export default Test6Sub;