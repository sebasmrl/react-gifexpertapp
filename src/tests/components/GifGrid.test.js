import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

//para fingir que el useFetchGifs se ejecuto, 
//fingir cualquier llamada a ese archivo
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas en < GifGrid />', () => {
    const category = 'One Punch';
    

    test('Se debe renderizar correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();

    });



    test('Debe de mostrar items cuando se cargan imagenes con el useFetchGifs', () => {
         //hacer un mock para fingir algo para que le componente crea que tengo
         // tiene la informacion resuelta producto del customHook 
        const gifs = [
            {
                id: 'ABC',
                url : 'http://localhost/cualquiercosa/coa.img',
                title: 'Cualquier cosa'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);
         
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length) //que hayan el mismo numero de componente GifGridItem que manda la peticion fetch
    });
    


})
