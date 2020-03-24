import service from '../services/service'

const state = {
  confirmedPerson:null,
  confirmedDetail:{},
  countryInfo:{},
  daily:{},
  ifDaily:false,
  ifMounth:false,
  mounth:{},

};
const getters = {

   countryConfirmed(state) {
     let obj=[]
     let len = state.confirmedDetail.length
     for (let i=0;i<10;i++){
        obj.push(state.confirmedDetail[i])
     }
     for (let i=0;i<len;i++){
       if (state.confirmedDetail[i].countryRegion == 'Turkey'){
         state.confirmedDetail[i].sira=i+1
         obj.push(state.confirmedDetail[i])
       }
     }
     console.log(obj)
     return obj;
   }
};
const mutations = {
  setConfirmedPerson(state,data){
    state.confirmedPerson=data;
  },
  setConfirmedDetail(state,data){
    state.confirmedDetail=data;
  },
  setCountryDetail(state,data) {
    state.countryInfo=data;
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
    return service.confirmedDeatil().then((snapshot)=>{
      context.commit('setConfirmedDetail',(snapshot))
    })
  },
  deathsDetail(context) {
    return service.confirmedDeatil().then((snapshot)=>{
      context.commit('setConfirmedDetail',(snapshot))
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
