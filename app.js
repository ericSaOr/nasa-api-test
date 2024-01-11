async function getNasaPhoto(){
    const response = await fetch("https://api.nasa.gov/apod/?api_key=dKbq9NCkQoy3F8pbmkjH5D2cBLRaYzbK1EkgO5Hx&date=2014-10-01&concept_tags=True");
    const nasaPhotos = await response.json();
    console.log(nasaPhotos);
}       

getNasaPhoto();


