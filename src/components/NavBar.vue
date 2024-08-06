<template>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">MovieApp</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar-custom {
    background-color: #343a40;
    color: #ffffff;
}

.navbar-custom .navbar-brand,
.navbar-custom .nav-link {
    color: #ffffff;
}

.navbar-custom .navbar-brand:hover,
.navbar-custom .nav-link:hover {
    color: #cccccc;
}

.navbar-custom .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.1);
}
</style>