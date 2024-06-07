<template>
<v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>My Food App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
        <Navbar/>
       <Categories />
    </v-main>
  </v-app>

</template>

<script>
import Categories from './components/Categories.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Categories
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
