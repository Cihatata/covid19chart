<template>
  <footer class="footer">
    <div class="copyright">
      <small>&copy; Copyright 2020, <a href="http://cihatata.me">Cihat ATA</a></small>
      <small><a href="https://github.com/Cihatata/covid19chart">Github Repo</a></small>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "foot",
    }
</script>

<style lang="scss" scoped>
    .footer{
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-color: #222222;
    }
  small{
    text-align: center;
    color: whitesmoke;
    a{
      color: white;
      text-decoration: none;
    }
  }
</style>
