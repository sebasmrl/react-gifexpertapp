import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    
    const haddleInputChange = ( e ) => {
        //console.log(e.target.value)
        setinputValue(e.target.value)
    }

    const handdleSubmit = (e) => {
        e.preventDefault()
        //console.log('Submit Hecho', )

        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats])
            setinputValue('');
        }
    } 


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
