<template>
  <section class="Home">
    <div class="three columns Home-info">
      <div class="Home-info-confirmedPerson">
        <h3>Toplam Vaka Sayisi</h3>
        <h4>{{confirmedPersonn}}</h4>
      </div>
      <section class="Home-info-confirmedDetail">
        <div class="Home-info-confirmedDetail-scroll">
          <top10 v-if="$store.state.ifConfirmedDetail" :country-data="confirmedDetail"></top10>
        </div>
      </section>
    </div>
    <div class="six columns Home-info">
      <confirmedChart v-if="$store.state.ifDaily" :confirmed="this.$store.state.daily"></confirmedChart>
      <logirithmic v-if="$store.state.ifDaily" :confirmed="this.$store.state.daily"></logirithmic>
    </div>
    <div v-if="$store.state.ifDaily" class="three columns Home-info">
      <div class="Home-info-confirmedPerson">
        <h3>Toplam Olu sayisi</h3>
        <h4>{{deathsPerson}}</h4>
      </div>
      <section class="Home-info-confirmedDetail">
        <div class="Home-info-confirmedDetail-scroll">
          <deathstop10 v-if="$store.state.ifDeathDetail" :death-data="deathDetail"></deathstop10>
        </div>
      </section>
    </div>

  </section>
</template>
<script>
  import confirmedChart from "./confirmedChart";
  import {mapGetters} from 'vuex';
  import top10 from './top10'
  import logirithmic from "./logirithmic";
  import deathstop10 from "./deathstop10";

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
      this.$store.dispatch('countryDaily',"italy").then(() => {

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
      confirmedDetail(){
        return this.$store.state.confirmedDetail;
      }
    },
    components: {
      top10,
      confirmedChart,
      logirithmic,
      deathstop10,
    }
  }

</script>

<style lang="scss" scoped>
  @import "../assets/css/base/color";
  @import "../assets/css/base/mixin";

  .Home {
    background-color: antiquewhite;
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

      &-confirmedPerson {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 7px;
        box-shadow: 7px 10px 10px -1px rgba($koyu, 0.6);
        background-color: $acikkirmizi;
        margin-bottom: 20px;

        h4 {
          color: darkred;
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
        box-shadow: 7px 10px 10px -1px rgba($koyu, 0.6);
        box-sizing: border-box;

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

    .as {
      background-color: #0E566C;
      height: 200px;
    }
  }
</style>
