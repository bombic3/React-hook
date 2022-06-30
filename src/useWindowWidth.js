import React, { useEffect } from "react";

export default function useWindowWidth () {
  const [width, setWidth] = React.useState(window.innerWidth);

  // 새로고침이 아닌 사이즈 조정시 바로바로 setWidth 값 가져오기
  useEffect(() => {
    // 반복사용되는 함수 resize 로 정의하기
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    // cleanup 함수 써주기(업데이트 되기전 값으로 렌더링, [] => 최초에만 실행)
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}