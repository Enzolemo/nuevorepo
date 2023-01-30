import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"


//Aca vamos a llamar las apis, para pasarle datos a nuestros componentes de la pagina. como por ejemplo un listado de productos.
export const ComponenteContenedor = (props) => {
    const {saludo} = props //esta forma de llamar a saludo se llama destructuring; y la tercera forma de hacerlo es aplicar desttructuring en el parametro directamente, quedaria asi: export const ComponenteContenedor = ({saludo}) => {: ; esta tercera forma es la que vamos a usar 
    return (
        <>
            <Titulo titulo='Soy titulo de App' subtitulo='Soy subtitulo de App' />
            
           {/* <p>{props.saludo}</p> esta es una forma de llamar a saludo con el objeto props, pero tambien lo puedo hacer de dos formas mas*/}
           <p>{saludo}</p> {/* esta es la segunda manera  */}
            <Formulario />

        </>
    )
}

export default ComponenteContenedor