<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-flag">
            <img :src="$store.state.countryQuery.countryInfo.flag" alt="">
          </div>
          <div class="card-info">
            <h3 class="card-info-title">{{$store.state.countryQuery.country}}</h3>
            <p class="card-info-context">Vaka : {{$store.state.countryQuery.cases}}</p>
            <p class="card-info-context">Ölüm : {{$store.state.countryQuery.deaths}}</p>
            <p class="card-info-context">İyileşen : {{$store.state.countryQuery.recovered}}</p>
          </div>

        </div>
      </div>
    </div>
    <div class="row chart">
      <div class="six columns">
        <countryInfoChart v-if="$store.state.ifCountryTimeLineQuery" :data="$store.state.countryTimeLineQuery"></countryInfoChart>
      </div>
      <div class="six columns">
          <dailyIncreaseCountry v-if="$store.state.ifDailyCaseIncrease" :data="$store.state.dailyCaseIncrease"></dailyIncreaseCountry>
      </div>
    </div>
  </section>
</template>

<script>
  import service from "../services/service";
  import countryInfoChart from "./countryInfoChart";
  import dailyIncreaseCountry from "./dailyIncreaseCountry";
  export default {
    name: "countryInfo",
    created() {
      this.$store.dispatch('countryQuery', this.$route.params.ulke)
      this.$store.dispatch('countryTimeLineQuery',this.$route.params.ulke)
      this.$store.dispatch('dailyCaseIncrease',this.$route.params.ulke).then(()=>{

      })
    },
    computed: {
      // async getir() {
      //   const data = await service.confirmedPerson()
      //   return data

    },
    components:{
      countryInfoChart,
      dailyIncreaseCountry,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/base/mixin";
  @import "../assets/css/base/color";

  .card {
    width: 92%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 .5em 1em -.125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .02);
    color: #4a4a4a;
    display: flex;
    padding: 2.5rem;
    box-sizing: border-box;
    @include mq('tablet') {
      width: 25%;
    }

    &-info {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 30px;
      @include mq('tablet') {
        margin-left: 40px;
      }

      &-context {
        font-size: 20px;
        line-height: 1.5;
        font-weight: 400;
        color: #4a4a4a;;
        font-family: 'Open Sans', serif;
      }
    }

    &-flag {
      img {
        width: 64px;
        height: auto;
      }
    }
  }
  .chart{
    width: 95%;
    margin-left: auto ;
    margin-right: auto ;
  }
</style>
