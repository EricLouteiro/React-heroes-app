import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate();

    const heroe = useMemo(() => getHeroById(heroeId), [ heroeId ]);

    const imagePath = `/assets/${heroe.id}.jpg`

    if( !heroe ){
        return <Navigate to='/' />
    }

    const handleReturn = () => {
        navigate( -1 );
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={ imagePath }
                    alt={ heroe.superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8 animate__animated animate__fadeInRight' >
                <h3>{ heroe.superhero}</h3>
                <ul className='list-group'>
                    <li className='list-group-item'> <b>Alter Ego:</b> { heroe.alter_ego }</li>
                    <li className='list-group-item'> <b>Publisher:</b> { heroe.publisher }</li>
                    <li className='list-group-item'> <b>First Appearance:</b> { heroe.first_appearance }</li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{ heroe.characters }</p>

                <button
                    className='btn btn-outline-info'
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};
