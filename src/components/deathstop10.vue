<template>
  <section>
    <div v-for="(item) in deathData">
      <div  class="element ">
        <div  class="element-countryName">
          {{ item.counter }}-{{item.province}}
        </div>
<!--        <div v-if="item.provinceState!=null" class="element-provincestate">-->
<!--          ({{item.provinceState}})-->
<!--        </div>-->
        <div class="element-confirmed">
          {{item.deaths}}
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "deathstop10",
    data() {
      return {

      }
    },
    props: {
      deathData: {type: Array, required: true}
    },
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
