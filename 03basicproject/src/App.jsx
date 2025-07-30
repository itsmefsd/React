import React from "react";

function App() {
  return (
    <div>
      <h1>First Component</h1>
      <MyName />
      <MyGf />
    </div>
  );
}

function MyName() {
  return (
    <>
      <pre>
        <h1>Sumant</h1>
        <h1>Rai</h1>
      </pre>
    </>
  );
}

function MyGf() {
  return (
    <>
      <h1>Shubhangi</h1>
      <h1>Mishra</h1>
    </>
  );
}

export default App;
