
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <h1>well come to react  </h1>
        <F></F>
        <F></F>

    </>
  )
}



function F(){
  const age = 20;
  const name = 'arman';
  
  return (
    <ul>
      <li>name: {name}</li>
      <li>Age: {age}</li>

    </ul>
  )
}

export default App
