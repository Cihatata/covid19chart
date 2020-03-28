<template>
  <header class="header">
    <div class="header-logo">
      <router-link to="/" tag="button">
        <img src="../assets/analizlogo.png" alt="">
      </router-link>
    </div>
    <div class="header-menu" :class="{show : isActive}">
      <router-link to="/" tag="button" @click="isActive=!isActive">ANA SAYFA</router-link>
      <button  class="button" @click="isActive=!isActive" v-scroll-to="{ element: '#line-chart', duration: 2000 }">
        Grafikler
      </button>
      <button class="button">Bilgi</button>
    </div>
    <div class="header-switch" @click.prevent="isActive = !isActive">
      <svg class="icon icon-menu">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        isActive: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/base/color.scss";
  @import "../assets/css/base/mixin";

  .header {
    width: 100%;
    height: 100px;
    background-color: #106878;
    display: flex;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
    @include mq() {
      height: 90px;
      position: relative;
    }

    &-logo {
      img {
        width: 200px;
        height: 110px;
        margin-left: 8px;
        @include mq() {
          margin-left: 50%;
          width: 200px;
          height: 110px;
        }
      }
    }

    &-menu {
      z-index: 1;
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      top: 100px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: antiquewhite;
      padding: 20px;
      box-shadow: 0 10px 10px rgba(black, .2);
      transform: translateX(-100%);
      opacity: 0;
      transition: .3s;
      margin-bottom: 20px;
      @include mq() {
        opacity: 1;
        flex-direction: row;
        position: static;
        margin-left: auto;
        background-color: transparent;
        box-shadow: none;
        transform: translateX(0);
        margin-top: 15px;
        padding-right: 7%;
        button {
          color: white;
        }

      }

      &.show {
        opacity: 1;
        transform: translateX(0);

        button {
          //background-color: #0E566C ;
          border: 2px solid black !important;
          width: 98%;
          border-radius: 5px;
        }
      }

    }

    &-switch {
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      border: 1px solid gray;
      padding: 9px;
      border-radius: 4px;
      margin-bottom: 3px;
      margin-left: auto;
      margin-top: 10px;

      svg {
        color: #cfd0d2;
      }

      @include mq("tablet") {
        display: none;
      }
    }
  }
</style>
