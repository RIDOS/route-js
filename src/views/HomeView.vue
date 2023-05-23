<template>
  <div class="home">
    <div>
      <h2>Животные</h2>
      <div class="card-layout">
        <div v-for="page in pages" :key="page.name" class="card">
          <router-link :to="{ name: 'details', params: { name: page.name } }">
            <img
              :src="require(`../assets/${page.picture}`)"
              alt="Изображение"
              class="card-image"
            />
            <h3 class="card-title">{{ page.name }}</h3>
            <p class="card-description">{{ page.content }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import siteFile from "@/file.js";

export default {
  name: "HomeView",
  data() {
    return {
      pages: siteFile.pages,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
a:hover {
  color: red;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.main h1 {
  font-size: 36px;
  margin-bottom: 30px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 50px;
}

.container .text {
  width: 60%;
}

.container .text p {
  font-size: 18px;
}

.container .image {
  width: 35%;
}

.container .image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.main h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.container-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container-images img {
  width: calc(50% - 10px);
  margin-bottom: 20px;
}

.card-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 300px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.card-description {
  font-size: 16px;
  color: #888;
}
</style>
