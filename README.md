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
