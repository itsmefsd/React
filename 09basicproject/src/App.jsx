import React from 'react'

function App() {
  const name = "Sumant Rai"
  let num1 = 10
  let num2 = 15

  const userObj = {
    name: "Sumant Rai",
    email: "rai@google.com",
    age: 20
  }

  function greetMe(){
     return "Hii welcome to react js"
  }

  function mathOperationAdd(num1, num2){

    return num1 + num2
  }
  function mathOperationSub(num1, num2){

    return num1 - num2
  }
  function mathOperationMul(num1, num2){

    return num1 * num2
  }
  function mathOperationDiv(num1, num2){

    return num1 / num2
  }

  const path = "https://images.unsplash.com/photo-1753808645289-283497260e33?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  

  return (
    <div>
      <h1>{name}</h1>
      <h2>{num1 + num2}</h2>
      <h2>{greetMe()}</h2>

      <h2>Add: {mathOperationAdd(3,4)}</h2>
      <h2>Sub: {mathOperationSub(3,4)}</h2>
      <h2>Mul: {mathOperationMul(3,4)}</h2>
      <h2>Div: {mathOperationDiv(3,4)}</h2>


      <h2>{userObj["name"]}</h2>
      <h2>{userObj["age"]}</h2>
      <h2>{userObj["email"]}</h2>

      <img height={200} width={200} src={path} alt="" />
    </div>
  )
}

export default App
