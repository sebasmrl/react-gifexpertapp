import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
   
    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );
    
    useEffect(()=>{
        getGifs(category) //uso del helper
            .then(gifs => {
                
                //hook para cambiar la informacion
                setState({ 
                    data: gifs,
                    loading: false
                });   
                
                
            })
    }, [category]); //si category cambia se renderiza de nuevo aunque por la logica este no se modifica (cargaria de nuevo un item como ej: one punch)


    return state
}