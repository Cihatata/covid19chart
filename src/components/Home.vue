<template>
  <section class="hi">
    <div class="three columns sa">
      {{confirmedPersonn}}
    </div>
    <div class="three columns as">
    </div>
    <div class="three columns sa"></div>
    <div class="three columns as"></div>
  </section>
</template>

<script>
  export default {
    name: "Home",
    created() {
      this.$store.dispatch('confirmedPerson').then(()=>{

      })
    },
    computed:{
      confirmedPersonn(){
        return this.$store.state.confirmedPerson
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hi {
    background-color: #eee;
    height: 300px;
    width: 100%;

    .sa {
      background-color: #0e8c8c;
      height: 200px;
    }

    .as {
      background-color: #0E566C;
      height: 200px;
    }
  }
</style>
