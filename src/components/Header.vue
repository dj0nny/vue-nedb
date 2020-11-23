<template>
  <div id="header">
    <b-container>
      <b-row>
        <b-col md="4">
          <router-link to="/" class="logo">
            <h1 class="title"><strong>Vue</strong>NeDB</h1>
          </router-link>
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
  data: () => ({
    links: [
      {
        name: 'Records List',
        href: '/',
      },
      {
        name: 'Add record',
        href: '/add',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
