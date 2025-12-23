import React from "react";

function WelcomeJSX() {
  const framework = "React";
  const description = "jsx is a syntax extension for JavaScript.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        {description} This example uses <strong>{framework}</strong> to demonstrate dynamic data in JSX.
      </p>
    </div>
  );
}

export default WelcomeJSX;
