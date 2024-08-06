import { defineStore } from 'pinia'
import movieService from '../services/movieService'
import type { Movie } from '../interfaces/Movie'
import type { Filters } from '../interfaces/Filters'

interface MovieState {
  movies: Movie[]
  genres: string[]
  filters: Filters
}

export const useMovieStore = defineStore('movieStore', {
  state: (): MovieState => ({
    movies: [],
    genres: [],
    filters: {
      name: '',
      description: '',
      genre: []
    }
  }),
  actions: {
    async fetchMovies() {
      const data = await movieService.getMovies()
      this.movies = data.movies
      this.genres = data.genres
    },
    setFilters(filters: Filters) {
      this.filters = filters
    }
  },
  getters: {
    filteredMovies: (state): Movie[] => {
      return state.movies.filter((movie) => {
        return (
          (state.filters.name === '' ||
            movie.title.toLowerCase().includes(state.filters.name.toLowerCase())) &&
          (state.filters.description === '' ||
            movie.description.toLowerCase().includes(state.filters.description.toLowerCase())) &&
          (state.filters.genre.length === 0 || state.filters.genre.includes(movie.genre))
        )
      })
    }
  }
})
