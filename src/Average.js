import React, { useMemo, useState } from 'react';

// 등록button을 누르지 않아도 input 안에서 내용이 수정될 때 getAverage 함수 호출됨

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  // concat → 새로운 배열 생성 후 이를 새로운 상태로 설정
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  // useMemo사용
	// list 배열의 내용이 바뀔 때만 getAverage 함수 호출
	// 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행
  // 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
  const avg = useMemo(() => getAverage(list), [list]);

  // -------map()함수 복습---------
  // arr.map(callback, [ thisArg ]) : 기존 배열로 새로운 배열을 만듦
  // callback : 새로운 배열의 요소를 생성하는 함수
  // thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스
  // 고유값 없을 때만 index 사용.
  // index를 key로 사용하면 배열이 변경될 때 효울적으로 리렌더링하지 못 함
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
        {/* <b>평균값:</b>{getAverage(list)} */}
        <b>평균값:</b>{avg}
      </div>
    </div>
  );
};

export default Average;