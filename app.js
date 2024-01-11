const url="https://api.nasa.giv/planetary/apid?api_key="
const api_key = config.NASA_API_KEY;
console.log(api_key)

const fetchNasaPhotos = async () =>{
    try {
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log('NASA APOD data', data)
            
        
    }catch(error){
        console.log(error)
    }
}

fetchNasaPhotos()



