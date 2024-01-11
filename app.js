
const url="https://api.nasa.gov/planetary/apod?api_key=" 
const api_key = "dKbq9NCkQoy3F8pbmkjH5D2cBLRaYzbK1EkgO5Hx";
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



