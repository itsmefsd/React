import React from 'react'

function App() {
  const userName = "Sumant Rai"
  const age = 20
  return (
    <div>
      <h1>Jsx in React from {userName}</h1>
      <h1>{10 + 20}</h1>
      <h2>{age>=18?"You Can vote":"You Cannot vote"}</h2>

      <button onClick={() => alert("Clicked on the button")} >Click Me</button>
      
    </div>
  )
}

export default App
