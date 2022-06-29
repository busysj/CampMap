import React, { useEffect } from "react";
import { useRef } from "react";

//로그인창외 클릭시 로그인창 닫아짐

const OutsideClick = (props) => {
  const ref = useRef(null);
  const { onClickOutside, children } = props;

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  if (!children) {
    return null;
  }
  return <div ref={ref}>{children}</div>;
};

export default OutsideClick;
