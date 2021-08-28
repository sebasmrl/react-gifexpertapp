import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({category}) => {


    //Hooks - custom hooks
    //mando la categoria para hacer el  getGifs(category) dentro del customhook
    const {data: images, loading } = useFetchGifs(category); //images = [{id,title,url}, {id,title,url}]
    //console.log(loading)
    //un nuevo mensaje en GifGrid el 27/08/2021 a la 5:49pm
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {/* si loading es true entonces evalua la segunda porque en AND hace eso, y en si termina mostrando el componente, depues cabian es estado y al volverse a renderizar loading vale false y no se pinta el parrafo ""loading*/}
        {loading && <p className="animate__animated animate__flash">Loading</p> }
        
        <div className="card-grid">
                
                {
                    images.map( img =>(
                         <GifGridItem 
                            key={img.id}
                            {...img}
                         />
                    ))
                }
                
        </div>
        </>
    )
}
