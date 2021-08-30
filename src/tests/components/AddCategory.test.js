import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom'

describe('Pruebas en AddCategory />', () => {
    
    //const setCategories = () => {} //no tengo forma de saber si se llamo con que argumentos lo hizo 
    const setCategories = jest.fn(); //puedo saber si fue llamada, cuantas veces, etc
    const setInputValue = jest.fn(); 
    //es para la ayuda pero pero puede ser let wrapper;
    let wrapper = shallow(<AddCategory setCategories={ setCategories} />);
    
    beforeEach(() => {
        jest.clearAllMocks(); // Se llama para si se tenia un mock, o una simulacion de algo que todo se limpie (se hace si estamos haciendo funciones y otros mocks)
        wrapper = shallow(<AddCategory setCategories={ setCategories} />);
        
    });

    test('debe de mostrarse el componente', () => {
        
        expect(wrapper).toMatchSnapshot();  
    });

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        //podria dar un error con el valor del evento por ello se desesctructura asi
        //-->por eso le envio un objeto que simlua lo que contiene el 'e' para qu cuando llame a e.target.value no de error
        input.simulate('change', { 
            target: {
                value // es como si fuera value: value
            } 
        });  //e.target.value desestructurado //{lo que esto mandando en el evento}

        expect(wrapper.find('p').text().trim()).toBe(value); //para probar el error toBe(value+'1'); 

    });


    //Simulular el setCategories que es un parametro del componente AddCategory

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }) //el seundo arg de simulate es un objeto de argumetos del evento a simular

        expect(setCategories).not.toHaveBeenCalled();
    
    });


    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo'; 

        //lo simulo pero no se ejecuta hasta que ejecuto una el setInputValue que en este caos es cuando se hace el submit
        input.simulate('change', { target: { value }  });
        
        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} }) 
        
        //3. setCategories debe ser llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); //se espera que se llame 1 vez
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function)); //sea llamada con una funcion que la callback del state 

        //4. el valor el inpu debe ser ''
        expect(input.prop('value').trim()).toBe('');
    
    })
    
    

    

    
});

