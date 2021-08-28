import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => { //recibe la categoria que se la estoy entregando en GifGrid
   
    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );
    

        //NOTA: getGift retorna un arreglo de objetos que tienen  [{id, title url}, {id,title,url}]

    useEffect(()=>{
        getGifs(category) //uso del helper getGifs    //id, title url    - category es el titulo de la busqueda que hice
            .then(gifs => { //  gifs = [{id, title url}, {id,title,url}]
                
                //hook para cambiar la informacion
                setState({ 
                    data: gifs,
                    loading: false //loading en false porque termine de cargar 
                });   
                
                
            })
    }, [category]); //si category cambia se renderiza de nuevo aunque por la logica este no se modifica (cargaria de nuevo un item como ej: one punch)
                    //no cambiara porque categoria es un valor que se inserta y queda ahi

    return state; //retorna el valor del hook
    //NOTA: la funcion se ejecuta y envia el state que tiene loading en true pero despues el getgif hace que el estado cambie y el loading sea false
}