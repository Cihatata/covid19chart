import service from '../services/service'

const state = {
  confirmedPerson:null,
  deathPerson:null,
  confirmedDetail:{},
  deathDetail:{},
  countryInfo:{},
  daily:{},
  ifConfirmedDetail:false,
  ifDaily:false,
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
  setDaily(state,data){
    state.daily=data;
    state.ifDaily=true
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
  countryDaily(context){
    return service.countryDaily().then((snapshot)=>{
      context.commit('setCountryDetail',(snapshot))
    })
  },
  daily(context){
    return service.daily().then((snapshot)=>{
      context.commit('setDaily',(snapshot))
    })
  }

};
export default {
  state,
  getters,
  mutations,
  actions,
};
