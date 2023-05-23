<template>
  <div style="margin: 5%">
    <h1>{{ information.title }}</h1>
    <div class="card-layout">
      <div class="card" style="width: 50%">
        <img
          :src="require(`../assets/${information.foto}`)"
          :alt="`${information.foto}`"
          class="card-image"
        />
        <h3 class="card-title">{{ information.title }}</h3>
        <p class="card-description">{{ information.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import siteFile from "@/file.js";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    animalName: {
      type: String,
      required: true,
    },
  },
  computed: {
    book() {
      return siteFile.pages.filter((page) => page.name == this.name);
    },
    information() {
      return this.book[0].books.find((book) => book.title == this.animalName);
    },
  },
};
</script>
