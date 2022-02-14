
import { heroes } from "../data/hero"

export const getHeroByName = ( name = '') => {
    console.log(name);
    return ( name === '' )
        ? []
        : heroes.filter( heroe => heroe.superhero.toLowerCase().includes(name) )
}