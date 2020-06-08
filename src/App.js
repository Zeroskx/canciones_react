import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Artista from './components/Artista';


function App() {

  // Definir el State del form
  const [busquedaLetra, guardarBusquedaLetra] = useState({});

  // States para las respuestas de la API
  const [letra,guardarLetra] = useState('');
  const [infor,guardarInfo] = useState('');

  // useEff para consultar las API

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0 ) return;

    const consultarAPILetra = async () => {
      // Destructuring para anclar los datos en las urls
      const {artista,cancion} = busquedaLetra;
      // URLs de las API
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      
      // Para consultar 2 API al mismo tiempo tenemos que usar:

      const [letra,informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);
      // Si no lo hacemos asi, las consultas seran secuenciales y dependeremos que una responda para que consulte la proxima
      
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

    }
    consultarAPILetra();
  },[busquedaLetra, infor]);

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
           <Artista 
              infor={infor}
            />
          </div>
          <div className='col-md-6'>
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
