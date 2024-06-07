<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Categories</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li
              v-for="category in categories"
              :key="category.name"
              class="nav-item"
            >
              <a class="nav-link" @click="setCurrentCategory(category)">{{
                category.name
              }}</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              v-model="searchQuery"
            />
          </form>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <h2 v-if="currentCategory" class="text-center mb-4">
        {{ currentCategory.name }}
      </h2>
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="food in filteredFoods"
          :key="food.name"
        >
          <div class="card">
            <img :src="food.image" class="card-img-top" alt="Food Image" />
            <div class="card-body">
              <h5 class="card-title">{{ food.name }}</h5>
              <p class="card-text">{{ food.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesData from "/home/wappnet-61/demo-vue/public/foodCategories.json";

export default {
  data() {
    return {
      categories: categoriesData.categories,
      currentCategory: null,
      currentFoods: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredFoods() {
      if (!this.currentFoods) return [];
      return this.currentFoods.filter((food) =>
        food.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    setCurrentCategory(category) {
      this.currentCategory = category;
      this.currentFoods = category.foods;
      this.searchQuery = ""; 
    },
  },
};
</script>

<style>
.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}

.navbar-nav .nav-link {
  font-weight: bold;
  cursor: pointer !important;
}

.card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  border-radius: 10px 10px 0 0;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-text {
  color: #666;
}
</style>
