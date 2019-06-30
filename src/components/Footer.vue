<template>
  <div id="footer">
    <b-container>
      <b-row>
        <b-col md="12">
          Made with ️️❤️ by <a href="https://github.com/dj0nny" target="_blank">dj0nny</a> &copy; {{ year }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data:() => ({
    year: new Date().getFullYear()
  })
}
</script>

<style lang="scss" scoped>
#footer {
  background: #1c2541;
  color: #fff;
  padding: 50px;

  a {
    color: #fff;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

