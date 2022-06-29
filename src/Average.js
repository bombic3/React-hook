import React, { useState } from 'react';

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
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

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
        <b>평균값:</b>{getAverage(list)}
      </div>
    </div>
  );
};

export default Average;