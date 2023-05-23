<template>
  <nav id="nav">
    <ul>
      <li><router-link to="/">Главная</router-link></li>
      <li v-for="page in pages" :key="page.id">
        <router-link :to="{ name: 'details', params: { name: page.name } }">{{
          page.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import file from "@/file.js";

export default {
  data() {
    return {
      pages: file.pages,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

nav a.router-link-exact-active {
  color: #42b983;
}
ul {
  list-style-type: none;
}
li {
  display: inline;
  margin: 0 30px;
}
</style>
