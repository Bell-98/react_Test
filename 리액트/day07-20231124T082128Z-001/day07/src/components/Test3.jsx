import React, { useState } from 'react';
import Test3sub from './Test3sub';

const Test3 = () => {
    const [ isShow, setIsISShow] = useState( false)
    const onToggle =() => {
        setIsISShow( !isShow)

    }
    return (
        <div>

         <p> 
            Test3Sub 보이기와 숨기기
            <button onClick={onToggle}>
                {isShow ? '숨기기' :'보이기'}
            </button>
            
         </p>
         
             <hr/>
             {
                isShow && <Test3sub />
             }
            
            
        </div>
    );
};

export default Test3;