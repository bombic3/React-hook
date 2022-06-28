import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect : 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  // 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태
  // useEffect(() => {
  //   console.log('useEffect : 렌더링이 완료되었습니다!');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  // - useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고
  // - 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어준다.
  // useEffect(() => {
  //   console.log('마운트될 때만 실행됩니다.');
  // }, []);

  // useEffect 사용하여 props 안에 들어 있는 value 값이 바뀔 때만 특정 작업 수행
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  // 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어 주어도 되고
  // props로 전달받은 값을 넣어 주어도 된다.
  // --> 클래스형 컴포넌트라면 componentDidUpdate사용
  // compnentDidUpdate(prevProps, prevState) {
  //   if (prevProps, value !== this.props.value) {
  //     doSomething();
  //   }
  // }

  // cleanup 함수 사용
  // - useEffect는 기본적으로 렌더링되고 난 직후마다 실행 됨
  // - 두 번째 파라미터 배열에 무엇 넣는지에 따라 실행되는 조건 달라짐
  // - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면
  //    useEffect에서 뒷정리(cleanup)함수 반환
  // useEffect(() => {
  //   console.log('effect');
  //   console.log(name);
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // }, [name]);

  // 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면
  // useEffect 함수의 두 번째 파라미터에 비어 있는 배열 넣기
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanup함수 : unmount 될 때만 실행');
    };
  }, []);



  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info;