import {useState} from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incrementCount(){
    setCount(count+1)
    console.log(count);

  }
  return (
    <>
<div>
{count}
</div>
<button
type="button"
onClick={incrementCount}
>
  Click Me!
</button>
    </>
  )
}

export default App
