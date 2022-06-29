import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseRef = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  // useRef
  // - 함수 컴포넌트에서 ref 쉽게 사용할 수 있게 함
  // - 등록 button 눌렀을 때 포커스 input으로 넘어가도록 코드 작성
  // - useRef 사용하여 ref 설정하면 useRef 를 통해 만든 객체 안의
  //    current 값이 실제 엘리먼트를 가리킴
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
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

export default AverageUseRef;