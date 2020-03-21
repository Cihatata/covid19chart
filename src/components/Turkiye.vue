<template>
  <h1>{{this.$store.state.confirmedPerson}}</h1>
</template>

<script>
  export default {
    name: "Turkiye",
    created() {
      this.$store.dispatch('confirmedPerson').then(() => {

      })
    },
  }

</script>

<style scoped>

</style>
