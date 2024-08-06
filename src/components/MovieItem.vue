<template>
    <div class="card mb-3 shadow-custom">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ props.movie.title }}</h5>
                    <p class="card-text">{{ props.movie.description }}</p>
                    <span :class="['badge', genreClass]">{{ props.movie.genre }}</span>
                </div>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center">
                <img :src="`/${props.movie.image}`" class="img-fluid movie-image" alt="Movie image">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Movie } from '../interfaces/Movie';

const props = defineProps({
    movie: {
        type: Object as PropType<Movie>,
        required: true,
    },
});

const genreClass = computed(() => {
    switch (props.movie.genre) {
        case 'Crime':
            return 'bg-danger';
        case 'Drama':
            return 'bg-warning';
        case 'Action':
            return 'bg-success';
        default:
            return 'bg-secondary';
    }
});
</script>

<style scoped>
.movie-image {
    width: 90%;
    height: 90%;
    object-fit: cover;
}

.shadow-custom {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}

.shadow-custom:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>