import React, {useReducer} from 'react';

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('해당하는 ACTION 이 없다');
    }
}

function Counter(){

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
       dispatch({
           type : 'INCREMENT',
       });
    }
    const onDecrease = () => {
        dispatch({
            type : 'DECREMENT',
        });
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
