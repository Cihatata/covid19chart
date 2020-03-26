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

export default {
  confirmedPerson() {
    return request.get('/all')
      .then((res) => {
        return res.data.cases;
      })
  },
  confirmedDeatil() {
    return request.get('/countries?sort=cases')
      .then((res) => {
        return res.data;
      }).then((res) => {
        let obj1 = []
        for (let i = 0; i < 10; i++) {
          obj1.push({
            country: res[i].country,
            province: res[i].country,
            confirmed: res[i].cases,
            counter: i + 1,
          })
        }
        for (let i = 0; i < res.length; i++) {
          if (res[i].country === 'Turkey') {
            obj1.push({
              country: res[i].country,
              province: res[i].country,
              confirmed: res[i].cases,
              counter: i + 1,
            })
          }
        }
        return obj1
      })

  },
  recorvedPerson() {
    return http.get('/')
      .then((res) => {
        return res.data.recorved.value
      })
  },
  recorvedDetail() {
    return http.get('/recorved')
      .then((res) => {
        return res.data
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
        for (let i = 0; i < 10; i++) {
          obj.push({
            country: res[i].country,
            province: res[i].country,
            deaths: res[i].deaths,
            counter: i + 1,
          })
        }
        for (let i = 0; i < res.length; i++) {
          if (res[i].country === 'Turkey') {
            obj.push({
              country: res[i].country,
              province: res[i].country,
              deaths: res[i].deaths,
              counter: i + 1,
            })
          }
        }
        return obj
      })
  },
  countryDetail(countryName) {
    return http.get(`/confirmed/${countryName}`)
      .then((res) => {

      })
  },
  countryDaily(countryName) {
    // return request.get('https://corona.lmao.ninja/v2/historical/' + countryName)
    //   .then((res) => {
    //     console.log(countryName)
    //     let gun = 1;
    //     let ay = 1;
    //     let yil = 20;
    //     let tarih = gun + '/' + ay + '/' + yil
    //     let turkey = {veri: [], ulke: ''}
    //     turkey.ulke = countryName
    //     for (var i = 1; i < 4; i++) {
    //       for (var t = 1; t < 32; t++) {
    //         let tarih2 = i + '/' + t + '/' + yil;
    //         if (res.data.timeline.cases[tarih2] !== undefined) {
    //           turkey.veri.push({x: '2020-' + t + '-' + i, y: res.data.timeline.cases[tarih2]})
    //         }
    //       }
    //     }
    //     console.log(veri)
    //     return turkey;
    //   })

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
        console.log(arr);
        return arr;
      })).catch(errors => {
        // react on errors.
      })
  },
  daily() {
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

        console.log(objTotalConfirmed)
        return [objOtherLocations, objMainlandChina, objTotalConfirmed];
      })
  },
  mounth() {
    return http.get('/daily')
      .then((res) => {
        console.log(res.data[0]);
        for (let i = 0; i < res.data.length; i++) {
          let month = parseInt(res.data[i].reportDate.slice(5, 7))
          switch (month) {
            case 1 :
              res.data[i].reportDate = 'Ocak'
              break;
            case 2:
              res.data[i].reportDate = 'Subat'
              break;
            case 3:
              res.data[i].reportDate = 'Mart'
              break;
            case 4:
              res.data[i].reportDate = 'Nisan'
              break;
            case 5:
              res.data[i].reportDate = 'Mayis'
              break;
            case 6:
              res.data[i].reportDate = 'Haziran'
              break;
            case 7:
              res.data[i].reportDate = 'Temmuz'
              break;
            case 8:
              res.data[i].reportDate = 'Agustos'
              break;
            case 9:
              res.data[i].reportDate = 'Eylul'
              break;
            case 10:
              res.data[i].reportDate = 'Ekim'
              break;
            case 11:
              res.data[i].reportDate = 'Kasim'
              break;
            case 12:
              res.data[i].reportDate = 'Aralik'
              break;
          }
        }
        return res
      }).then((res) => {
        var len = res.data.length;
        var obj = {
          Ocak: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Subat: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Mart: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Nisan: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Mayis: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Haziran: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Temmuz: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Agustos: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Eylul: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Ekim: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Kasim: {
            total: 0,
            china: 0,
            outsideChina: 0
          },
          Aralik: {
            total: 0,
            china: 0,
            outsideChina: 0
          }
        }

        for (let i = 0; i < len; i++) {
          switch (res.data[i].reportDate) {
            case "Ocak":
              obj.Ocak.total += res.data[i].totalConfirmed
              obj.Ocak.china += res.data[i].mainlandChina
              obj.Ocak.outsideChina += res.data[i].otherLocations
              break;
            case "Subat":
              obj.Subat.total += res.data[i].totalConfirmed
              obj.Subat.china += res.data[i].mainlandChina
              obj.Subat.outsideChina += res.data[i].otherLocations
              break;
            case "Mart":
              obj.Mart.total += res.data[i].totalConfirmed
              obj.Mart.china += res.data[i].mainlandChina
              obj.Mart.outsideChina += res.data[i].otherLocations
              break;
            case "Nisan":
              obj.Nisan.total += res.data[i].totalConfirmed
              obj.Nisan.china += res.data[i].mainlandChina
              obj.Nisan.outsideChina += res.data[i].otherLocations
              break;
            case "Mayis":
              obj.Mayis.total += res.data[i].totalConfirmed
              obj.Mayis.china += res.data[i].mainlandChina
              obj.Mayis.outsideChina += res.data[i].otherLocations
              break;
            case "Haziran":
              obj.Haziran.total += res.data[i].totalConfirmed
              obj.Haziran.china += res.data[i].mainlandChina
              obj.Haziran.outsideChina += res.data[i].otherLocations
              break;
            case "Temmuz":
              obj.Temmuz.total += res.data[i].totalConfirmed
              obj.Temmuz.china += res.data[i].mainlandChina
              obj.Temmuz.outsideChina += res.data[i].otherLocations
              break;
            case "Agustos":
              obj.Agustos.total += res.data[i].totalConfirmed
              obj.Agustos.china += res.data[i].mainlandChina
              obj.Agustos.outsideChina += res.data[i].otherLocations
              break;
            case "Eylul":
              obj.Eylul.total += res.data[i].totalConfirmed
              obj.Eylul.china += res.data[i].mainlandChina
              obj.Eylul.outsideChina += res.data[i].otherLocations
              break;
            case "Ekim":
              obj.Ekim.total += res.data[i].totalConfirmed
              obj.Ekim.china += res.data[i].mainlandChina
              obj.Ekim.outsideChina += res.data[i].otherLocations
              break;
            case "Kasim":
              obj.Kasim.total += res.data[i].totalConfirmed
              obj.Kasim.china += res.data[i].mainlandChina
              obj.Kasim.outsideChina += res.data[i].otherLocations
              break;
            case "Aralik":
              obj.Aralik.total += res.data[i].totalConfirmed
              obj.Aralik.china += res.data[i].mainlandChina
              obj.Aralik.outsideChina += res.data[i].otherLocations
              break;
          }
        }
        return obj;
      })
  }
}
