// useContext is a Hook that allows a component to access data from a React Context without passing props manually at every level.
// it can avoid a props drilling methods.
// it can use shared global data one we can provide a in parent the child automatically acess 

import { AuthContext } from "./AuthContext";

function App() {
  const user = { name: "Milan" };

  return (
    <AuthContext.Provider value={user}>
      <Dashboard />
    </AuthContext.Provider>
  );
}