import React, { useCallback, useMemo, useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // useCallback(생성하고 싶은 함수, 배열) hook사용하여 
  // Average 컴포넌트의 onChange / onInsert 함수 재사용하기
  // - 리렌더링 될 때마다 새로 만들어진 함수 사용하게 됨
  // - 함수 재사용하여 최적화 해주는 것이 좋음
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  // 빈배열 -> 컴포넌트가 처음 렌더링될 때만 함수 생성
  
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);
  // number 혹은 list 가 바뀌었을 때만 함수 생성

  // - useCallback(생성하고 싶은 함수, 배열-어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 함)
  // - onChange처럼 []비어있는 배열 넣으면 → 컴포넌트가 렌더링될 때 만들었던 함수 계속 재사용
  // - onInsert처럼 [number, list] 배열 안에 넣으면 → 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수 사용
  // - 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터 안에 포함시켜 줘야 함
  // - 여기선 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어줘야 함

  // useMemo사용
	// list 배열의 내용이 바뀔 때만 getAverage 함수 호출
	// 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행
  // 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{ value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>{avg}
      </div>
    </div>
  );
};

export default AverageUseCallback;