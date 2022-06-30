import { useReducer } from 'react';
// ## seReducer
// - useReducer : useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook
// - 리듀서(Rreducer)는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환하는 함수이다.
// - 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다.
function reducer (state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

// useReducer에서의 액션값을 이벤트 객체가 지니고 있는 e.target 값 자체로 사용
// 이런식으로 인풋을 관리하면 인풋이 많아도 코드 짧고 깔끔하게 유지 가능

// function reducer (state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

export default function useInputs (initialForm) {
  // useReducer의 첫 번째 파라미터에 리듀서 함수를 넣고,
  // 두 번째 파라미터에 해당 리듀서의 기본값 넣기 (이니셜폼?)
  const [state, dispatch] = useReducer(reducer, initialForm);
  // state 값과 dispatch 함수를 받아 오는데요. 여기서 state는 현재 가리키고 있는 상태,
  // dispatch 는 액션을 발생시키는 함수이다.
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출됨
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
}

  