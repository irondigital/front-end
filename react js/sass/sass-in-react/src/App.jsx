
    import React, { useState } from "react";

function App(){
 const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
    return(
        <>

    <div className={`index-container ${theme}`}>
      <header className="index-header">
        <h1>React Advanced Index Component</h1>
        <p>Using external CSS & modern React</p>
      </header>

      <section className="index-card">
        <h2>Counter Example</h2>
        <p className="count">{count}</p>

        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      <section className="index-theme">
        <h2>Theme Switcher</h2>
        <button className="theme-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </section>

      <footer className="index-footer">
        <p>© 2026 React Advanced UI</p>
      </footer>
    </div>
  



        </>
    )
}
export default App;