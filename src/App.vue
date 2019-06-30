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
</style>
