<template>
  <div id="header">
    <b-container>
      <b-row>
        <b-col md="4">
          <h1 class="title"><strong>Vue</strong>NeDB</h1>
        </b-col>
        <b-col md="8">
          <ul id="menu">
            <li class="menu-item" v-for="(link, index) in links" :key="index"><router-link :to="link.href">{{link.name}}</router-link></li>
            <li class="menu-item external"><a href="https://github.com/dj0nny/vue-nedb" target="_blank">View repository</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data:() => ({
    links: [
      {
      name: 'Records List',
      href: '/'
      },
      {
      name: 'Add record',
      href: '/add'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#header {
  background: #0b123b;
  color: #fff;
  padding: 15px;
  margin-bottom: 50px;

  ul#menu {
    padding: 0;
    margin: 0;
    float: right;

    li.menu-item {
      list-style-type: none;
      display: inline-block;
      margin-right: 20px;
      padding: 15px;

      a {
        color: #fff;
      }

      a.router-link-exact-active.router-link-active {
       text-decoration: underline;
      }
    }

    li.external {
      a {
        border: 1px solid #fff;
        padding: 10px 40px 12px 40px;
        transition: .3s all;

        &:hover {
          color: #0b123b;
          background: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

