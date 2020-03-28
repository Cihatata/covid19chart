import service from '../services/service'

const state = {
  confirmedPerson:null,
  deathPerson:null,
  confirmedDetail:{},
  deathDetail:{},
  countryInfo:{},
  countryDaily:[],
  dailyConfirmed:{},
  countryTimeLineQuery:{},
  dailyDeaths:{},
  countryQuery:{},
  ifCountryQuery:false,
  ifConfirmedDetail:false,
  ifCountryDaily:false,
  ifDailyDeaths:false,
  ifDailyConfirmed:false,
  ifMounth:false,
  ifDeathDetail:false,
  mounth:{},


};
const getters = {

   countryConfirmed(state) {

   }
};
const mutations = {
  setConfirmedPerson(state,data){
    state.confirmedPerson=data;
  },
  setConfirmedDetail(state,data){
    state.confirmedDetail=data;
    state.ifConfirmedDetail=true;
  },
  setCountryDetail(state,data) {
    state.countryInfo=data;
  },
  setDeathsPerson(state,data){
    state.deathPerson=data;
  },
  setDeathsDetail(state,data){
    state.deathDetail=data;
    state.ifDeathDetail=true;
  },
  setMounth(state,data){
    state.mounth=data;
    state.ifMounth=true;
  },
  setDailyConfirmed(state,data){
    state.dailyConfirmed=data;
    state.ifDailyConfirmed=true
  },
  setDailyDeaths(state,data){
    state.dailyDeaths=data;
    state.ifDailyDeaths=true;
  },
  setCountryDaily(state,data){
    state.countryDaily=data;
    state.ifCountryDaily=true;
  },
  setTimelineQuery(state,data){
    state.countryTimeLineQuery=data;
  },
  setCountryQuery(state,data){
    state.countryQuery=data;
    state.ifCountryQuery=true;
  }

};
const actions = {
  confirmedPerson(context) {
    return service.confirmedPerson().then((snapshot)=>{
        context.commit('setConfirmedPerson',snapshot);
    })
  } ,
  confirmedDetail(context) {
    return  service.confirmedDeatil().then((snapshot)=>{
      context.commit('setConfirmedDetail',(snapshot))
    })

  },
  recorvedPerson(context) {
    return service.recorvedPerson().then((snapshot)=>{
      context.commit('setRecorvedPerson',(snapshot))
    })

  },
  recorvedDetail(context) {
    return service.confirmedDeatil().then((snapshot)=>{
      context.commit('setConfirmedDetail',(snapshot))
    })

  },
  deathsPerson(context) {
    return service.deathsPerson().then((snapshot)=>{
      context.commit('setDeathsPerson',(snapshot))
    })
  },
  deathsDetail(context) {
    return service.deathsDetail().then((snapshot)=>{
      context.commit('setDeathsDetail',(snapshot))
    })
  },
  countryDetail(context,country) {
    return service.confirmedDeatil(country).then((snapshot)=>{
      context.commit('setCountryDetail',(snapshot))
    })
  },
  mounth(context){
    return service.mounth().then((snapshot)=>{
        context.commit('setMounth',(snapshot))
    })
  },
  countryDaily(context,){
    return service.countryDaily().then((snapshot)=>{
      context.commit('setCountryDaily',(snapshot))
    })
  },
  dailyConfirmed(context){
    return service.dailyConfirmed().then((snapshot)=>{
      context.commit('setDailyConfirmed',(snapshot))
    })
  },
  dailyDeaths(context){
    return service.dailyDeaths().then((snapshot)=>{
      context.commit('setDailyDeaths',(snapshot))
    })
  },
  countryTimeLineQuery(context,query){
    return service.countryTimeLineQuery(query).then((res)=>{
      context.commit('setTimelineQuery',(res))
    })
  },
  countryQuery(context,query){
    return service.countryQuery(query).then((res)=>{
      context.commit('setCountryQuery',(res))
    })
  }

};
export default {
  state,
  getters,
  mutations,
  actions,
};
