// useId generates a unique ID that stays consistent across renders and works correctly with server-side rendering (SSR).

// useId is a React hook introduced in React 18 that generates a stable and unique ID for accessibility purposes and ensures consistency between server and client rendering.

import { useId } from "react";

function InputField() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Name</label>
      <input id={id} type="text" />
    </>
  );
}