import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [ count, setCount] =useState(1)
    const ref1= useRef()
    const ref2 = useRef()


    const increment =() => {
        
        // setCount( count + 1)
     /*    setCount( 매개변수 => {
            return 값
        }) 
        return 값은 => 상태데이터 count변경이 된다
        */

        setCount( z =>{
            return z + 2
        })
        ref1.current.style.backgroundColor ='pink'
        ref1.current.style.fontSize ='40px'
        
    }
    const decrement =() => { 
        // setCount( count - 1)

        // setCount( count => count +1)
        setCount( state => state + 1)
        ref2.current.style.backgroundColor ='skyblue'
        ref2.current.style.fontSize ='50px'
    }

 
    // 처음에 한번실행, 상태값이 업데이트 될때마다 실행
/* 
    useEffect(() => {
        console.log('useEffect')
        ref1.current.style.backgroundColor ='hotpink'
        ref1.current.style.fontSize ='20px'
        ref1.current.style.marginBottom ='20px'

        ref2.current.style.backgroundColor ='tomato'
        ref2.current.style.fontSize ='20px'
        ref2.current.style.marginBottom ='20px'
    },[]) */

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        ref1.current.style.backgroundColor ='hotpink'
        ref1.current.style.fontSize ='20px'
        ref1.current.style.marginBottom ='20px'

        ref2.current.style.backgroundColor ='tomato'
        ref2.current.style.fontSize ='20px'
        ref2.current.style.marginBottom ='20px'
        return() => {
            console.log('뒷정리')
        }
    },[count])

    return (
        <div>
            <h2 ref={ref1} >카운트 :{count} </h2>
            <h2 ref={ref2} > useEffect, useLayoutEffect{count} </h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Test2;


/* 
 useEffect
 함수 컴포넌트에서 side effect를 수행할 수 있습니다.
 side effect : 부수효과
               함수의 결과를 반환하는것 외에 다른일을 하는것을 말한다

사용범위
데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects입니다.

1.frops를 받아서 갱신(업데이트)
2.외부 데이터 api( 비동기 통신 ) **
3.시간( setTimeout , setInterval)
4.외부 라이브러리 사용시 



정리(clean-up)
정리(clean-up)가 필요하지 않은 side effect를 보았지만, 
정리(clean-up)가 필요한 effect도 있습니다. ( 시간 ) : 메모리 누수발생

외부 데이터에 구독(subscription)을 설정:
이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요합니다. 
return() => {

}

-useEffect : 화면에 그려진 ( 렌더링 ) 후 실행
-useLayoutEffect : 화면에 그려지기 전 실행


보통 useLayoutEffect useEffect에 문제가 생겼을때 사용한다

문법
useEffct(setup, dependencies?)
useEffct(콜백함수, [의존값])

1. 처음 실행했을때
2. 업데이트 되었을때
3. 종료, 로딩이 끝났을때
위 3개를 하나로 합쳐서 만들어진것이 useEffect


형식) : 추천하지 않는다 - 한번만 실행 / 업데이트 할때마다 실행
useEffect(()=>{
    실행문
})

형식2 ) ** 한번만 실행
useEffect(()=>{
    실행문
},[])

형식3) ** 한번만 실행, state , props 변경될때마다 update 실행
                               보통은 props 많이 사용한다
useEffect(()=>{
    실행문

},[state , props])

형식4 ) 예) 시간처리할때 외 종료시에도 사용
useEffect( () =>{
    실행문

    뒷자리
    return () => {
        정리 내용
        타이머 제거
    }
}, [props])

*/