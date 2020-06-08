import React, {useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Formulario = ({guardarBusquedaLetra}) => {

    // State del formulario
    const [busqueda,guardarBusqueda] = useState({
        artista:'',
        cancion:''
    });

    // State para el Error

    const [error,guardarError] = useState(false);

    // Funcion a cada input para leer el contenido

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Destructuring al state

    const { artista, cancion } = busqueda;

    // Pasar info a APP para consultar las API

    const buscarInformacion = e => {
        e.preventDefault();

        // Validando Formulario

        if(artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        };

        guardarError(false);

        // Pasar al componente principal
        guardarBusquedaLetra(busqueda);

    }

    return ( 
        <div className='bg-info'>
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <div className='container'>
                <div className='row'>
                    <form
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className='text-center'>Buscador Letras de Canciones</legend>
                            <div className='row'>
                            <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artista'
                                            placeholder='Nombre Artista'
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='cancion'
                                            placeholder='Nombre Canción'
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

 
Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
 
export default Formulario;