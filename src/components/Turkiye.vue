<template>
  <section>
    <p></p>
    <div class="container">
      <div class="row turkey" >
        <div class="six columns">
          <img class="" src="https://covid19.saglik.gov.tr/img/31mart2020-1.jpg" alt="" >
        </div>
        <div class="six columns">
          <img  src="https://covid19.saglik.gov.tr/img/31mart2020-2.jpg" alt="">
        </div>
        {{test}}
      </div>
      <h2> Buradaki Gorseller saglik bakanliginin sitesinden alinmistir.</h2>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import service from "../services/service";
  const turkey = axios.create({
    baseURL: 'http://covid19gunlukleri.com',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  })
  export default {
    name: "Turkiye",
    data(){
       return{
         test:''
      }
    },
    mounted() {
      this.getData()
    },
    methods:{
      getData(){
        turkey.get('/api').then((res)=>{
          this.test=res
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../assets/css/base/mixin";

  .turkey{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  img{
    width: 100%;
    height: auto;

  }
  h2 {
    text-align: center;
  }

</style>
