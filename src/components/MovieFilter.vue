<template>
    <div class="mb-3">
        <input v-model="filters.name" class="form-control" placeholder="Filtrar por nombre" @input="applyFilters" />
        <input v-model="filters.description" class="form-control mt-2" placeholder="Filtrar por descripción"
            @input="applyFilters" />
        <div class="mt-2">
            <div v-for="genre in genres" :key="genre" class="form-check form-check-inline">
                <input type="checkbox" :value="genre" v-model="filters.genre" class="form-check-input"
                    @change="applyFilters" />
                <label class="form-check-label">{{ genre }}</label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { useMovieStore } from '../stores/movieStore';
import type { Filters } from '../interfaces/Filters';

const movieStore = useMovieStore();
const filters: Filters = movieStore.filters;
const genres: ComputedRef<string[]> = computed(() => movieStore.genres);

const applyFilters = () => {
    movieStore.setFilters(filters);
};
</script>

<style scoped>
.form-check-inline {
    margin-right: 1rem;
}
</style>