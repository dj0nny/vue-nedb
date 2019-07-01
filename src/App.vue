<template>
  <div id="app">
    <Header></Header>
    <b-container>
      <router-view/>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  font-family: 'Montserrat';
}

.button {
    background: #3a506b !important;
    color: #fff !important;
    border: 1px solid #3a506b !important;
    transition: .3s all !important;

    &:hover {
      background: #fff !important;
      color: #3a506b !important;
    }
}

</style>
