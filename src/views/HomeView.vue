<template>
  <div class="container mt-4">
    <MovieFilter />
    <MovieList />
  </div>
</template>

<script setup lang="ts">
import MovieFilter from '../components/MovieFilter.vue';
import MovieList from '../components/MovieList.vue';
import { useMovieStore } from '../stores/movieStore';

const movieStore = useMovieStore();
movieStore.fetchMovies();
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
