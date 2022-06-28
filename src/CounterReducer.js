import React, { useReducer } from 'react';

function reducer (state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

// useReducer를 사용했을 때의 가장 큰 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
const CounterReducer = () => {
  // useReducer의 첫 번째 파라미터에 리듀서 함수를 넣고,
  // 두 번째 파라미터에 해당 리듀서의 기본값 넣기
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // state 값과 dispatch 함수를 받아 오는데요. 여기서 state는 현재 가리키고 있는 상태,
  // dispatch 는 액션을 발생시키는 함수이다.
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출됨
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{ state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};



export default CounterReducer;