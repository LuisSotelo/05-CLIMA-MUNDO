const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encoderUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: {'X-RapidAPI-Key': 'bf28a0984bmsh4bb27b6862697f5p19d77djsn37af161c96d4'}
      });

    const mapa = axios.create({
        baseURL: `dd00a35517a722f473c289e8b55011da`
    });
    
      const resp= await instance.get();

      if (resp.data.Results.lenght ===0){
          throw new Error(`No hay resultados para ${dir}`);
      }
      
      const data = resp.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}
    
    module.exports ={
        getLugarLatLng
    }

