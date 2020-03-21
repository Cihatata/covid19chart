<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Home from './components/Home'
  import Turkiye from "./components/Turkiye";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,
    Home,
    Turkiye,
  }
}
</script>

<style lang="scss">
  @import "./assets/css/skeleton";
#app {

}


</style>
