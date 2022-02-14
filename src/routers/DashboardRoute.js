import { Route, Routes,  } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Navbar } from '../components/ui/NavBar';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoute = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes >

                <Route path="/"        element={ <MarvelScreen />} />
                <Route path="/marvel"  element={ <MarvelScreen />} />
                <Route path="/dc"      element={ <DcScreen     />} />
                <Route path="/search"  element={ <SearchScreen />} />
                <Route path="/hero/:heroeId"    element={ <HeroScreen   />} />
                
            </Routes>
        </div>
    </>
  );
};
 