import React from 'react';

const Test7 = () => {
    return (
        <div>
            <p>
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">all</label>
            </p>
            <p>
                <input type="checkbox" name="chk1" id="chk1"value="수박"  />
                <label htmlFor="chk1">수박</label>
            </p>
            <p>
                <input type="checkbox" name="chk2" id="chk2" value="딸기" />
                <label htmlFor="chk2">딸기</label>
            </p>
            <p>
                <input type="checkbox" name="chk3" id="chk3"value="포도"  />
                <label htmlFor="chk3">포도</label>
            </p>
            <p>
                <input type="checkbox" name="chk4" id="chk4"value="토마토"  />
                <label htmlFor="chk4">토마토</label>
            </p>
            <p>
                <input type="checkbox" name="chk5" id="chk5" value="키위" />
                <label htmlFor="chk5">키위</label>
            </p>
            
        </div>
    );
};

export default Test7;