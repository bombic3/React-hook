import React, { useReducer } from 'react';

// useReducer에서의 액션값을 이벤트 객체가 지니고 있는 e.target 값 자체로 사용
// 이런식으로 인풋을 관리하면 인풋이 많아도 코드 짧고 깔끔하게 유지 가능
function reducer (state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoReducer;