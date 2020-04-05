<template>
  <header class="header">
    <div class="header-logo">
      <router-link to="/" tag="button">
        <img src="../assets/analizlogo.png" alt="">
      </router-link>
    </div>
    <div class="header-menu" :class="{show : isActive}">
      <div class="header-menu-search">
        <input v-model="searchWord" type="search" v-on:keyup.enter="search"  placeholder="Ülke adı yazınız(İngilizce) ">
        <i class="fa fa-search search-icon"  @click.prevent="search"></i>
      </div>
      <router-link to="/" tag="button" v-on:click.native="isActive=!isActive" >ANA SAYFA</router-link>
      <button @click.prevent="isActive=!isActive"  class="button"  v-scroll-to="{ element: '#line-chart', duration: 2000 }">
        Grafikler
      </button>
      <router-link to="/turkiye" tag="button" v-on:click.native="isActive=!isActive"> Türkiye</router-link>
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
        isActive: false,
        searchWord:'',
      }
    },
    computed:{
      close(){
        this.isActive=false;
      },
      search(){
        console.log(this.searchWord)
        this.isActive=false;
        this.$router.push({ path: `/ulkeler/${this.searchWord}`})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/base/color.scss";
  @import "../assets/css/base/mixin";

  .header {
    width: 100%;
    height: 100px;
    background-color: #edffde;
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
        margin-top: 12px;
        width: 240px;
        height: 90px;
        margin-left: 8px;
        @include mq() {
          margin-left: 40%;
          width: 250px;
          height: 80px;
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
      background-color: honeydew;
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
        background-color: #edffde;
        box-shadow: none;
        transform: translateX(0);
        margin-top: 15px;
        padding-right: 7%;
        button {
          border: none;
          color: #021b07;
        }

      }
      &-search{
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        @include mq("tablet"){
          margin-bottom: 6px;
        }
        input{
          color: gray;
          font-family: 'Helvetica', Arial;
          width: 100%;
          margin-bottom: 0 !important;
          border-radius: 5px;
        }
        i{
          color: #117a8b;
          position: relative;
          right: 25px;
          cursor: pointer;
        }
      }

      &.show {
        opacity: 1;
        transform: translateX(0);

        button {
          //background-color: #0E566C ;
          border: 2px solid #1190a1;
          width: 98%;
          border-radius: 5px;
          color: #1190a1;
        }
      }
      @include mq('tablet'){
        &.show{
          button{
            border: none;
            width: auto;
          }
        }
      }

    }

    &-switch {
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      border: 1px solid gray;
      padding: 6px;
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
