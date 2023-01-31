import { useState } from "react"
import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"
//Aca vamos a llamar las apis, para pasarle datos a nuestros componentes de la pagina. como por ejemplo un listado de productos.

{/*MANERA NUMERO 1

export const ComponenteContenedor = (props) => {
    return (
        <Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
       <p>{props.saludo}</p> 
       <Formulario />
    )
}

*/}

{/* MANERA NUMERO 2, DESTRUCTURING 

export const ComponenteContenedor = (props) => {
const {saludo} = props

return(
<Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
<p>{saludo}</p>
<Formulario />
)
}

*/}

{/* MANERA NUMERO 3, APLICO DESTRUCTURING POR PARAMETRO >>>> como segui avanzando en el ejemplo, ahora este tiene un monton de cosas mas, por ejemplo, ahora aplico destructuring en un array */ }

export const ComponenteContenedor = ({ saludo, children }) => {

    const [count, setCount] = useState(0)

    const hanldeCount = () => {
        setCount(count + 1)
    }
    // let titulo='Soy titulo de App' 
    return (
        <>
            <Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
            <p>{saludo}</p>
            {children} {/* si tuviera mas de un children, y este se convirtiera en un array de objetos, debo poner {children[0]} ahi selecciono el indice del array y listo, o no pongo el indice y me trae todo el array completo; Children aca es el Menu */}
            <Formulario />
            <h2>Contador: {count}</h2>
            <button onClick={hanldeCount} >Click</button>

        </>
    )
}


export default ComponenteContenedor