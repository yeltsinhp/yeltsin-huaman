import axios from 'axios'
import type { Movie } from '../interfaces/Movie'

interface MovieResponse {
  movies: Movie[]
  genres: string[]
}

const apiClient = axios.create({
  baseURL: '/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  async getMovies(): Promise<MovieResponse> {
    const response = await apiClient.get<MovieResponse>('movies.json')
    return response.data
  }
}
