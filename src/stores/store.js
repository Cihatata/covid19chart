import service from '../services/service'

const state = {
  confirmedPerson:null,
  confirmedDetail:{},
  countryInfo:{}
};
const getters = {
   countryConfirmed(state){
     let len = state.confirmedDetail.length;
     console.log(len);
     let chineSumConfirmed=0;
     let usSumConfirmed = 0;
     for( var i=0;i<len;i++){
       if(state.confirmedDetail[i].countryRegion === "China"){
         chineSumConfirmed+= state.confirmedDetail[i].confirmed;
         state.confirmedDetail.splice(i,1);
         len--;
       } else if (state.confirmedDetail[i].countryRegion === "US"){
          usSumConfirmed+= state.confirmedDetail[i].confirmed;
          state.confirmedDetail.splice(i,1);
          len--;
       }

     }
    console.log(state.confirmedDetail.length)
     console.log('xx')
     return [chineSumConfirmed,usSumConfirmed];
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
  }

};
const actions = {
  confirmedPerson(context) {
    return service.confirmedPerson().then((snapshot)=>{
        context.commit('setConfirmedPerson',snapshot);
    })
  } ,
  confirmedDetail(context) {
    return service.confirmedDeatil().then((snapshot)=>{
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
};
export default {
  state,
  getters,
  mutations,
  actions,
};
