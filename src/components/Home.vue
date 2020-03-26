<template>
  <section class="Home">
    <div class="three columns Home-info">
      <loading class="loading" v-if="!$store.state.ifDaily"></loading>
      <div v-else>
        <div class="Home-info-confirmedPerson" id="confirmed">
          <h3>Toplam Vaka</h3>
          <h4>{{confirmedPersonn}}</h4>
        </div>
        <section class="Home-info-confirmedDetail">
          <div class="Home-info-confirmedDetail-scroll">
            <top10 v-if="$store.state.ifConfirmedDetail" :country-data="confirmedDetail"></top10>
          </div>
        </section>
      </div>
    </div>
    <div class="six columns Home-info">
      <h1 id="grafik">Grafikler</h1>
      <hr>
      <confirmedChart v-if="$store.state.ifDaily" :confirmed="this.$store.state.daily"></confirmedChart>
      <logirithmic v-if="$store.state.ifDaily" :confirmed="this.$store.state.daily"></logirithmic>
      <div class="row">
        <div class="one-half column">
          <comparisonConfirmed v-if="$store.state.ifCountryDaily"
          :confirmeddata="this.$store.state.countryDaily"></comparisonConfirmed>
        </div>
        <div class="one-half column">
          <logCompConfirmed v-if="$store.state.ifCountryDaily"
                               :confirmeddata="this.$store.state.countryDaily"></logCompConfirmed>
        </div>
      </div>
    </div>
    <div class="three columns Home-info">
      <loading v-if="!$store.state.ifDeathDetail" ></loading>
      <div v-else>
        <div class="Home-info-deathsPerson">
          <h3>Toplam Ölüm</h3>
          <h4>{{deathsPerson}}</h4>
        </div>
        <section class="Home-info-deathsDetail">
          <div class="Home-info-deathsDetail-scroll">
            <deathstop10 v-if="$store.state.ifDeathDetail" :death-data="deathDetail"></deathstop10>
          </div>
        </section>
      </div>
    </div>

  </section>
</template>
<script>
  import confirmedChart from "./confirmedChart";
  import {mapGetters} from 'vuex';
  import top10 from './top10'
  import logirithmic from "./logirithmic";
  import deathstop10 from "./deathstop10";
  import comparisonConfirmed from "./comparisonConfirmed";
  import loading from "./loading"
  import logCompConfirmed from "./logCompConfirmed";

  export default {
    name: "Home",
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('daily').then(() => {

      });
      this.$store.dispatch('deathsDetail').then(() => {
      })
      this.$store.dispatch('confirmedDetail').then(() => {
      });
      this.$store.dispatch('countryDaily').then(() => {

      });

    },
    created() {
      this.$store.dispatch('deathsPerson').then(() => {

      });
      this.$store.dispatch('confirmedPerson').then(() => {
      });
    },

    computed: {
      confirmedPersonn() {
        return this.$store.state.confirmedPerson
      },
      deathsPerson() {
        return this.$store.state.deathPerson
      },
      ...mapGetters([
        'countryConfirmed'
      ]),
      deathDetail() {
        return this.$store.state.deathDetail;
      },
      confirmedDetail() {
        return this.$store.state.confirmedDetail;
      },
      comparisonChart() {
        return this.$store.state.countryDaily;
      }
    },
    components: {
      top10,
      confirmedChart,
      logirithmic,
      deathstop10,
      comparisonConfirmed,
      loading,
      logCompConfirmed
    }
  }

</script>

<style lang="scss" scoped>
  @import "../assets/css/base/color";
  @import "../assets/css/base/mixin";

  .Home {
    background-color: ghostwhite;
    position: absolute;
    width: 100%;
    //height: 100%;
    padding: 20px;
    box-sizing: border-box;
    @include mq("tablet") {
      padding: 30px;
    }

    &-info {
      overflow: visible;
      text-align: center;

      h1 {
        color: #025209;
        font-weight: 600;
        font-size: 48px;
        letter-spacing: 2px;
        @include mq('') {
          font-size: 64px;
        }
      }

      &-confirmedPerson {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 7px;
        box-shadow: 3px 3px 30px -1px rgba($koyu, 0.6);
        background-color: $acikkirmizi;
        margin-bottom: 20px;
        border: 3px solid #290212;

        h4 {
          color: #150000;
          font-size: 18vw;
          letter-spacing: 3px;
          font-weight: 600;
          //text-shadow: -2px 0 gray, 0 2px gray, 2px 0 $koyu, 0 -2px $koyu;
          @include mq("tablet") {
            font-size: 3vw;
            //text-shadow: -1px 0 $koyu, 0 1px $koyu, 1px 0 $koyu, 0 -1px $koyu;
          }
        }

        h3 {
          font-weight: bold;
          margin-bottom: 0;
          margin-top: 20px;
          color: black;
          font-size: 9vw;
          @include mq() {
            font-size: 2vw;
          }
        }

      }

      &-confirmedDetail {
        background-color: $acikkirmizi;
        padding: 4px 6px;
        border-radius: 7px;
        box-shadow: 5px 2px 20px -1px rgba(41, 2, 18, 0.6);
        box-sizing: border-box;
        margin-bottom: 40px;
        @include mq('tablet') {
          margin-bottom: 0;
        }

        &-scroll {
          overflow: scroll;
          height: 53vh;
          @include mq() {
            height: 100%;
            overflow: visible;
          }
        }

      }

      &-deathsPerson {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 7px;
        box-shadow: 3px 3px 30px -1px rgba($koyu, 0.6);
        background-color: $yeni;
        margin-bottom: 20px;
        margin-top: 60px;
        border: 3px solid #117a8b;
        @include mq("tablet") {
          margin-top: 0;
        }

        h4 {
          color: #b81611;
          font-size: 18vw;
          letter-spacing: 3px;
          font-weight: 600;
          //text-shadow: -2px 0 gray, 0 2px gray, 2px 0 $koyu, 0 -2px $koyu;
          @include mq("tablet") {
            font-size: 3vw;
            //text-shadow: -1px 0 $koyu, 0 1px $koyu, 1px 0 $koyu, 0 -1px $koyu;
          }
        }

        h3 {
          font-weight: bold;
          margin-bottom: 0;
          margin-top: 20px;
          color: #990c0a;
          font-size: 9vw;
          @include mq() {
            font-size: 2vw;
          }
        }
      }

      &-deathsDetail {
        background-color: #117a8b;
        padding: 4px 6px;
        border-radius: 7px;
        box-shadow: 5px 2px 20px -1px rgba(41, 2, 18, 0.6);
        box-sizing: border-box;
        margin-bottom: 40px;
        @include mq('tablet') {
          margin-bottom: 0;
        }

        &-scroll {
          overflow: scroll;
          height: 53vh;
          @include mq() {
            height: 100%;
            overflow: visible;
          }
        }
      }
    }

    .loading {
      text-align: center;
    }

    .as {
      background-color: #0E566C;
      height: 200px;
    }
  }
</style>
