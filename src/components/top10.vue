<template>
  <section>
    <div v-for="(item,index) in countryData">
      <div v-if="item.countryRegion!=='Turkey'" class="element" >
        <div  class="element-countryName">
          {{ index+1 }}-{{item.countryRegion}}
        </div>
        <div v-if="item.provinceState!=null" class="element-provincestate">
          ({{item.provinceState}})
        </div>
        <div class="element-confirmed">
          {{item.confirmed}}
        </div>
      </div>
      <div v-else class="element turkey">
        <div  class="element-countryName">
          {{ item.sira }}-{{item.countryRegion}}
        </div>
        <div v-if="item.provinceState!=null" class="element-provincestate">
          ({{item.provinceState}})
        </div>
        <div class="element-confirmed">
          {{item.confirmed}}
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "top10",
    data() {
      return {
        counter: 1,
      }

    },
    props: {
      countryData: {type: Array, required: true}
    },
    method: {
      count() {
        console.log(this.counter)
        this.counter++;
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/base/mixin";
  @import "../assets/css/base/color";

  
  .element {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: $koyu;
    margin-bottom: 5px;
    margin-top: 8px;
    box-sizing: border-box;
    border-radius: 7px;
    @include mq() {

    }

    &-confirmed {
      margin-left: auto;
      font-size: 30px;
      margin-right: 20px;
      font-weight: 600;
      color: #e60000;
    }

    &-countryName {
      color: #eee;
      font-weight: 500;
      font-size: 24px;

      &-turkey {

      }
    }

    &-provincestate {
      color: #eee;
    }
  }

</style>
