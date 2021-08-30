import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => { //aqui viene un objeto llamado props sino se desestructura despues se llamaria props.setCategories

    const [inputValue, setInputValue] = useState(''); //el input por defecto esta vacio por el valor inicial del state

    
    const handdleInputChange = ( e ) => {
        //console.log(e.target.value)
        //para que se pueda escribir en el input
        setInputValue(e.target.value) //esto el valor del input
        //console.log('handdleInputChange llamado');
    }

    const handdleSubmit = (e) => {
        e.preventDefault()
       // console.log('HanddleSubmit llamado'); 
        //console.log('Submit Hecho', )

        //validar qe}ue el texto sea lo sufientemente extenso
        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats]) //cats ->categories  -primero el evento iputChange y luego el enter y queda lo ultimo escrito
            setInputValue('');
        }
    } 

    //Debo retornar un jsx para que se pinte
    return (
            <form onSubmit={handdleSubmit}>
                <p>{inputValue}</p> {/* Solo es para las pruebas*/}
                {/* <h1>{inputValue}</h1> */}
                <input 
                    type='text'
                    value={inputValue}
                    onChange={handdleInputChange}
                />  
            </form>
    ) 
}

AddCategory.propTypes = {
        setCategories : PropTypes.func.isRequired
    }
