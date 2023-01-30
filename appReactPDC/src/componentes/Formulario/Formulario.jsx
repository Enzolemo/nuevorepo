import Titulo from "../Titulo/Titulo"

const Formulario = () => {
    const styles = {
        backgroundColor:'red'
    }
    return (
        < section style={styles}>
            <Titulo titulo='Soy titulo de Form' subtitulo='Soy subtitulo de Form' />
            <form>
                <input type="text" placeholder='Ingrese su nombre' />
            </form>
        </section >
    )
}

export default Formulario