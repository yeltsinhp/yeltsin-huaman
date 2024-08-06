<template>
    <div>
        <div v-if="filteredMovies.length === 0" class="alert alert-info">
            No hay películas disponibles.
        </div>
        <MovieItem v-else v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import MovieItem from './MovieItem.vue';
import { useMovieStore } from '../stores/movieStore';
import type { Movie } from '../interfaces/Movie';

const movieStore = useMovieStore();
const filteredMovies: ComputedRef<Movie[]> = computed(() => movieStore.filteredMovies);
</script>

<style scoped>
.alert {
    margin-top: 20px;
}
</style>