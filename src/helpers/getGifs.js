export const getGifs = async(category) => {
        

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=jIJ22etInUGvAMi56Q2qiTENp00eCk0t`

    const resp = await fetch(url);
    const {data} = await resp.json();
    //console.log(data);

    //map retorna un arreglo
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    //console.log(gifs)
    return gifs; //retorna un arreglo de objetos [{id,title,url}, {id,title,url}]
}