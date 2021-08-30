import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";



describe("Pruebas en <GifGridItem />", ()=>{
    const obj= {
        title: "Saitama", 
        url:"https://media3.giphy.com/media/DuVRadBbaX6A8/giphy.gif?cid=d90e7e9ayw79ydhltyyk5vvpy472z3czrl9ao2vk3j35tb4l&rid=giphy.gif&ct=g"
    };

    const wrapper = shallow(<GifGridItem { ...obj}/>);

    test('Se debe mostrar el componente correctamente', () => {
        
        
        
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim() ).toBe( obj.title);

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img =wrapper.find('img'); // com la imagen es una sola en componente colocamos el selctor en img pero podria ser por id #img-portada
       // console.log(img.html()); trabajar con base a un string
       //analizar con enzyme las propiedades (props) del componente <img> para
       //las props son src: "" y alt: ''
       //console.log(img.props().src);
       //console.log(img.prop('src')); //evaluar solo una propiedad 
       expect(img.prop('src')).toBe(obj.url);
       expect(img.prop('alt')).toBe(obj.title);
    });

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeIn')).toBe(true); 
        //expect(div.prop('className').includes('animate__fadeIn')).not.toBe(false); //negacion
    })
    
    
    
    




})