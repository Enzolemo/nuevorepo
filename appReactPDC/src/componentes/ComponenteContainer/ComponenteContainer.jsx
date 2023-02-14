import { useState, useEffect } from "react"
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
//Si hago llamada a apis, debo hacerlo en ste componente container, dentro de los useEffect que se repiten solo una vez
//UseEffect: aca pongo acciones que se van a reproducir recien cuando toda la pagina se termine de reenderizar 

//comento todo para ver el ejemplo solo de Promises
/*
export const ComponenteContenedor = ({ saludo, children }) => {

    const [count, setCount] = useState(0)

    const hanldeCount = () => {
        setCount(count + 1)
    }
    // let titulo='Soy titulo de App' 


    useEffect(()=>{
        console.log('Una sola vez en el montaje')
    })

    useEffect(()=>{
        console.log('Simulacion de una tarea pesada o async; se vuelve a reproducir cada que se reenderiza  ')
        return ()=>{
            console.log('efecto limpieza')
        }
    })

    useEffect(()=>{
        console.log("Solo se reproduce una vez porque le pongo un array vacio al final")
    }, [])
*/ /*
    console.log('render del compo container paso ')
    return (
        <>
            <Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
            <p>{saludo}</p>
            {children} {/* si tuviera mas de un children, y este se convirtiera en un array de objetos, debo poner {children[0]} ahi selecciono el indice del array y listo, o no pongo el indice y me trae todo el array completo; Children aca es el Menu*//* }
<Formulario />
<h2>Contador: {count}</h2>
<button onClick={hanldeCount} >Click</button>

</>
)
} */

//CLASE DE PROMISES
//res=resuelto; rej=rechazada
const task = new Promise((res, rej) => {
    //Aca debo poner acciones async o no
    let condition = true
    if (condition) {
        res('todo ok')
    } else {
        rej("todo mal")
    }
})
//con .then capturo la RESPuesta que esta RESuelta; para capturar el rechazado, pongo el err luego del resp
export const ComponenteContenedor = ({ saludo, children }) => {
    task
    .then(resp => {
        console.log(resp)
    })
    .catch(err => console.log(err))
    return (
        <>
            <Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
            <p>{saludo}</p>
            {children}
        </>
    )
}

// useEffect(()=>{
//     const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
//     fetch(url, {

//     })
//     .then(respuesta =>respuesta.json())
//     .then(respuesta =>console.log(respuesta))

// }, [])


export default ComponenteContenedor