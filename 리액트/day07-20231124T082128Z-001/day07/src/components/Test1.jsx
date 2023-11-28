import { AiFillCalculator } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";

const Test1 = () => {
    return (
        <div>
           <h1>아이콘 사용하기</h1>
           <p>
            아이콘
            <AiFillCalculator/>
           </p>
           <i style={{color:'pink', fontSize:50}}>
            <AiFillCalculator />
           </i>
           <p>
           <IoIosAirplane />
           </p>
           <i className="xi-home-o"></i>
        </div>
    );
};

export default Test1;