import React, {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);
    // number의 기본 값은 0, 값을 넣는 함수는 setNumber로 하겠다.
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }


    return (
        <div>
            {/* 이벤트 실행시 호출하고 싶은 함수를 바인딩해준다. 함수를 바인딩해주는 것이지 호출하는 것이 아니기때문에 onIncrease()로 해주면 안된다. */}
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
