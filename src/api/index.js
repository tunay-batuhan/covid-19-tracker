import axios from 'axios';


const url ="https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeableUrl = url;
  
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };


export const fetchDataCountry = async () => {
    try{
        const response = await axios.get('https://covid19.mathdro.id/api/countries');
        
        return response.data.countries.map(data =>data.name);
        
    } catch(error){

    }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };



// const response = await axios.get(url);
//         const modifiData = {
//             confirmed: response.data.confirmed,
//             recovered: response.data.recovered,
//             deaths: response.data.deaths,
//             lastUpdate: response.data.lastUpdate
//         } 
//         return modifiData;