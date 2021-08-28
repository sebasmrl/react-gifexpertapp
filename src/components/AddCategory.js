import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => { //aqui viene un objeto llamado props sino se desestructura despues se llamaria props.setCategories

    const [inputValue, setinputValue] = useState(''); //el input por defecto esta vacio por el valor inicial del state

    
    const haddleInputChange = ( e ) => {
        //console.log(e.target.value)
        //para que se pueda escribir en el input
        setinputValue(e.target.value) //esto el valor del input
    }

    const handdleSubmit = (e) => {
        e.preventDefault()
        //console.log('Submit Hecho', )

        //validar qe}ue el texto sea lo sufientemente extenso
        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats]) //cats ->categories  -primero el evento iputChange y luego el enter y queda lo ultimo escrito
            setinputValue('');
        }
    } 

    //Debo retornar un jsx para que se pinte
    return (
            <form onSubmit={handdleSubmit}>
                {/* <h1>{inputValue}</h1> */}
                <input 
                    type='text'
                    value={inputValue}
                    onChange={haddleInputChange}
                />  
            </form>
    ) 
}

AddCategory.propTypes = {
        setCategories : PropTypes.func.isRequired
    }
