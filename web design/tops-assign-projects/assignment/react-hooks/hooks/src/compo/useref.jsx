// Creates a mutable object that persists across renders without causing a re-render when updated.
// useref is use store data without trigered re-rendering when updated. 

import { useRef } from "react";

function Example() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return <button onClick={handleClick}>Click</button>;
}