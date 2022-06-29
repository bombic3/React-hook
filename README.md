# [ 📘 리액트를 다루는 기술 ]

---

# 8장 Hooks

```jsx
$ yarn create react-app hooks-tutorial
```

## 8.1 useState

Counter.js

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

App.js

```jsx
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

---

### 8.1.1 useState 여러 번 사용하기

- 하나의 useState 함수는 하나의 상태 값만 관리할 수 있다.
- 이름과 닉네임 input에 담아서 나타내기

Info.js

```jsx
import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
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
```

App.js

```jsx
import Info from "./Info";

function App() {
  return (
    <div>
      <Info />
    </div>
  );
}

export default App;
```

---

## 8.2 useEffect

- useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태

Info.js

```jsx
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  **// useEffect : 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  // 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태
  useEffect(() => {
    console.log('useEffect : 렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });**

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
```

App.js

```jsx
import Info from "./Info";

function App() {
  return (
    <div>
      <Info />
    </div>
  );
}

export default App;
```

---

### 8.2.1 마운트될 때만 실행하고 싶을 때

- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고
- 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어준다.

```jsx
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

  **// - useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고
  // - 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어준다.
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);**

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
```

---

### 8.2.2 특정 값이 없데이트될 때만 샐행하고 싶을 때

- useEffect 사용하여 props 안에 들어 있는 value 값이 바뀔 때만 특정 작업 수행

Info.js

```jsx
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

  **// useEffect 사용하여 props 안에 들어 있는 value 값이 바뀔 때만 특정 작업 수행
  useEffect(() => {
    console.log(name);
  }, [name]); // 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어 주어도 되고
  // props로 전달받은 값을 넣어 주어도 된다.**

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
```

```jsx
// --> 클래스형 컴포넌트라면 componentDidUpdate사용
compnentDidUpdate(prevProps, prevState) {
  if (prevProps, value !== this.props.value) {
    doSomething();
  }
}
```

---

### 8.2.3 뒷정리하기 - cleanup 함수 사용

- useEffect는 기본적으로 렌더링되고 난 직후마다 실행 됨
- 두 번째 파라미터 배열에 무엇 넣는지에 따라 실행되는 조건 달라짐
- 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면 useEffect에서 뒷정리(cleanup)함수 반환
- App 컴포넌트에서 Info 컴포넌트의 가시성을 바꿈

---

- 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면 useEffect에서 뒷정리(cleanup)함수 반환
- Info 컴포넌트가 나타날 때 콘솔에 effect 가 나타나고, 사라질 때 cleanup 나타남
- 렌더링 될 때마다 콘솔에 뒷정리함수(cleanup)함수 나타남
- 뒷정리 함수가 호출될 때 **없데이트되기 직전의 값 보여줌**

App.js

```jsx
import { useState } from 'react';
import Info from './Info';

function App () {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      **<button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}**
    </div>
  );
}
**// - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면
//    useEffect에서 뒷정리(cleanup)함수 반환
// Info 컴포넌트가 나타날 때 콘솔에 effect 가 나타나고, 사라질 때 cleanup 나타남
// 렌더링 될 때마다 콘솔에 뒷정리함수(cleanup)함수 나타남
// 뒷정리 함수가 호출될 때 없데이트되기 직전의 값 보여줌**

export default App;
```

Info.js

```jsx
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

  **// cleanup 함수 사용
  // - useEffect는 기본적으로 렌더링되고 난 직후마다 실행 됨
  // - 두 번째 파라미터 배열에 무엇 넣는지에 따라 실행되는 조건 달라짐
  // - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면
  //    useEffect에서 뒷정리(cleanup)함수 반환
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);**

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
```

---

- 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어 있는 배열 넣기

Info.js

```jsx
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

  **// 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면
  // useEffect 함수의 두 번째 파라미터에 비어 있는 배열 넣기
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanup함수 : unmount 될 때만 실행');
    };
  }, []);**

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
```

App.js

```jsx
import { useState } from 'react';
import Info from './Info';

function App () {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      **<button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}**
    </div>
  );
}
**// - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하고 싶다면
//    useEffect에서 뒷정리(cleanup)함수 반환
// Info 컴포넌트가 나타날 때 콘솔에 effect 가 나타나고, 사라질 때 cleanup 나타남
// 렌더링 될 때마다 콘솔에 뒷정리함수(cleanup)함수 나타남
// 뒷정리 함수가 호출될 때 없데이트되기 직전의 값 보여줌**

export default App;
```

---

## 8.3 useReducer

- useReducer : useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook
- 리듀서(Rreducer)는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환하는 함수이다.
- 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다.

```jsx
function reducer(state, action) {
	return {...}; // 불변성을 지키면서 업데이트한 새로운 상태를 반환
}
```

- 액션 값은 주로 다음과 같은 형태로 이루어져 있음

```jsx
{
	type: 'INCREMENT',
	// 다른 값들이 필요하다면 추가로 들어감
}
```

---

### 8.3.1 카운터 구현하기 - useReducer

- useReducer를 사용했을 때의 가장 큰 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.

CounterReducer.js

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
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
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default CounterReducer;
```

App.js

```jsx
import React from "react";
import CounterReducer from "./CounterReducer";

const App = () => {
  return (
    <div>
      <CounterReducer />
    </div>
  );
};

export default App;
```

---

### 8.3.2 useReducer로 input 인풋 상태 관리하기

- useReducer에서의 액션값을 이벤트 객체가 지니고 있는 e.target 값 자체로 사용
- 이런식으로 인풋을 관리하면 인풋이 많아도 코드 짧고 깔끔하게 유지 가능

InfoReducer.js

```jsx
import React, { useReducer } from "react";

// useReducer에서의 액션값을 이벤트 객체가 지니고 있는 e.target 값 자체로 사용
// 이런식으로 인풋을 관리하면 인풋이 많아도 코드 짧고 깔끔하게 유지 가능
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
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
```

App.js

```jsx
import React from "react";
import InfoReducer from "./InfoReducer";

const App = () => {
  return (
    <div>
      <InfoReducer />
    </div>
  );
};

export default App;
```

---

## 8.4 useMemo - 연산 최적화

- useMemo : 컴포넌트 내부에서 발생하는 연산 최적화

### useMemo 사용하여 평균값 계산하기(map() concat 사용)

- 리스트에 추가된 숫자들의 평균을 보여 주는 함수 컴포넌트 만들어보기

Average.js

```jsx
import React, { useState } from 'react';

**// 등록button을 누르지 않아도 input 안에서 내용이 수정될 때 getAverage 함수 호출됨**

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
```

App.js

```jsx
import React from "react";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <Average />
    </div>
  );
};

export default App;
```

---

### 등록button을 누르지 않아도 input 안에서 내용이 수정될 때 getAverage 함수 호출됨 ⇒ useMemo 사용하여 작업 최적화 하기

- list 배열의 내용이 바뀔 때만 getAverage 함수 호출
- 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행
- 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용

Average.js

```jsx
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

  **// useMemo사용
	// list 배열의 내용이 바뀔 때만 getAverage 함수 호출
	// 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행
  // 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
  const avg = useMemo(() => getAverage(list), [list]);**

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
        **<b>평균값:</b>{avg}**
      </div>
    </div>
  );
};

export default Average;
```

App.js

```jsx
import React from "react";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <Average />
    </div>
  );
};

export default App;
```

---

## 8.5 useCallback - 렌더링 성능 최적화

- 렌더링 성능 최적화(useMemo와 비슷)
- 만들어 놨던 함수 재사용 할 수 있음

---

### useCallback(생성하고 싶은 함수, 배열) Average 컴포넌트의 onChange/onInsert 함수 재사용하기

- 리렌더링 될 때마다 새로 만들어진 함수 사용하게 됨
- 함수 재사용하여 최적화 해주는 것이 좋음

---

- useCallback(생성하고 싶은 함수, 배열-어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 함 = 조회하는 값)
- onChange처럼 []비어있는 배열 넣으면 → 컴포넌트가 렌더링될 때 만들었던 함수 계속 재사용
- onInsert처럼 [number, list] 배열 안에 넣으면 → 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수 사용
  - 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터 안에 포함시켜 줘야 함
  - 여기선 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어줘야 함

AverageUseCallback.js

```jsx
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

  **// useCallback(생성하고 싶은 함수, 배열) hook사용하여
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
  // - 여기선 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어줘야 함**

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
```

App.js

```jsx
import React from "react";
import AverageUseCallback from "./AverageUseCallback";

const App = () => {
  return (
    <div>
      <AverageUseCallback />
    </div>
  );
};

export default App;
```

---

## 8.6 useRef
