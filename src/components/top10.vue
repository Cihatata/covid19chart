<template>

  <div class="element">
    <div class="element-countryName">
      {{ countryData.sira }}-{{countryData.countryRegion}}
    </div>
    <div v-if="countryData.provinceState!=null" class="element-provincestate">
      ({{countryData.provinceState}})
    </div>
    <div class="element-confirmed">
      {{countryData.confirmed}}

    </div>
  </div>

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
      countryData: {type: Object, required: true}
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
    }

    &-provincestate {
      color: #eee;
    }
  }

</style>
