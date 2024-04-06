<template>
  <navbar-comp>
    <router-view></router-view>
  </navbar-comp>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  components: {
    NavbarComp,
  },
};
</script>

<style>
#app {
  font-family: "Alumni Sans Collegiate One", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>