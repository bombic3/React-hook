import { useState } from 'react';
import Info from './Info';

function App () {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}
// - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면
//    useEffect에서 뒷정리(cleanup)함수 반환
// Info 컴포넌트가 나타날 때 콘솔에 effect 가 나타나고, 사라질 때 cleanup 나타남
// 렌더링 될 때마다 콘솔에 뒷정리함수(cleanup)함수 나타남
// 뒷정리 함수가 호출될 때 없데이트되기 직전의 값 보여줌

export default App;
