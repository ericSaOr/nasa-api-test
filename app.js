
const url="https://api.nasa.gov/planetary/apod?api_key=" 
const api_key = "dKbq9NCkQoy3F8pbmkjH5D2cBLRaYzbK1EkgO5Hx";
// const api_key = config.NASA_API_KEY
console.log(api_key)

const fetchNasaPhotos = async () =>{
    try {
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log('NASA APOD data', data)
            displayData(data)
        
    }catch(error){
        console.log(error)
    }
}



const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.url
    document.getElementById('blurb').textContent = data.explanation
}


fetchNasaPhotos()
