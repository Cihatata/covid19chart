<template>
  <div class="container">
    <div class="row Info">
      <center>
        <loading style="margin-top: 20px;" v-if="!ifObj"></loading>
      </center>
      <table v-if="ifObj" class="u-full-width">
        <thead>
        <tr>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Toplam Vaka</th>
          <th>Toplam Vefat</th>
          <th>Toplam İyileşen</th>
          <th>Toplam Test</th>
        </tr>
        </thead>
        <tbody v-for="item in obj">
        <tr>
          <td><img :src="item.countryInfo.flag" alt="Flag" width="44px" height=""></td>
          <router-link :to="'/ulkeler/' + item.country" tag="td">{{item.country}}</router-link>
          <router-link :to="'/ulkeler/' + item.country" tag="td">{{item.cases}}</router-link>
          <router-link :to="'/ulkeler/' + item.country" tag="td">{{item.deaths}}</router-link>
          <router-link :to="'/ulkeler/' + item.country" tag="td">{{item.recovered}}</router-link>
          <router-link :to="'/ulkeler/' + item.country" tag="td">{{item.tests}}</router-link>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import service from "../services/service";
  import loading from './loading'

  export default {
    name: "dunya.vue",
    data() {
      return {
        ifObj: false,
        obj: '',
      }
    },
    created() {
      this.getCountry()
    },
    methods: {
      getCountry() {
        service.country().then((res) => {
          this.ifObj = true;
          this.obj = res
          console.log(res[0])
        })
      }
    },
    components: {
      loading
    },
  }
</script>

<style lang="scss" scoped>
  .Info {
    overflow-x: scroll;
  }
    td{
      cursor: pointer;
    }
  a {
    text-decoration: none;
  }
</style>
