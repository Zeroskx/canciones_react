import React from 'react';
import PropTypes from 'prop-types'; 

const Artista = ({infor}) => {

    // Validamos para que no se ejecute al inicio

    if(Object.keys(infor).length === 0) return null;

    // Extraer valores con destructuring

    const { strArtistThumb, strGenre, strBiographyES } = infor;

    return ( 
        <div className='card corder-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información Artista
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt='Logo Artista'/>
                <p className='card-text'>Género: {strGenre}</p>
                <h2 className='card-text'>Biografía:</h2>
                <p className='card-text'> {strBiographyES}</p>
                <p className='card-text'> 
                    <a 
                        href={`https://${infor.strFacebook}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a 
                    href={`https://${infor.strTwitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                    href={`${infor.strLastFMChart}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}


Artista.propTypes = {
    infor : PropTypes.object.isRequired
}
 
export default Artista;