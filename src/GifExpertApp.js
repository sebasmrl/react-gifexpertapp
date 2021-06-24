import React, {useState} from 'react'
import { AddCategory} from './components/AddCategory'
import { GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    /* const handlerAdd=()=>{
        //setcategories(['Seven Deadly Sins',...categories]); //aqui puede venir una callback
        setcategories(cats => ['Seven Deadly Sins',...cats]); //aqui puede venir una callback
    } */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>

           

            <ul>
                { 
                    categories.map((category, index) => (
                        <GifGrid 
                            key = {category}
                            category = {category} />
                        ))
                }
            </ul>
        </>
    )
}
