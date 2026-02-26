// useCallback is a React hook that memoizes a function reference and returns the same function between renders unless its dependencies change. It is mainly used to prevent unnecessary re-renders of child components.

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);