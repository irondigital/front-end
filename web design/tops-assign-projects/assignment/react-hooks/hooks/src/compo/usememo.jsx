// useMemo stores the result of a function and recalculates it only when needed.

// useMemo is a React hook used to memoize the result of an expensive computation so that it is only recalculated when its dependencies change, improving performance


const result = useMemo(() => {
  console.log("Calculating...");
  return 1000000000 * 2;
}, []);