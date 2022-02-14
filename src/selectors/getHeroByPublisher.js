import { heroes } from "../data/hero"


export const getHeroByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics']
    if( !validPublisher.includes(publisher)){
        throw new Error(`${publisher } no válido`)
    }
    return heroes.filter( hero => hero.publisher === publisher );

}