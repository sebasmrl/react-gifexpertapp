import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el Hook useFetchGifs', () => {
    


    test('Debe de retornar el estado inicial', async() => {
        
        const category = 'One Punch'
        //crea un componente virtual y ahi renderizara el customhook (usuarlmente se destructura de una sin colocar const resp = renderHook-)
        //const resp = renderHook(()=>{ return  useFetchGifs(category);})
        const { result, waitForNextUpdate} = renderHook(()=>useFetchGifs(category))
        const {data: images, loading } = result.current; //const {data: images, loading } = useFetchGifs(category); //images = [{id,title,url}, {id,title,url}]
        
        await waitForNextUpdate();
        //console.log(images, loading);

        expect(images).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false ', async() => {
        
        const category = 'One Punch'
        // waitForNextUpdate es una funcion que regresa una promise que n resuleve nada 
        //pero indica cuando sucedio un cambio en el estado del customHook, hace la limpieza
        // renderHookdevuelve algunas utilidades que permiten que la prueba espere a que el gancho se actualice usando async/await(o simplemente prometa devoluciones de llamada si lo prefiere). La utilidad asincrónica más básica se llama waitForNextUpdate.
        const { result, waitForNextUpdate} = renderHook(()=>useFetchGifs(category))
        await waitForNextUpdate();

        const {data: images, loading } = result.current;

        expect(images.length).toBe(10);
        expect(loading).toBe(false); 
    })
    
    
})
