# [ย ๐ย ๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์  ]

---

# 8์ฅ Hooks

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
        ํ์ฌ ์นด์ดํฐ ๊ฐ์ <b>{value}</b>์๋๋ค.
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

### 8.1.1 useState ์ฌ๋ฌ ๋ฒ ์ฌ์ฉํ๊ธฐ

- ํ๋์ useState ํจ์๋ ํ๋์ ์ํ ๊ฐ๋ง ๊ด๋ฆฌํ  ์ ์๋ค.
- ์ด๋ฆ๊ณผ ๋๋ค์ input์ ๋ด์์ ๋ํ๋ด๊ธฐ

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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
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

- useEffect๋ ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋๋ง๋ค ํน์  ์์์ ์ํํ๋๋ก ์ค์ ํ  ์ ์๋ Hook
- ํด๋์คํ ์ปดํฌ๋ํธ์ componentDidMount์ componentDidUpdate๋ฅผ ํฉ์น ํํ

Info.js

```jsx
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  **// useEffect : ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋๋ง๋ค ํน์  ์์์ ์ํํ๋๋ก ์ค์ ํ  ์ ์๋ Hook
  // ํด๋์คํ ์ปดํฌ๋ํธ์ componentDidMount์ componentDidUpdate๋ฅผ ํฉ์น ํํ
  useEffect(() => {
    console.log('useEffect : ๋ ๋๋ง์ด ์๋ฃ๋์์ต๋๋ค!');
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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
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

### 8.2.1 ๋ง์ดํธ๋  ๋๋ง ์คํํ๊ณ  ์ถ์ ๋

- useEffect์์ ์ค์ ํ ํจ์๋ฅผ ์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋งจ ์ฒ์ ๋ ๋๋ง๋  ๋๋ง ์คํํ๊ณ 
- ์๋ฐ์ดํธ๋  ๋๋ ์คํํ์ง ์์ผ๋ ค๋ฉด ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ก ๋น์ด ์๋ ๋ฐฐ์ด์ ๋ฃ์ด์ค๋ค.

```jsx
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect : ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋๋ง๋ค ํน์  ์์์ ์ํํ๋๋ก ์ค์ ํ  ์ ์๋ Hook
  // ํด๋์คํ ์ปดํฌ๋ํธ์ componentDidMount์ componentDidUpdate๋ฅผ ํฉ์น ํํ
  // useEffect(() => {
  //   console.log('useEffect : ๋ ๋๋ง์ด ์๋ฃ๋์์ต๋๋ค!');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  **// - useEffect์์ ์ค์ ํ ํจ์๋ฅผ ์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋งจ ์ฒ์ ๋ ๋๋ง๋  ๋๋ง ์คํํ๊ณ 
  // - ์๋ฐ์ดํธ๋  ๋๋ ์คํํ์ง ์์ผ๋ ค๋ฉด ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ก ๋น์ด ์๋ ๋ฐฐ์ด์ ๋ฃ์ด์ค๋ค.
  useEffect(() => {
    console.log('๋ง์ดํธ๋  ๋๋ง ์คํ๋ฉ๋๋ค.');
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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

---

### 8.2.2 ํน์  ๊ฐ์ด ์๋ฐ์ดํธ๋  ๋๋ง ์ํํ๊ณ  ์ถ์ ๋

- useEffect ์ฌ์ฉํ์ฌ props ์์ ๋ค์ด ์๋ value ๊ฐ์ด ๋ฐ๋ ๋๋ง ํน์  ์์ ์ํ

Info.js

```jsx
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect : ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋๋ง๋ค ํน์  ์์์ ์ํํ๋๋ก ์ค์ ํ  ์ ์๋ Hook
  // ํด๋์คํ ์ปดํฌ๋ํธ์ componentDidMount์ componentDidUpdate๋ฅผ ํฉ์น ํํ
  // useEffect(() => {
  //   console.log('useEffect : ๋ ๋๋ง์ด ์๋ฃ๋์์ต๋๋ค!');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  // - useEffect์์ ์ค์ ํ ํจ์๋ฅผ ์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋งจ ์ฒ์ ๋ ๋๋ง๋  ๋๋ง ์คํํ๊ณ 
  // - ์๋ฐ์ดํธ๋  ๋๋ ์คํํ์ง ์์ผ๋ ค๋ฉด ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ก ๋น์ด ์๋ ๋ฐฐ์ด์ ๋ฃ์ด์ค๋ค.
  // useEffect(() => {
  //   console.log('๋ง์ดํธ๋  ๋๋ง ์คํ๋ฉ๋๋ค.');
  // }, []);

  **// useEffect ์ฌ์ฉํ์ฌ props ์์ ๋ค์ด ์๋ value ๊ฐ์ด ๋ฐ๋ ๋๋ง ํน์  ์์ ์ํ
  useEffect(() => {
    console.log(name);
  }, [name]); // ๋ฐฐ์ด ์์๋ useState๋ฅผ ํตํด ๊ด๋ฆฌํ๊ณ  ์๋ ์ํ๋ฅผ ๋ฃ์ด ์ฃผ์ด๋ ๋๊ณ 
  // props๋ก ์ ๋ฌ๋ฐ์ ๊ฐ์ ๋ฃ์ด ์ฃผ์ด๋ ๋๋ค.**

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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

```jsx
// --> ํด๋์คํ ์ปดํฌ๋ํธ๋ผ๋ฉด componentDidUpdate์ฌ์ฉ
compnentDidUpdate(prevProps, prevState) {
  if (prevProps, value !== this.props.value) {
    doSomething();
  }
}
```

---

### 8.2.3 ๋ท์ ๋ฆฌํ๊ธฐ - cleanup ํจ์ ์ฌ์ฉ

- useEffect๋ ๊ธฐ๋ณธ์ ์ผ๋ก ๋ ๋๋ง๋๊ณ  ๋ ์งํ๋ง๋ค ์คํ ๋จ
- ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ ๋ฐฐ์ด์ ๋ฌด์ ๋ฃ๋์ง์ ๋ฐ๋ผ ์คํ๋๋ ์กฐ๊ฑด ๋ฌ๋ผ์ง
- ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋๊ธฐ ์ ์ด๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ์ด๋ค ์์ ์ํํ๊ณ  ์ถ๋ค๋ฉด useEffect์์ ๋ท์ ๋ฆฌ(cleanup)ํจ์ ๋ฐํ
- App ์ปดํฌ๋ํธ์์ Info ์ปดํฌ๋ํธ์ ๊ฐ์์ฑ์ ๋ฐ๊ฟ

---

- ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋๊ธฐ ์ ์ด๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ์ด๋ค ์์ ์ํํ๊ณ  ์ถ๋ค๋ฉด useEffect์์ ๋ท์ ๋ฆฌ(cleanup)ํจ์ ๋ฐํ
- Info ์ปดํฌ๋ํธ๊ฐ ๋ํ๋  ๋ ์ฝ์์ effect ๊ฐ ๋ํ๋๊ณ , ์ฌ๋ผ์ง ๋ cleanup ๋ํ๋จ
- ๋ ๋๋ง ๋  ๋๋ง๋ค ์ฝ์์ ๋ท์ ๋ฆฌํจ์(cleanup)ํจ์ ๋ํ๋จ
- ๋ท์ ๋ฆฌ ํจ์๊ฐ ํธ์ถ๋  ๋ **์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ๊ฐ ๋ณด์ฌ์ค**

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
        {visible ? '์จ๊ธฐ๊ธฐ' : '๋ณด์ด๊ธฐ'}
      </button>
      <hr />
      {visible && <Info />}**
    </div>
  );
}
**// - ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋๊ธฐ ์ ์ด๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ์ด๋ค ์์ ์ํํ๊ณ  ์ถ๋ค๋ฉด
//    useEffect์์ ๋ท์ ๋ฆฌ(cleanup)ํจ์ ๋ฐํ
// Info ์ปดํฌ๋ํธ๊ฐ ๋ํ๋  ๋ ์ฝ์์ effect ๊ฐ ๋ํ๋๊ณ , ์ฌ๋ผ์ง ๋ cleanup ๋ํ๋จ
// ๋ ๋๋ง ๋  ๋๋ง๋ค ์ฝ์์ ๋ท์ ๋ฆฌํจ์(cleanup)ํจ์ ๋ํ๋จ
// ๋ท์ ๋ฆฌ ํจ์๊ฐ ํธ์ถ๋  ๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ๊ฐ ๋ณด์ฌ์ค**

export default App;
```

Info.js

```jsx
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect : ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋๋ง๋ค ํน์  ์์์ ์ํํ๋๋ก ์ค์ ํ  ์ ์๋ Hook
  // ํด๋์คํ ์ปดํฌ๋ํธ์ componentDidMount์ componentDidUpdate๋ฅผ ํฉ์น ํํ
  // useEffect(() => {
  //   console.log('useEffect : ๋ ๋๋ง์ด ์๋ฃ๋์์ต๋๋ค!');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  // - useEffect์์ ์ค์ ํ ํจ์๋ฅผ ์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋งจ ์ฒ์ ๋ ๋๋ง๋  ๋๋ง ์คํํ๊ณ 
  // - ์๋ฐ์ดํธ๋  ๋๋ ์คํํ์ง ์์ผ๋ ค๋ฉด ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ก ๋น์ด ์๋ ๋ฐฐ์ด์ ๋ฃ์ด์ค๋ค.
  // useEffect(() => {
  //   console.log('๋ง์ดํธ๋  ๋๋ง ์คํ๋ฉ๋๋ค.');
  // }, []);

  // useEffect ์ฌ์ฉํ์ฌ props ์์ ๋ค์ด ์๋ value ๊ฐ์ด ๋ฐ๋ ๋๋ง ํน์  ์์ ์ํ
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  // ๋ฐฐ์ด ์์๋ useState๋ฅผ ํตํด ๊ด๋ฆฌํ๊ณ  ์๋ ์ํ๋ฅผ ๋ฃ์ด ์ฃผ์ด๋ ๋๊ณ 
  // props๋ก ์ ๋ฌ๋ฐ์ ๊ฐ์ ๋ฃ์ด ์ฃผ์ด๋ ๋๋ค.
  // --> ํด๋์คํ ์ปดํฌ๋ํธ๋ผ๋ฉด componentDidUpdate์ฌ์ฉ
  // compnentDidUpdate(prevProps, prevState) {
  //   if (prevProps, value !== this.props.value) {
  //     doSomething();
  //   }
  // }

  **// cleanup ํจ์ ์ฌ์ฉ
  // - useEffect๋ ๊ธฐ๋ณธ์ ์ผ๋ก ๋ ๋๋ง๋๊ณ  ๋ ์งํ๋ง๋ค ์คํ ๋จ
  // - ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ ๋ฐฐ์ด์ ๋ฌด์ ๋ฃ๋์ง์ ๋ฐ๋ผ ์คํ๋๋ ์กฐ๊ฑด ๋ฌ๋ผ์ง
  // - ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋๊ธฐ ์ ์ด๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ์ด๋ค ์์ ์ํํ๊ณ  ์ถ๋ค๋ฉด
  //    useEffect์์ ๋ท์ ๋ฆฌ(cleanup)ํจ์ ๋ฐํ
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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

---

- ์ค์ง ์ธ๋ง์ดํธ๋  ๋๋ง ๋ท์ ๋ฆฌ ํจ์๋ฅผ ํธ์ถํ๊ณ  ์ถ๋ค๋ฉด useEffect ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ๋น์ด ์๋ ๋ฐฐ์ด ๋ฃ๊ธฐ

Info.js

```jsx
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect : ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋๋ง๋ค ํน์  ์์์ ์ํํ๋๋ก ์ค์ ํ  ์ ์๋ Hook
  // ํด๋์คํ ์ปดํฌ๋ํธ์ componentDidMount์ componentDidUpdate๋ฅผ ํฉ์น ํํ
  // useEffect(() => {
  //   console.log('useEffect : ๋ ๋๋ง์ด ์๋ฃ๋์์ต๋๋ค!');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  // - useEffect์์ ์ค์ ํ ํจ์๋ฅผ ์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋งจ ์ฒ์ ๋ ๋๋ง๋  ๋๋ง ์คํํ๊ณ 
  // - ์๋ฐ์ดํธ๋  ๋๋ ์คํํ์ง ์์ผ๋ ค๋ฉด ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ก ๋น์ด ์๋ ๋ฐฐ์ด์ ๋ฃ์ด์ค๋ค.
  // useEffect(() => {
  //   console.log('๋ง์ดํธ๋  ๋๋ง ์คํ๋ฉ๋๋ค.');
  // }, []);

  // useEffect ์ฌ์ฉํ์ฌ props ์์ ๋ค์ด ์๋ value ๊ฐ์ด ๋ฐ๋ ๋๋ง ํน์  ์์ ์ํ
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  // ๋ฐฐ์ด ์์๋ useState๋ฅผ ํตํด ๊ด๋ฆฌํ๊ณ  ์๋ ์ํ๋ฅผ ๋ฃ์ด ์ฃผ์ด๋ ๋๊ณ 
  // props๋ก ์ ๋ฌ๋ฐ์ ๊ฐ์ ๋ฃ์ด ์ฃผ์ด๋ ๋๋ค.
  // --> ํด๋์คํ ์ปดํฌ๋ํธ๋ผ๋ฉด componentDidUpdate์ฌ์ฉ
  // compnentDidUpdate(prevProps, prevState) {
  //   if (prevProps, value !== this.props.value) {
  //     doSomething();
  //   }
  // }

  // cleanup ํจ์ ์ฌ์ฉ
  // - useEffect๋ ๊ธฐ๋ณธ์ ์ผ๋ก ๋ ๋๋ง๋๊ณ  ๋ ์งํ๋ง๋ค ์คํ ๋จ
  // - ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ ๋ฐฐ์ด์ ๋ฌด์ ๋ฃ๋์ง์ ๋ฐ๋ผ ์คํ๋๋ ์กฐ๊ฑด ๋ฌ๋ผ์ง
  // - ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋๊ธฐ ์ ์ด๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ์ด๋ค ์์ ์ํํ๊ณ  ์ถ๋ค๋ฉด
  //    useEffect์์ ๋ท์ ๋ฆฌ(cleanup)ํจ์ ๋ฐํ
  // useEffect(() => {
  //   console.log('effect');
  //   console.log(name);
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // }, [name]);

  **// ์ค์ง ์ธ๋ง์ดํธ๋  ๋๋ง ๋ท์ ๋ฆฌ ํจ์๋ฅผ ํธ์ถํ๊ณ  ์ถ๋ค๋ฉด
  // useEffect ํจ์์ ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ๋น์ด ์๋ ๋ฐฐ์ด ๋ฃ๊ธฐ
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanupํจ์ : unmount ๋  ๋๋ง ์คํ');
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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
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
        {visible ? '์จ๊ธฐ๊ธฐ' : '๋ณด์ด๊ธฐ'}
      </button>
      <hr />
      {visible && <Info />}**
    </div>
  );
}
**// - ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋๊ธฐ ์ ์ด๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ์ด๋ค ์์ ์ํํ๊ณ  ์ถ๋ค๋ฉด
//    useEffect์์ ๋ท์ ๋ฆฌ(cleanup)ํจ์ ๋ฐํ
// Info ์ปดํฌ๋ํธ๊ฐ ๋ํ๋  ๋ ์ฝ์์ effect ๊ฐ ๋ํ๋๊ณ , ์ฌ๋ผ์ง ๋ cleanup ๋ํ๋จ
// ๋ ๋๋ง ๋  ๋๋ง๋ค ์ฝ์์ ๋ท์ ๋ฆฌํจ์(cleanup)ํจ์ ๋ํ๋จ
// ๋ท์ ๋ฆฌ ํจ์๊ฐ ํธ์ถ๋  ๋ ์๋ฐ์ดํธ๋๊ธฐ ์ง์ ์ ๊ฐ ๋ณด์ฌ์ค**

export default App;
```

---

## 8.3 useReducer

- useReducer : useState๋ณด๋ค ๋ ๋ค์ํ ์ปดํฌ๋ํธ ์ํฉ์ ๋ฐ๋ผ ๋ค์ํ ์ํ๋ฅผ ๋ค๋ฅธ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ ํด์ฃผ๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ Hook
- ๋ฆฌ๋์(Rreducer)๋ ํ์ฌ ์ํ, ๊ทธ๋ฆฌ๊ณ  ์๋ฐ์ดํธ๋ฅผ ์ํด ํ์ํ ์ ๋ณด๋ฅผ ๋ด์ ์ก์(action)๊ฐ์ ์ ๋ฌ๋ฐ์ ์๋ก์ด ์ํ๋ฅผ ๋ฐํํ๋ ํจ์์ด๋ค.
- ๋ฆฌ๋์ ํจ์์์ ์๋ก์ด ์ํ๋ฅผ ๋ง๋ค ๋๋ ๋ฐ๋์ ๋ถ๋ณ์ฑ์ ์ง์ผ ์ฃผ์ด์ผ ํ๋ค.

```jsx
function reducer(state, action) {
	return {...}; // ๋ถ๋ณ์ฑ์ ์งํค๋ฉด์ ์๋ฐ์ดํธํ ์๋ก์ด ์ํ๋ฅผ ๋ฐํ
}
```

- ์ก์ ๊ฐ์ ์ฃผ๋ก ๋ค์๊ณผ ๊ฐ์ ํํ๋ก ์ด๋ฃจ์ด์ ธ ์์

```jsx
{
	type: 'INCREMENT',
	// ๋ค๋ฅธ ๊ฐ๋ค์ด ํ์ํ๋ค๋ฉด ์ถ๊ฐ๋ก ๋ค์ด๊ฐ
}
```

---

### 8.3.1 ์นด์ดํฐ ๊ตฌํํ๊ธฐ - useReducer

- useReducer๋ฅผ ์ฌ์ฉํ์ ๋์ ๊ฐ์ฅ ํฐ ์ฅ์  : ์ปดํฌ๋ํธ ์๋ฐ์ดํธ ๋ก์ง์ ์ปดํฌ๋ํธ ๋ฐ๊นฅ์ผ๋ก ๋นผ๋ผ ์ ์๋ค.

CounterReducer.js

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  // action.type์ ๋ฐ๋ผ ๋ค๋ฅธ ์์ ์ํ
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // ์๋ฌด๊ฒ๋ ํด๋น๋์ง ์์ ๋ ๊ธฐ์กด ์ํ ๋ฐํ
      return state;
  }
}

// useReducer๋ฅผ ์ฌ์ฉํ์ ๋์ ๊ฐ์ฅ ํฐ ์ฅ์  : ์ปดํฌ๋ํธ ์๋ฐ์ดํธ ๋ก์ง์ ์ปดํฌ๋ํธ ๋ฐ๊นฅ์ผ๋ก ๋นผ๋ผ ์ ์๋ค.
const CounterReducer = () => {
  // useReducer์ ์ฒซ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ๋ฆฌ๋์ ํจ์๋ฅผ ๋ฃ๊ณ ,
  // ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ํด๋น ๋ฆฌ๋์์ ๊ธฐ๋ณธ๊ฐ ๋ฃ๊ธฐ
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // state ๊ฐ๊ณผ dispatch ํจ์๋ฅผ ๋ฐ์ ์ค๋๋ฐ์. ์ฌ๊ธฐ์ state๋ ํ์ฌ ๊ฐ๋ฆฌํค๊ณ  ์๋ ์ํ,
  // dispatch ๋ ์ก์์ ๋ฐ์์ํค๋ ํจ์์ด๋ค.
  // dispatch(action)๊ณผ ๊ฐ์ ํํ๋ก, ํจ์ ์์ ํ๋ผ๋ฏธํฐ๋ก ์ก์ ๊ฐ์ ๋ฃ์ด์ฃผ๋ฉด ๋ฆฌ๋์ ํจ์๊ฐ ํธ์ถ๋จ
  return (
    <div>
      <p>
        ํ์ฌ ์นด์ดํฐ ๊ฐ์ <b>{state.value}</b>์๋๋ค.
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

### 8.3.2 useReducer๋ก input ์ธํ ์ํ ๊ด๋ฆฌํ๊ธฐ

- useReducer์์์ ์ก์๊ฐ์ ์ด๋ฒคํธ ๊ฐ์ฒด๊ฐ ์ง๋๊ณ  ์๋ e.target ๊ฐ ์์ฒด๋ก ์ฌ์ฉ
- ์ด๋ฐ์์ผ๋ก ์ธํ์ ๊ด๋ฆฌํ๋ฉด ์ธํ์ด ๋ง์๋ ์ฝ๋ ์งง๊ณ  ๊น๋ํ๊ฒ ์ ์ง ๊ฐ๋ฅ

InfoReducer.js

```jsx
import React, { useReducer } from "react";

// useReducer์์์ ์ก์๊ฐ์ ์ด๋ฒคํธ ๊ฐ์ฒด๊ฐ ์ง๋๊ณ  ์๋ e.target ๊ฐ ์์ฒด๋ก ์ฌ์ฉ
// ์ด๋ฐ์์ผ๋ก ์ธํ์ ๊ด๋ฆฌํ๋ฉด ์ธํ์ด ๋ง์๋ ์ฝ๋ ์งง๊ณ  ๊น๋ํ๊ฒ ์ ์ง ๊ฐ๋ฅ
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
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
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

## 8.4 useMemo - ์ฐ์ฐ ์ต์ ํ

- useMemo : ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๋ฐ์ํ๋ ์ฐ์ฐ ์ต์ ํ

### useMemo ์ฌ์ฉํ์ฌ ํ๊ท ๊ฐ ๊ณ์ฐํ๊ธฐ(map() concat ์ฌ์ฉ)

- ๋ฆฌ์คํธ์ ์ถ๊ฐ๋ ์ซ์๋ค์ ํ๊ท ์ ๋ณด์ฌ ์ฃผ๋ ํจ์ ์ปดํฌ๋ํธ ๋ง๋ค์ด๋ณด๊ธฐ

Average.js

```jsx
import React, { useState } from 'react';

**// ๋ฑ๋กbutton์ ๋๋ฅด์ง ์์๋ input ์์์ ๋ด์ฉ์ด ์์ ๋  ๋ getAverage ํจ์ ํธ์ถ๋จ**

const getAverage = numbers => {
  console.log('ํ๊ท ๊ฐ ๊ณ์ฐ ์ค..');
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
  // concat โ ์๋ก์ด ๋ฐฐ์ด ์์ฑ ํ ์ด๋ฅผ ์๋ก์ด ์ํ๋ก ์ค์ 
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  // -------map()ํจ์ ๋ณต์ต---------
  // arr.map(callback, [ thisArg ]) : ๊ธฐ์กด ๋ฐฐ์ด๋ก ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ฆ
  // callback : ์๋ก์ด ๋ฐฐ์ด์ ์์๋ฅผ ์์ฑํ๋ ํจ์
  // thisArg(์ ํํญ๋ชฉ) : callback ํจ์ ๋ด๋ถ์์ ์ฌ์ฉํ  this ๋ ํผ๋ฐ์ค
  // ๊ณ ์ ๊ฐ ์์ ๋๋ง index ์ฌ์ฉ.
  // index๋ฅผ key๋ก ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ด ๋ณ๊ฒฝ๋  ๋ ํจ์ธ์ ์ผ๋ก ๋ฆฌ๋ ๋๋งํ์ง ๋ชป ํจ
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>๋ฑ๋ก</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{ value}</li>
        ))}
      </ul>
      <div>
        <b>ํ๊ท ๊ฐ:</b>{getAverage(list)}
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

### ๋ฑ๋กbutton์ ๋๋ฅด์ง ์์๋ input ์์์ ๋ด์ฉ์ด ์์ ๋  ๋ getAverage ํจ์ ํธ์ถ๋จ โ useMemo ์ฌ์ฉํ์ฌ ์์ ์ต์ ํ ํ๊ธฐ

- list ๋ฐฐ์ด์ ๋ด์ฉ์ด ๋ฐ๋ ๋๋ง getAverage ํจ์ ํธ์ถ
- ๋ ๋๋ง ๊ณผ์ ์์ ํน์  ๊ฐ์ด ๋ฐ๋์์ ๋๋ง ์ฐ์ฐ ์คํ
- ์ํ๋ ๊ฐ์ด ๋ฐ๋์ง ์์๋ค๋ฉด ์ด์ ์ ์ฐ์ฐํ๋ ๊ฒฐ๊ณผ๋ฅผ ๋ค์ ์ฌ์ฉ

Average.js

```jsx
import React, { useMemo, useState } from 'react';

// ๋ฑ๋กbutton์ ๋๋ฅด์ง ์์๋ input ์์์ ๋ด์ฉ์ด ์์ ๋  ๋ getAverage ํจ์ ํธ์ถ๋จ

const getAverage = numbers => {
  console.log('ํ๊ท ๊ฐ ๊ณ์ฐ ์ค..');
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
  // concat โ ์๋ก์ด ๋ฐฐ์ด ์์ฑ ํ ์ด๋ฅผ ์๋ก์ด ์ํ๋ก ์ค์ 
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  **// useMemo์ฌ์ฉ
	// list ๋ฐฐ์ด์ ๋ด์ฉ์ด ๋ฐ๋ ๋๋ง getAverage ํจ์ ํธ์ถ
	// ๋ ๋๋ง ๊ณผ์ ์์ ํน์  ๊ฐ์ด ๋ฐ๋์์ ๋๋ง ์ฐ์ฐ ์คํ
  // ์ํ๋ ๊ฐ์ด ๋ฐ๋์ง ์์๋ค๋ฉด ์ด์ ์ ์ฐ์ฐํ๋ ๊ฒฐ๊ณผ๋ฅผ ๋ค์ ์ฌ์ฉ
  const avg = useMemo(() => getAverage(list), [list]);**

  // -------map()ํจ์ ๋ณต์ต---------
  // arr.map(callback, [ thisArg ]) : ๊ธฐ์กด ๋ฐฐ์ด๋ก ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ฆ
  // callback : ์๋ก์ด ๋ฐฐ์ด์ ์์๋ฅผ ์์ฑํ๋ ํจ์
  // thisArg(์ ํํญ๋ชฉ) : callback ํจ์ ๋ด๋ถ์์ ์ฌ์ฉํ  this ๋ ํผ๋ฐ์ค
  // ๊ณ ์ ๊ฐ ์์ ๋๋ง index ์ฌ์ฉ.
  // index๋ฅผ key๋ก ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ด ๋ณ๊ฒฝ๋  ๋ ํจ์ธ์ ์ผ๋ก ๋ฆฌ๋ ๋๋งํ์ง ๋ชป ํจ
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>๋ฑ๋ก</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{ value}</li>
        ))}
      </ul>
      <div>
        {/* <b>ํ๊ท ๊ฐ:</b>{getAverage(list)} */}
        **<b>ํ๊ท ๊ฐ:</b>{avg}**
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

## 8.5 useCallback - ๋ ๋๋ง ์ฑ๋ฅ ์ต์ ํ

- ๋ ๋๋ง ์ฑ๋ฅ ์ต์ ํ(useMemo์ ๋น์ท)
- ๋ง๋ค์ด ๋จ๋ ํจ์ ์ฌ์ฌ์ฉ ํ  ์ ์์

---

### useCallback(์์ฑํ๊ณ  ์ถ์ ํจ์, ๋ฐฐ์ด) Average ์ปดํฌ๋ํธ์ onChange/onInsert ํจ์ ์ฌ์ฌ์ฉํ๊ธฐ

- ๋ฆฌ๋ ๋๋ง ๋  ๋๋ง๋ค ์๋ก ๋ง๋ค์ด์ง ํจ์ ์ฌ์ฉํ๊ฒ ๋จ
- ํจ์ ์ฌ์ฌ์ฉํ์ฌ ์ต์ ํ ํด์ฃผ๋ ๊ฒ์ด ์ข์

---

- useCallback(์์ฑํ๊ณ  ์ถ์ ํจ์, ๋ฐฐ์ด-์ด๋ค ๊ฐ์ด ๋ฐ๋์์ ๋ ํจ์๋ฅผ ์๋ก ์์ฑํด์ผ ํ๋์ง ๋ช์ํด์ผ ํจ = ์กฐํํ๋ ๊ฐ)
- onChange์ฒ๋ผ []๋น์ด์๋ ๋ฐฐ์ด ๋ฃ์ผ๋ฉด โ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋ ๋ง๋ค์๋ ํจ์ ๊ณ์ ์ฌ์ฌ์ฉ
- onInsert์ฒ๋ผ [number, list] ๋ฐฐ์ด ์์ ๋ฃ์ผ๋ฉด โ ์ธํ ๋ด์ฉ์ด ๋ฐ๋๊ฑฐ๋ ์๋ก์ด ํญ๋ชฉ์ด ์ถ๊ฐ๋  ๋ ์๋ก ๋ง๋ค์ด์ง ํจ์ ์ฌ์ฉ
  - ํจ์ ๋ด๋ถ์์ ์ํ ๊ฐ์ ์์กดํด์ผ ํ  ๋๋ ๊ทธ ๊ฐ์ ๋ฐ๋์ ๋๋ฒ์งธ ํ๋ผ๋ฏธํฐ ์์ ํฌํจ์์ผ ์ค์ผ ํจ
  - ์ฌ๊ธฐ์  number์ list๋ฅผ ์กฐํํด์ nextList๋ฅผ ์์ฑํ๊ธฐ ๋๋ฌธ์ ๋ฐฐ์ด ์์ number์ list๋ฅผ ๊ผญ ๋ฃ์ด์ค์ผ ํจ

AverageUseCallback.js

```jsx
import React, { useCallback, useMemo, useState } from 'react';

const getAverage = numbers => {
  console.log('ํ๊ท ๊ฐ ๊ณ์ฐ ์ค..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  **// useCallback(์์ฑํ๊ณ  ์ถ์ ํจ์, ๋ฐฐ์ด) hook์ฌ์ฉํ์ฌ
  // Average ์ปดํฌ๋ํธ์ onChange / onInsert ํจ์ ์ฌ์ฌ์ฉํ๊ธฐ
  // - ๋ฆฌ๋ ๋๋ง ๋  ๋๋ง๋ค ์๋ก ๋ง๋ค์ด์ง ํจ์ ์ฌ์ฉํ๊ฒ ๋จ
  // - ํจ์ ์ฌ์ฌ์ฉํ์ฌ ์ต์ ํ ํด์ฃผ๋ ๊ฒ์ด ์ข์
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  // ๋น๋ฐฐ์ด -> ์ปดํฌ๋ํธ๊ฐ ์ฒ์ ๋ ๋๋ง๋  ๋๋ง ํจ์ ์์ฑ

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);
  // number ํน์ list ๊ฐ ๋ฐ๋์์ ๋๋ง ํจ์ ์์ฑ

  // - useCallback(์์ฑํ๊ณ  ์ถ์ ํจ์, ๋ฐฐ์ด-์ด๋ค ๊ฐ์ด ๋ฐ๋์์ ๋ ํจ์๋ฅผ ์๋ก ์์ฑํด์ผ ํ๋์ง ๋ช์ํด์ผ ํจ)
  // - onChange์ฒ๋ผ []๋น์ด์๋ ๋ฐฐ์ด ๋ฃ์ผ๋ฉด โ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋  ๋ ๋ง๋ค์๋ ํจ์ ๊ณ์ ์ฌ์ฌ์ฉ
  // - onInsert์ฒ๋ผ [number, list] ๋ฐฐ์ด ์์ ๋ฃ์ผ๋ฉด โ ์ธํ ๋ด์ฉ์ด ๋ฐ๋๊ฑฐ๋ ์๋ก์ด ํญ๋ชฉ์ด ์ถ๊ฐ๋  ๋ ์๋ก ๋ง๋ค์ด์ง ํจ์ ์ฌ์ฉ
  // - ํจ์ ๋ด๋ถ์์ ์ํ ๊ฐ์ ์์กดํด์ผ ํ  ๋๋ ๊ทธ ๊ฐ์ ๋ฐ๋์ ๋๋ฒ์งธ ํ๋ผ๋ฏธํฐ ์์ ํฌํจ์์ผ ์ค์ผ ํจ
  // - ์ฌ๊ธฐ์  number์ list๋ฅผ ์กฐํํด์ nextList๋ฅผ ์์ฑํ๊ธฐ ๋๋ฌธ์ ๋ฐฐ์ด ์์ number์ list๋ฅผ ๊ผญ ๋ฃ์ด์ค์ผ ํจ**

  // useMemo์ฌ์ฉ
	// list ๋ฐฐ์ด์ ๋ด์ฉ์ด ๋ฐ๋ ๋๋ง getAverage ํจ์ ํธ์ถ
	// ๋ ๋๋ง ๊ณผ์ ์์ ํน์  ๊ฐ์ด ๋ฐ๋์์ ๋๋ง ์ฐ์ฐ ์คํ
  // ์ํ๋ ๊ฐ์ด ๋ฐ๋์ง ์์๋ค๋ฉด ์ด์ ์ ์ฐ์ฐํ๋ ๊ฒฐ๊ณผ๋ฅผ ๋ค์ ์ฌ์ฉ
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>๋ฑ๋ก</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{ value}</li>
        ))}
      </ul>
      <div>
        <b>ํ๊ท ๊ฐ:</b>{avg}
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

- ํจ์ ์ปดํฌ๋ํธ์์ ref ์ฝ๊ฒ ์ฌ์ฉํ  ์ ์๊ฒ ํจ
- useRef ์ฌ์ฉํ์ฌ ref ์ค์ ํ๋ฉด useRef ๋ฅผ ํตํด ๋ง๋  ๊ฐ์ฒด ์์ current ๊ฐ์ด ์ค์  ์๋ฆฌ๋จผํธ๋ฅผ ๊ฐ๋ฆฌํด โ> โโโโ

### ๋ฑ๋ก button ๋๋ ์ ๋ ํฌ์ปค์ค input์ผ๋ก ๋์ด๊ฐ๋๋ก ์ฝ๋ ์์ฑ

AverageUseRef.js

```jsx
import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = numbers => {
  console.log('ํ๊ท ๊ฐ ๊ณ์ฐ ์ค..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseRef = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  **// useRef
  // - ํจ์ ์ปดํฌ๋ํธ์์ ref ์ฝ๊ฒ ์ฌ์ฉํ  ์ ์๊ฒ ํจ
  // - ๋ฑ๋ก button ๋๋ ์ ๋ ํฌ์ปค์ค input์ผ๋ก ๋์ด๊ฐ๋๋ก ์ฝ๋ ์์ฑ
  // - useRef ์ฌ์ฉํ์ฌ ref ์ค์ ํ๋ฉด useRef ๋ฅผ ํตํด ๋ง๋  ๊ฐ์ฒด ์์
  //    current ๊ฐ์ด ์ค์  ์๋ฆฌ๋จผํธ๋ฅผ ๊ฐ๋ฆฌํด
  const inputEl = useRef(null);**

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    **inputEl.current.focus();**
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} **ref={inputEl}** />
      <button onClick={onInsert}>๋ฑ๋ก</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{ value}</li>
        ))}
      </ul>
      <div>
        <b>ํ๊ท ๊ฐ:</b>{avg}
      </div>
    </div>
  );
};

export default AverageUseRef;
```

App.js

```jsx
import React from "react";
import AverageUseRef from "./AverageUseRef";

const App = () => {
  return (
    <div>
      <AverageUseRef />
    </div>
  );
};

export default App;
```

---

### 8.6.1 ๋ก์ปฌ ๋ณ์ ์ฌ์ฉํ๊ธฐ

- ๋ก์ปฌ ๋ณ์ : ๋ ๋๋ง๊ณผ ์๊ด์์ด ๋ฐ๋ ์ ์๋ ๊ฐ
- ๋ก์ปฌ ๋ณ์๋ฅผ ์ฌ์ฉํ  ๋๋ useRef ์ฌ์ฉ
- ์ด๋ ๊ฒ ref ์์ ๊ฐ์ด ๋ฐ๋์ด๋ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋์ง ์๋๋ค๋ ์  ์ฃผ์
- ๋ ๋๋ง๊ณผ ๊ด๋ จ๋์ง ์์ ๊ฐ์ ๊ด๋ฆฌํ  ๋๋ง ์ด๋ฐ ๋ฐฉ์์ผ๋ก ์์ฑํ๊ธฐ

```jsx
import React, { useRef } from "react";
// useRef ์ฌ์ฉํ์ฌ ๋ก์ปฌ ๋ณ์ ์ฌ์ฉํ๊ธฐ
// - ๋ก์ปฌ ๋ณ์ : ๋ ๋๋ง๊ณผ ์๊ด์์ด ๋ฐ๋ ์ ์๋ ๊ฐ
// - ๋ก์ปฌ ๋ณ์๋ฅผ ์ฌ์ฉํ  ๋๋ useRef ์ฌ์ฉ

// - ์ด๋ ๊ฒ ref ์์ ๊ฐ์ด ๋ฐ๋์ด๋ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋์ง ์๋๋ค๋ ์  ์ฃผ์
// - ๋ ๋๋ง๊ณผ ๊ด๋ จ๋์ง ์์ ๊ฐ์ ๊ด๋ฆฌํ  ๋๋ง ์ด๋ฐ ๋ฐฉ์์ผ๋ก ์์ฑํ๊ธฐ
const useRefEx = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>useRefExample ์ด๋ค.</div>;
};

export default useRefEx;

// ํด๋์ค ์ปดํฌ๋ํธ
// import React, { Component } from 'react';

// class useRefEx extends Component {
//   id = 1
//   setId = (n) => {
//     this.id = n;
//   }
//   printId = () => {
//     console.log(this.id);
//   }
//   render() {
//     return (
//       <div>
//         useRefExample
//       </div>
//     );
//   }
// }

// export default useRefEx;
```

---

---

## 8.7 ์ปค์คํ Hooks ๋ง๋ค๊ธฐ

- ์ฌ๋ฌ ์ปดํฌ๋ํธ์์ ๋น์ทํ ๊ธฐ๋ฅ์ ๊ณต์ ํ  ๊ฒฝ์ฐ, ๋๋ง์ Hook์ผ๋ก ์์ฑํ์ฌ ๋ก์ง ์ฌ์ฌ์ฉ ๊ฐ๋ฅ
- ๊ธฐ์กด Info ์ปดํฌ๋ํธ์์ ์ฌ๋ฌ๊ฐ์ ์ธํ ๊ด๋ฆฌ useReducer โ useInputs ๋ก ๋ค์ ์์ฑํด๋ณด๊ธฐ

useInputs.js

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

InfoUseInput.js

```jsx
import React from "react";
import useInputs from "./useInputs";

const InfoUseInput = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>์ด๋ฆ:</b> {name}
        </div>
        <div>
          <b>๋๋ค์:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoUseInput;
```

App.js

```jsx
import React from "react";
import InfoUseInput from "./InfoUseInput";

const App = () => {
  return (
    <div>
      <InfoUseInput />
    </div>
  );
};

export default App;
```

---

## 8.8 ๋ค๋ฅธ Hooks

- ์ปค์คํ Hooks๋ง๋ค์ด ์ฌ์ฉํ๋ ๊ฒ์ฒ๋ผ, ๋ค๋ฅธ ๊ฐ๋ฐ์๊ฐ ๋ง๋  Hooks๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก ์ค์นํ์ฌ ์ฌ์ฉํ  ์ ์์
-

[Collection of React Hooks](https://nikgraf.github.io/react-hooks/)

- https://github.com/rehooks/awesome-react-hooks

---

## 8.9 Hooks ์ ๋ฆฌ

- ๋ฆฌ์กํธ์์ Hooks ํจํด ์ฌ์ฉํ๋ฉด ํด๋์คํ ์ปดํฌ๋ํธ ์์ฑํ์ง ์๊ณ  ๋๋ถ๋ถ์ ๊ธฐ๋ฅ ๊ตฌํ ๊ฐ๋ฅ
- ์ด๋ฌํ ๊ธฐ๋ฅ์ด ๋ฆฌ์กํธ์ ๋ฆด๋ฆฌ์ฆ๋์๋ค๊ณ  ํด์ ๊ธฐ์กด์ setState๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ์์ด ์๋ชป๋ ๊ฒ์ ์๋(useState ํน์ useReducer๋ฅผ ํตํด ๊ตฌํํ  ์ ์๋๋ผ๋)
- ๋ฆฌ์กํธ ๋ฉ๋ด์ผ์ ๋ฐ๋ฅด๋ฉด, ํด๋์คํ ์ปดํฌ๋ํธ ๊ณ์ ์ง์์์ 
- ์ ์ง ๋ณด์ํ๊ณ  ์๋ ํด๋์คํ ์ปดํฌ๋ํธ๋ฅผ ๊ตณ์ด ํจ์ ์ปดํฌ๋ํธ์ Hooks๋ฅผ ์ฌ์ฉํ๋ ํํ๋ก ์ ํํ  ํ์ ์์
- ๋ค๋ง ์๋ก ์์ฑํ๋ ์ปดํฌ๋ํธ(์๋ก์ด ํ๋ก์ ํธ ๊ฐ๋ฐ)๋ ํจ์ ์ปดํฌ๋ํธ ์ฌ์ฉ(Hooks ์ฌ์ฉ ๊ถ์ฅ), ๊ผญ ํ์ํ ์ํฉ์์๋ง ํด๋์คํ ์ปดํฌ๋ํธ ์ฌ์ฉ

---

---

# ๐ฅย ํจ์คํธ ์บ ํผ์ค ๊ฐ์

# Ch 7. Hooks & Context

## ํด๋์ค ์ปดํฌ๋ํธ ๋์  ํจ์ ์ปดํฌ๋ํธ ์ฐ๋ ์ด์ 

- ์ปดํฌ๋ํธ ์ฌ์ด์์ ์ํ์ ๊ด๋ จ๋ ๋ก์ง์ ์ฌ์ฌ์ฉํ๊ธฐ ์ด๋ ต๋ค
  - ์ปจํ์ด๋ ๋ฐฉ์ ๋ง๊ณ , ์ํ์ ๊ด๋ จ๋ ๋ก์ง
- ๋ณต์กํ ์ปดํฌ๋ํธ๋ค์ ์ดํดํ๊ธฐ ์ด๋ ต๋ค.
- Class๋ ์ฌ๋๊ณผ ๊ธฐ๊ณ๋ฅผ ํผ๋ ์ํจ๋ค
  - ์ปดํ์ผ ๋จ๊ณ์์ ์ฝ๋๋ฅผ ์ต์ ํํ๊ธฐ ์ด๋ ต๊ฒ ๋ง๋ ๋ค.
- this.state ๋ ๋ก์ง์์ ๋ ํผ๋ฐ์ค๋ฅผ ๊ณต์ ํ๊ธฐ ๋๋ฌธ์ ๋ฌธ์ ๊ฐ ๋ฐ์ํ  ์ ์๋ค.

## 01. Basic Hooks(1)

```jsx
npx create-react-app ํด๋๋ช
npx create-react-app react-hooks-example
```

## 02. Basic Hooks(2) - ๊ฐ์์ฐธ๊ณ 

### useState - state ๋์ฒด

### useEffect - ๋ผ์ดํ์ฌ์ดํด ๋์ฒด

- componentDidMount
- componentDidUpdate โ useEffect(์๋ฐ์ดํธ ํ ๊ฐ์ผ๋ก ์คํ)
- componentWillUnmount โ cleanup(์๋ฐ์ดํธ ์  ๊ฐ์ผ๋ก ์คํ)

---

## 03. Custom Hooks(์ปค์คํ ํ - ํ ์ปค์คํํ๊ธฐ)

- ๋๋ง์ Hook ๋ง๋ค์ด ์ฝ๋ ์งง๊ณ  ๊ฐ๊ฒฐํ๊ฒ

useWindowWidth.js

```jsx
import React, { useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  // ์๋ก๊ณ ์นจ์ด ์๋ ์ฌ์ด์ฆ ์กฐ์ ์ ๋ฐ๋ก๋ฐ๋ก setWidth ๊ฐ ๊ฐ์ ธ์ค๊ธฐ
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    // cleanup ํจ์ ์จ์ฃผ๊ธฐ(์๋ฐ์ดํธ ๋๊ธฐ์  ๊ฐ์ผ๋ก ๋ ๋๋ง, [] => ์ต์ด์๋ง ์คํ)
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
```

App.js

```jsx
import logo from "./logo.svg";
import "./App.css";
import useWindowWidth from "./useWindowWidth";

function App() {
  const width = useWindowWidth();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        **{width}**
      </header>
    </div>
  );
}

export default App;
```
