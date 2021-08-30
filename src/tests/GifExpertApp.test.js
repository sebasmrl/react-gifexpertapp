import React from 'react'
import '@testing-library/jest-dom'

import Enzyme, { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'


describe('Pruebas en  <GifExpertApp />', () => {
    
    test('Debe renderizarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });
     
    test('Debe de mostrar una lista de categorias añadidas con los valores por defecto', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    


})
