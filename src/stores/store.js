import service from '../services/service'

const state = {
  confirmedPerson:null
};
const getters = {

};
const mutations = {
  setConfirmedPerson(state,data){
    console.log(data)
    state.confirmedPerson=data;
  }

};
const actions = {
  confirmedPerson(context) {
    return service.confirmedPerson().then((snapshot)=>{
      console.log(snapshot)
        context.commit('setConfirmedPerson',snapshot);
    })
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
