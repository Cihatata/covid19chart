<template>
  <section class="Home">
    <div class="three columns Home-info">
      <div class="Home-info-confirmedPerson">
        <h3>Toplam Vaka Sayisi</h3>
        <h4>{{confirmedPersonn}}</h4>
      </div>
      <section class="Home-info-confirmedDetail">
        <top10 v-if="countryConfirmed!==undefined"  :country-data="countryConfirmed" ></top10>
      </section>
    </div>
    <div class="three columns Home-info">

    </div>
    <div class="three columns Home-info"></div>

    <div class="three columns as"></div>
  </section>
</template>
<script>
  import  {mapGetters} from 'vuex';
  import top10 from './top10'
  export default {
    name: "Home",
    created() {
      this.$store.dispatch('confirmedPerson').then(()=>{
      });
      this.$store.dispatch('confirmedDetail').then(()=>{

      })
    },
    computed:{
      confirmedPersonn(){
        return this.$store.state.confirmedPerson
      },
      ...mapGetters([
        'countryConfirmed'
      ])
    },
    components:{
      top10
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/base/color";
  @import "../assets/css/base/mixin";
  .Home {
    background-color: $koyukirmizi;
    position: absolute;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    @include mq("tablet"){
      padding: 30px;
    }
    &-info {

      &-confirmedPerson{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 7px;
        box-shadow: 7px 10px 10px -1px rgba($koyu,0.6);
        background-color: $acikkirmizi;
        margin-bottom: 20px;
        h4{
          color:darkred;
          font-size: 18vw;
          font-weight: 600;
          //text-shadow: -2px 0 gray, 0 2px gray, 2px 0 $koyu, 0 -2px $koyu;
          @include mq("tablet"){
            font-size: 3vw;
            text-shadow: -1px 0 $koyu, 0 1px $koyu, 1px 0 $koyu, 0 -1px $koyu;
          }
        }
        h3{
          font-weight: bold;
          margin-bottom: 0;
          margin-top: 20px;
          color: black;
          font-size: 9vw;
          @include mq(){
            font-size: 2vw;
          }
        }

      }
      &-confirmedDetail{
        background-color: $acikkirmizi;
        padding: 3px 5px;
        height: 60%;
        border-radius: 7px;
        box-shadow: 7px 10px 10px -1px rgba($koyu,0.6)
      }
    }

    .as {
      background-color: #0E566C;
      height: 200px;
    }
  }
</style>
