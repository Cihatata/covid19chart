import axios from 'axios'

const http = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
});

export default {
  confirmedPerson(){
    return http.get('/')
      .then((res)=> {
        console.log(res.data.confirmed.value)
        return res.data.confirmed.value;
      })
  },
  confirmedDeatil(){
    return http.get('/confirmed')
      .then((res)=> {
        return res.data;
      })
  },
  recorvedPerson(){
    return http.get('/')
      .then((res)=> {
        return res.data.recorved.value
      })
  },
  recorvedDetail(){
    return http.get('/recorved')
      .then((res)=> {
        return res.data
      })
  },
  deathsPerson(){
    return http.get('/')
      .then((res)=> {
        return res.data.deaths.value
      })
  },
  deathsDetail(){
    return http.get('/deaths')
      .then((res)=> {
        return res.data
      })
  },
  countryDetail(countryName){
    return http.get(`/confirmed/${countryName}`)
      .then((res)=> {
        return res.data.value
      })
  }
}
