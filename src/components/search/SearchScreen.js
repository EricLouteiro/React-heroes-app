import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';

import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import { heroes } from '../../data/hero';

export const SearchScreen = () => {

  
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);
  
  const [ formValues, handleInputChange ] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = ( e ) => {
    e.preventDefault();
    
    navigate( `?q=${ searchText }` )
  } 
  
    return (
      <>
        <div className='row'>
          <div className='col-5 mt-3 animate__animated animate__fadeInLeft'>
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={ handleSearch }>
              <input 
                type='text'
                className='form-control'
                autoComplete='off'
                name='searchText'
                placeholder='Buscar a un héroe'
                onChange={ handleInputChange }
                value={ searchText }
              />

              <button
                className='btn btn-outline-primary mt-2'
                type='submit'
              >
                Buscar...
              </button>

            </form>
          </div>

          <div className='col-7 mt-3 animate__animated animate__fadeInRight'>

            {
              (q === '')
                  ? <div className='alert alert-info'> Buscar un Héroe </div>
                  : ( heroesFiltered.length === 0 ) 
                        && <div className='alert alert-danger animate__animated animate__fadeInUp'> No hay resultados para { q }</div>
            }
            
            {
              heroesFiltered.map(hero => (
                <HeroCard
                  key={ hero.id }
                  { ...hero }
                />
              ))
            }
            
            
          </div>

        </div>
      </>
    )
};
