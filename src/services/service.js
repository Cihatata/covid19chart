import axios from 'axios'


const http = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',

});
const request = axios.create({
  baseURL: 'https://corona.lmao.ninja',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
const turkey = axios.create({
  baseURL: 'http://api.coronanaliz.com',
  // headers:{
  //   'Access-Control-Allow-Origin':'*'
  // }
})

function createObjectforChart(obj) {
  let gun = 32;
  let ay = 5;
  let yil = 20;
  let newObje = {date: [], name: ''}
  newObje.name = obj.country
  for (var i = 1; i < ay; i++) {
    for (var t = 1; t < gun; t++) {
      let tarih2 = i + '/' + t + '/' + yil;

      if (obj.timeline.cases[tarih2] !== undefined) {
        newObje.date.push({x: '2020-' + i + '-' + t, y: obj.timeline.cases[tarih2]})
      }
    }
  }
  return newObje;
}
function createObjectforCountryChart(obj) {
  let gun = 32;
  let ay = 5;
  let yil = 20;
  let Obje = {
    cases:{
    date:[]
    },
    deaths:{
    date:[]
    },
    name: ''}
  Obje.name = obj.country
  for (var i = 1; i < ay; i++) {
    for (var t = 1; t < gun; t++) {
      let tarih2 = i + '/' + t + '/' + yil;
      if (obj.timeline.cases[tarih2] !== undefined && obj.timeline.deaths[tarih2]) {
        Obje.cases.date.push({x: '2020-' + i + '-' + t, y: obj.timeline.cases[tarih2]})
        Obje.deaths.date.push({x: '2020-' + i + '-' + t, y: obj.timeline.deaths[tarih2]})

      }
    }
  }
  return Obje;
}
function dailyDifferent(obj) {
  let day = 32;
  let month = 5;
  let year = 20;
  let year2 = 2020
  let Obje = {
    cases:{
      date:[]
    },
    deaths:{
      date:[]
    },
    name: ''}
  Obje.name = obj.country
  for (var i = 1; i < month; i++) {
    for (var t = 1; t < day; t++) {
      let date2 = i + '/' + t + '/' + year;
      let date = new Date(`${year2}-${i}-${t}`)
      date.setDate(date.getDate() - 1);
      date = date.toLocaleDateString();
      let arr = date.split('/');
      date = arr[0] + '/' + arr[1] + '/' + year
      if (obj.timeline.cases[date2] !== undefined && obj.timeline.deaths[date2]!==undefined && obj.timeline.deaths[date]!==undefined && obj.timeline.cases[date] ) {
        Obje.cases.date.push({x: '2020-' + i + '-' + t, y: obj.timeline.cases[date2]-obj.timeline.cases[date]})
        Obje.deaths.date.push({x: '2020-' + i + '-' + t, y: obj.timeline.deaths[date2]-obj.timeline.deaths[date]})
      }
    }
  }
  return Obje;
}


export default {
  request,
  turkey,
  confirmedPerson() {
    return request.get('/all')
      .then((res) => {
        return res.data.cases;
      })
  },
  country(){
    return request.get('/countries')
      .then((res)=>{
        return res.data;
      })
  },
  confirmedDeatil() {
    return request.get('/countries?sort=cases')
      .then((res) => {
        return res.data;
      }).then((res) => {
        let obj1 = []
        for (let i = 0; i < 20; i++) {
          obj1.push({
            country: res[i].country,
            province: res[i].country,
            confirmed: res[i].cases,
            counter: i + 1,
          })
        }
        return obj1
      })

  },
  deathsPerson() {
    return request.get('/all')
      .then((res) => {
        return res.data.deaths
      })
  },
  deathsDetail() {
    return request.get('/countries?sort=deaths')
      .then((res) => {
        return res.data
      }).then((res) => {
        let obj = []
        for (let i = 0; i < 20; i++) {
          obj.push({
            country: res[i].country,
            province: res[i].country,
            deaths: res[i].deaths,
            counter: i + 1,
          })
        }
        return obj
      })
  },
  countryTimeLineQuery(countryName) {
    return request.get(`/v2/historical/${countryName}`)
      .then((res) => {
        let obj=createObjectforCountryChart(res.data)
        return obj
      })
  },
  countryDaily() {

    const requestOne = request.get('/v2/historical/turkey', );
    const requestTwo = request.get('/v2/historical/iran');
    const requestThree = request.get('/v2/historical/france');
    const requestFour = request.get('/v2/historical/spain');
    const requestFive = request.get('/v2/historical/usa');
    const requestSix = request.get('/v2/historical/S. Korea');
    const requestSeven = request.get('/v2/historical/italy');
    //const requestNine = request.get('/historical/UK');


    return axios.all([requestOne, requestTwo, requestThree, requestFour,requestFive,requestSix,requestSeven])
      .then(axios.spread((...responses) => {
        const responseOne = createObjectforChart(responses[0].data)
        const responseTwo = createObjectforChart(responses[1].data)
        const responesThree = createObjectforChart(responses[2].data)
        const responesFour = createObjectforChart(responses[3].data)
        const responesFive = createObjectforChart(responses[4].data)
        const responesSix = createObjectforChart(responses[5].data)
        const responesSeven = createObjectforChart(responses[6].data)
        //const responesEight = createObjectforChart(responses[7].data)
       // const responesNine = createObjectforChart(responses[8].data)

        let arr = [responseOne, responseTwo, responesThree,responesFour,responesFive,responesSix,responesSeven]
        return arr;
      })).catch(errors => {
        // react on errors.
      })
  },
  dailyConfirmed() {
    return http.get('/daily')
      .then((res) => {
        let objTotalConfirmed = []
        let objMainlandChina = []
        let objOtherLocations = []

        for (let i = 0; i < res.data.length; i++) {
          objTotalConfirmed.push(
            {
              x: res.data[i].reportDate,
              y: res.data[i].totalConfirmed
            },
          )
          objMainlandChina.push(
            {
              x: res.data[i].reportDate,
              y: res.data[i].mainlandChina
            }
          )
          objOtherLocations.push({
            x: res.data[i].reportDate,
            y: res.data[i].otherLocations
          })

        }
        return [objOtherLocations, objMainlandChina, objTotalConfirmed];
      })
  },
  dailyDeaths(){
    return http.get('/daily')
      .then((res) => {
        let objTotalDeaths = []
        let objMainlandChina = []
        let objOtherLocations = []

        for (let i = 0; i < res.data.length; i++) {
          objTotalDeaths.push(
            {
              x: res.data[i].reportDate,
              y: res.data[i].deaths.total
            },
          )
          objMainlandChina.push(
            {
              x: res.data[i].reportDate,
              y: res.data[i].deaths.china
            }
          )
          objOtherLocations.push({
            x: res.data[i].reportDate,
            y: res.data[i].deaths.outsideChina
          })

        }
        return [objOtherLocations, objMainlandChina, objTotalDeaths];
      })
  },
  countryQuery(query) {
    return  request.get(`/countries/${query}`)
      .then((res)=>{
        return res.data
      })
  },
  dailyCaseIncrease(countryName) {
    return  request.get(`/v2/historical/${countryName}`)
      .then((res)=>{
        let obj =  dailyDifferent(res.data)
        return obj
      })

  }

}
