import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './componentes/Menu/Menu'
import ComponenteContenedor from './componentes/ComponenteContainer/ComponenteContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/itemDetailContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>



//Existen dos tipos de componentes: 1ro FUNCIONALES/PRESENTACION: muestran cosas,; y el 2do Contenedores: son los que contienen


function App() {
  let count = 0

  return (
    <BrowserRouter>

      {/* Aca anido menu dentro de componente contenedor. entonces ahora menu es el children de componente contenedor; se podria decir que menu ahora es PROP de componente contenedor, en un prop llamado CHILDREN
      
      si paso solo un dato es un objeto (children) si paso mas de uno se hace un array de objetos, tambien llamado children*/}
    
      <ComponenteContenedor saludo='Hola soy componente container'>

        <Menu />

      </ComponenteContenedor>
      <ItemDetailContainer />
      <ItemCount initial={1} stock={10} onAdd = {()=>{}}/>
    </BrowserRouter>
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
