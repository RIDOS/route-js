<template>
  <h1>{{ animals.name }}</h1>
  <p>{{ animals.content }}</p>
  <div class="card-layout">
    <div v-for="animal in animals.books" :key="animal.title">
      <div class="card">
        <router-link :to="{ name: 'books', params: { animalName: animal.title } }">
          <img :src="require(`../assets/${animal.foto}`)" :alt="`${animal.foto}`" class="card-image">
          <h3 class="card-title">{{ animal.title }}</h3>
          <p class="card-description">{{ animal.info }}</p>
        </router-link>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import siteFile from "@/file.js";

export default {
  name: "ToratauView",
  data() {},
  computed: {
    animals() {
      return siteFile.pages.find(
        (siteFile) => siteFile.name == this.$route.params.name
      );
    },
  },
};
</script>
