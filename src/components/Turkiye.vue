<template>
  <section>
    <h1>Türkiye Covid-19 Verileri</h1>
    <center><loading v-if="!ifProvinces" ></loading></center>
    <div v-if="ifProvinces" class="container">
      <div class="row card">
        <div class="four columns ">
          <div class="card-date">
            <div class="card-date-day">
              {{dateSeperate()[1]}}
            </div>
            <div class="card-date-other">
              <div class="card-date-other-month">
                {{dateSeperate()[0]}}
              </div>
              <div class="card-date-other-year">
                {{year}}
              </div>
            </div>
          </div>
        </div>
        <div class="four columns">
          <div class="card-today">
            <div class="card-today-el color2">
              <div class="card-today-el-label">
                Bugünkü Test <br> Sayısı
              </div>
              <span>{{obj.tests_done_today}}</span>
            </div>
            <div class="card-today-el color1">
              <div class="card-today-el-label">
                Bugünkü Vaka <br> Sayısı
              </div>
              <span>{{obj.confirmed_cases_today}}</span>
            </div>
            <div class="card-today-el color2">
              <div class="card-today-el-label">
                Bugunkü İyileşen <br> Sayısı
              </div>
              <span>{{obj.recoverd_today}}</span>
            </div>
            <div class="card-today-el color1">
              <div class="card-today-el-label">
                Bugünkü Vefat <br> Sayısı
              </div>
              <span>{{obj.deaths_today}}</span>
            </div>
          </div>
        </div>
        <div class="four columns">
          <div class="card-total">
            <div class="card-total-el">
              <div class="card-total-el-label">
                Toplam Test <br> Sayısı
              </div>
              <span>{{obj.total_tests}}</span>
            </div>
            <div class="card-total-el">
              <div class="card-total-el-label">
                Toplam Vaka <br> Sayısı
              </div>
              <span>{{obj.confirmed_cases}}</span>
            </div>
            <div class="card-total-el">
              <div class="card-total-el-label">
                Toplam Vefat <br> Sayısı
              </div>
              <span>{{obj.deaths}}</span>
            </div>
            <div class="card-total-el">
              <div class="card-total-el-label">
                Toplam İyileşen <br>Hasta Sayısı
              </div>
              <span>{{obj.recoverd}}</span>
            </div>
            <div class="card-total-el">
              <div class="card-total-el-label">
                Toplam Yoğun <br> Bakımı Hasta<br>Sayısı
              </div>
              <span>{{obj.intensive_care}}</span>
            </div>
            <div class="card-total-el">
              <div class="card-total-el-label">
                Toplam Entube<br>Hasta Sayısı
              </div>
              <span>{{obj.intubated_patients}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h4>Şehirlerin Son Güncellenme Tarihi {{provinceUpdate}}</h4>
        <table class="u-full-width">
          <thead>
          <tr>
            <th>Şehir</th>
            <th>Vaka Sayısı</th>
          </tr>
          </thead>
          <tbody  v-for="item in province">
          <tr >
            <td>{{item.name}}</td>
            <td>{{item.confirmed}}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>

<script>

  import service from "../services/service";
  import loading from "./loading"

  export default {
    name: "Turkiye",
    data() {
      return {
        ifProvinces:false,
        province:'',
        provinceUpdate:'',
        obj: '',
        day: '',
        month: '',
        year: 2020,
      }
    },
    created() {
      this.getData();
    },
    mounted() {
      this.getProvinces()

    },
    methods: {
      getData() {
        service.turkey.get('/').then((res) => {
          this.obj = res.data
        })
      },
      getProvinces(){
       console.log('girdi')
        service.turkey.get('/provinces').then((res)=>{
          console.log(res.data.provinces[0].name)
          this.ifProvinces=true;
          this.provinceUpdate=res.data.last_update
          this.province=res.data.provinces;
        })
      },
      dateSeperate() {
        let month = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim']
        let date = new Date(this.obj.date)
        this.month = month[date.getMonth()]
        this.day = date.getDate()
        return [this.month, this.day]
      }
    },
    components:{
      loading
    }
  }

</script>

<style lang="scss" scoped>
  @import "../assets/css/base/mixin";

  .card {
    background-color: #edffde;
    box-sizing: border-box;
    height: auto;
    margin: 40px auto;
    width: 95%;
    padding: 30px;
    box-shadow: 2px 0 32px -14px rgba(23, 15, 23, 1);
    border-radius: 6px;
    @include mq() {
      width: 82%;
      min-width: 1100px;
    }
    &-total{
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-el{
        margin-bottom: 2px;
        margin-top: 2px;
        border: 2px solid greenyellow;
        border-radius: 8px;
        padding: 4px;
        display: flex;
        align-items: center;
        &-label{
          font-family:'Oswald',sans-serif;
          line-height: 1;
          font-size: 20px;
        }
        span{
          font-family: Teko,sans-serif;
          margin-left: auto;
          font-size: 42px;
        }
      }
    }

    &-today {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-el{
        margin-bottom: 3px;
        margin-top: 3px;
        border: 4px solid greenyellow;
        border-radius: 8px;
        padding: 4px;
        display: flex;
        align-items: center;
        @include mq(){
          padding: 8px;
          border: 3px solid greenyellow;
        }
        &-label{
          font-family:'Oswald',sans-serif;
          line-height: 1;
          font-size: 24px;
          @include mq(){
            font-size: 32px;
          }
        }
        span{
          font-family: Teko,sans-serif;
          margin-left: auto;
          font-size: 48px;
          @include mq(){
            font-size: 60px;
          }
        }
      }
    }

    &-date {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      box-sizing: border-box;

      @include mq(){
        margin-top: 102px;
      }
      &-day {
        font-family: 'Comic Neue', sans-serif;
        font-size: 160px;
        color: #026309;
        //font-weight: bold;
        @include mq() {
          font-size: 240px;
        }
      }

      &-other {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10px;
        font-family: 'Oswald', sans-serif;
        justify-content: center;
        color: #02860a;

        &-month {
          font-size: 54px;
          @include mq('tablet') {
            font-size: 96px;
          }
        }

        &-year {
          font-size: 48px;
        }
      }

    }
  }
  /*.color1{*/
  /*  background-color: #ffa530;*/
  /*}*/
  /*.color2{*/
  /*  background-color: #fe0000;*/
  /*}*/
  .col {
    display: flex;
  }

  img {
    width: 100%;
    height: auto;

  }

  h1 {
    margin-top: 20px;
    font-family: 'Oswald',sans-serif;
    font-size: 48px;
    color: #026309;
    text-align: center;
    @include mq(){
      font-size: 72px;
    }
  }

</style>
