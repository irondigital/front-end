// useLayoutEffect runs after React updates the DOM but before the browser displays the changes to the user
// useLayoutEffect is similar to useEffect, but it runs synchronously after DOM mutations and before the browser paints. It is mainly used for DOM measurements and layout adjustments.

import { useLayoutEffect, useRef, useState } from "react";

function Box() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: "200px" }}>
        Box
      </div>
      <p>Width: {width}</p>
    </div>
  );
}