import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './componentes/Menu/Menu'
import Titulo from './componentes/Titulo/Titulo'





function App() {
  let count = 0

  return (
    <>
      <Menu />
      <Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
    

  

    < section >
  <Titulo titulo='Soy titulo de Form' subtitulo='Soy subtitulo de Form'/>
  <form>
    <input type="text" placeholder='Ingrese su nombre'/>
  </form>
</section >


</>
  )
}




/* ESTO ES CON LO QUE VENIA LA APP 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
*/
export default App
