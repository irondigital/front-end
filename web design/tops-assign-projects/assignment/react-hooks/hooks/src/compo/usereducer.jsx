// useReducer is used when state logic becomes complex and involves multiple sub-values or state transitions.

// it can manage a  data when logic is cery complex and involve big valuess in this

// const [state, dispatch] = useReducer(reducer, initialState);

// state → current state

// dispatch → function to send actions

// reducer → function that updates state

// initialState → starting value

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}