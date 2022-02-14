import { useState } from 'react'


export const useForm = (initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputCahnge = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    
    return [ values, handleInputCahnge, reset ];
}
