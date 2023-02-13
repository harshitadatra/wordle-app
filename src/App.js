import { useEffect, useState } from "react";

function App() {
  const [solution,setSolution] = useState("")
  useEffect(()=>{
    fetch('http://localhost:3001/solutions').then( res => res.json()).then(json => console.log(json))
  },[])
  return (
    <div className="App">
      <header className="App-header">
       <h1>wordle </h1>
      </header>
    </div>
  );
}

export default App;
