<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🎬 DUIMX Movie Browser</h2>
      <p class="text-purple-200">Beautiful movie cards with TMDB integration, infinite scroll, and cinematic experience.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎥 <strong>TMDB Integration</strong> - Real movie data from The Movie Database</li>
      <li>🎨 <strong>Cinematic Cards</strong> - Beautiful movie posters with hover effects</li>
      <li>♾️ <strong>Infinite Scroll</strong> - Load more movies seamlessly</li>
      <li>🔍 <strong>Search & Filter</strong> - Find movies by title, genre, year</li>
      <li>📱 <strong>Responsive Grid</strong> - Adapts to any screen size</li>
      <li>⭐ <strong>Ratings & Details</strong> - Show ratings, release dates, and overviews</li>
    </ul>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🎬 Data Source:</strong> Powered by 
        <a href="https://www.themoviedb.org/" target="_blank" class="text-purple-300 hover:text-purple-100 transition-colors underline">
          The Movie Database (TMDB)
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="movie-browser" :style="containerStyles">
    <!-- Version Display -->
    <!-- <div class="absolute top-2 left-2 z-20 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
      <span class="text-xs text-white/80">v0.0.1</span>
    </div> -->

    <!-- Search and Filters -->
    <div class="mb-6 space-y-4">
      <!-- Search Bar -->
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <div class="relative flex-1">
          <input
            v-model="searchQuery"
            @keyup.enter="searchMovies"
            type="text"
            placeholder="Search movies..."
            class="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
          />
          <font-awesome-icon 
            :icon="['fas', 'search']" 
            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
          />
        </div>
        <button
          @click="searchMovies"
          :disabled="loading"
          class="px-6 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <font-awesome-icon 
            :icon="['fas', loading ? 'spinner' : 'search']" 
            :class="{ 'animate-spin': loading }"
            class="w-4 h-4"
          />
          {{ loading ? 'Searching...' : 'Search' }}
        </button>
      </div>

      <!-- Filter Controls -->
      <div class="flex flex-wrap gap-4 items-center justify-between">
        <div class="flex flex-wrap gap-3">
          <!-- Genre Filter -->
          <select 
            v-model="selectedGenre" 
            @change="filterByGenre"
            class="px-3 py-1 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
          >
            <option value="">All Genres</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
            <option value="16">Animation</option>
            <option value="878">Sci-Fi</option>
            <option value="53">Thriller</option>
            <option value="10749">Romance</option>
          </select>

          <!-- Sort Options -->
          <select 
            v-model="sortBy" 
            @change="sortMovies"
            class="px-3 py-1 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
          >
            <option value="popularity.desc">Most Popular</option>
            <option value="vote_average.desc">Highest Rated</option>
            <option value="release_date.desc">Latest Release</option>
            <option value="title.asc">A-Z</option>
          </select>
        </div>

        <!-- Results Info -->
        <div class="text-sm text-gray-400">
          <span v-if="searchQuery">{{ movies.length }} results for "{{ searchQuery }}"</span>
          <span v-else-if="selectedGenre">{{ movies.length }} {{ getGenreName(selectedGenre) }} movies</span>
          <span v-else>{{ movies.length }} popular movies</span>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading && movies.length === 0" class="flex justify-center items-center py-12">
      <div class="text-center">
        <font-awesome-icon :icon="['fas', 'spinner']" class="text-4xl text-purple-500 animate-spin mb-4" />
        <p class="text-gray-400">Loading amazing movies...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-4xl text-red-500 mb-4" />
      <p class="text-red-400 mb-2">Failed to load movies</p>
      <p class="text-gray-500 text-sm">{{ error }}</p>
      <button @click="loadPopularMovies" class="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
        Try Again
      </button>
    </div>

    <!-- Movies Grid -->
    <div v-else-if="movies.length > 0" class="space-y-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="movie-card group relative overflow-hidden rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
          @click="selectMovie(movie)"
        >
          <!-- Movie Poster -->
          <div class="relative aspect-[2/3] overflow-hidden">
            <img
              v-if="movie.poster_path"
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              :alt="movie.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div
              v-else
              class="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center"
            >
              <font-awesome-icon :icon="['fas', 'film']" class="text-4xl text-gray-500" />
            </div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            
            <!-- Rating Badge -->
            <div v-if="movie.vote_average" class="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
              <div class="flex items-center gap-1">
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 w-3 h-3" />
                <span class="text-white text-xs font-semibold">{{ movie.vote_average.toFixed(1) }}</span>
              </div>
            </div>

            <!-- Year Badge -->
            <div v-if="movie.release_date" class="absolute top-2 left-2 bg-purple-500/80 backdrop-blur-sm rounded-lg px-2 py-1">
              <span class="text-white text-xs font-semibold">{{ getYear(movie.release_date) }}</span>
            </div>
          </div>

          <!-- Movie Info -->
          <div class="p-3">
            <h3 class="text-white text-sm font-semibold line-clamp-2 mb-1">{{ movie.title }}</h3>
            <p v-if="movie.release_date" class="text-gray-400 text-xs">{{ formatDate(movie.release_date) }}</p>
          </div>

          <!-- Hover Details -->
          <div class="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 class="text-white text-lg font-bold mb-2">{{ movie.title }}</h3>
            <p class="text-gray-300 text-sm line-clamp-3 mb-3">{{ movie.overview || 'No description available.' }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400 w-4 h-4" />
                <span class="text-white text-sm">{{ movie.vote_average.toFixed(1) }}</span>
              </div>
              <button class="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-xs rounded-lg transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center pt-8">
        <button
          v-if="hasMore && !loading"
          @click="loadMoreMovies"
          class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
        >
          <font-awesome-icon :icon="['fas', 'plus-circle']" class="w-5 h-5" />
          Load More Amazing Movies
          <font-awesome-icon :icon="['fas', 'film']" class="w-5 h-5" />
        </button>
        
        <!-- Loading More -->
        <div v-else-if="loading" class="flex justify-center items-center py-8">
          <font-awesome-icon :icon="['fas', 'spinner']" class="text-2xl text-purple-500 animate-spin mr-3" />
          <span class="text-gray-400">Loading more movies...</span>
        </div>
        
        <!-- End of Results -->
        <div v-else-if="!hasMore && movies.length > 0" class="text-center py-8">
          <font-awesome-icon :icon="['fas', 'check-circle']" class="text-2xl text-green-500 mb-2" />
          <p class="text-gray-400">You've seen all available movies!</p>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <font-awesome-icon :icon="['fas', 'film']" class="text-6xl text-gray-600 mb-4" />
      <p class="text-gray-400 text-lg mb-2">No movies found</p>
      <p class="text-gray-500 text-sm">Try searching for your favorite movies</p>
    </div>

    <!-- Selected Movie Modal -->
    <div v-if="selectedMovie" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="closeMovieModal">
      <div class="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" @click.stop>
        <div class="relative">
          <!-- Backdrop Image -->
          <div v-if="selectedMovie.backdrop_path" class="relative h-64 overflow-hidden rounded-t-2xl">
            <img
              :src="`https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path}`"
              :alt="selectedMovie.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
          
          <!-- Close Button -->
          <button
            @click="closeMovieModal"
            class="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <font-awesome-icon :icon="['fas', 'times']" class="w-5 h-5" />
          </button>
        </div>
        
        <!-- Movie Details -->
        <div class="p-6">
          <div class="flex gap-6">
            <!-- Poster -->
            <div v-if="selectedMovie.poster_path" class="flex-shrink-0">
              <img
                :src="`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`"
                :alt="selectedMovie.title"
                class="w-32 rounded-lg shadow-lg"
              />
            </div>
            
            <!-- Info -->
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-white mb-2">{{ selectedMovie.title }}</h2>
              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-1">
                  <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
                  <span class="text-white">{{ selectedMovie.vote_average.toFixed(1) }}</span>
                </div>
                <span class="text-gray-400">{{ formatDate(selectedMovie.release_date) }}</span>
              </div>
              <p class="text-gray-300 leading-relaxed">{{ selectedMovie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  // Universal DUIMX Props
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 800 },
  height: { type: Number, default: 600 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Component-specific props
  apiKey: { type: String, default: '81d14b9047528f58754d1dc2540011a8' },
  searchOnMount: { type: Boolean, default: true },
  initialQuery: { type: String, default: '' },
  pageSize: { type: Number, default: 20 }
});

// Reactive state
const movies = ref([]);
const searchQuery = ref(props.initialQuery);
const loading = ref(false);
const error = ref('');
const currentPage = ref(1);
const totalPages = ref(1);
const hasMore = ref(true);
const selectedMovie = ref(null);
const selectedGenre = ref('');
const sortBy = ref('popularity.desc');

// TMDB API configuration
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = props.apiKey;

// Computed properties
const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  maxWidth: `${props.width}px`,
  padding: `${props.padding}px`,
  margin: `${props.margin}px`,
  backgroundColor: props.bgColor,
  color: props.textColor,
  borderRadius: `${props.roundness}px`,
  minHeight: `${props.height}px`
}));

// API Methods
const loadPopularMovies = async () => {
  try {
    loading.value = true;
    error.value = '';
    
    const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage.value}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (currentPage.value === 1) {
      movies.value = data.results;
    } else {
      movies.value.push(...data.results);
    }
    
    totalPages.value = data.total_pages;
    hasMore.value = currentPage.value < totalPages.value;
    
  } catch (err) {
    console.error('Error loading movies:', err);
    error.value = err.message || 'Failed to load movies';
  } finally {
    loading.value = false;
  }
};

const searchMovies = async () => {
  try {
    loading.value = true;
    error.value = '';
    currentPage.value = 1;
    
    const query = searchQuery.value.trim();
    const endpoint = query 
      ? `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`
      : `${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
    
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    movies.value = data.results;
    totalPages.value = data.total_pages;
    hasMore.value = currentPage.value < totalPages.value;
    
  } catch (err) {
    console.error('Error searching movies:', err);
    error.value = err.message || 'Failed to search movies';
  } finally {
    loading.value = false;
  }
};

const loadMoreMovies = async () => {
  if (!hasMore.value || loading.value) return;
  
  currentPage.value++;
  
  if (searchQuery.value.trim()) {
    await searchMovies();
  } else {
    await loadPopularMovies();
  }
};

// Utility methods
const getYear = (dateString) => {
  return dateString ? new Date(dateString).getFullYear() : 'Unknown';
};

const formatDate = (dateString) => {
  if (!dateString) return 'Unknown';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const selectMovie = (movie) => {
  selectedMovie.value = movie;
};

const closeMovieModal = () => {
  selectedMovie.value = null;
};

// Enhanced filtering and sorting methods
const getGenreName = (genreId) => {
  const genres = {
    28: 'Action',
    35: 'Comedy', 
    18: 'Drama',
    27: 'Horror',
    16: 'Animation',
    878: 'Sci-Fi',
    53: 'Thriller',
    10749: 'Romance'
  };
  return genres[genreId] || 'Unknown';
};

const filterByGenre = async () => {
  currentPage.value = 1;
  hasMore.value = true;
  
  if (selectedGenre.value) {
    await loadMoviesByGenre();
  } else {
    await loadPopularMovies();
  }
};

const loadMoviesByGenre = async () => {
  try {
    loading.value = true;
    error.value = '';
    
    const response = await fetch(
      `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre.value}&sort_by=${sortBy.value}&page=${currentPage.value}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (currentPage.value === 1) {
      movies.value = data.results;
    } else {
      movies.value.push(...data.results);
    }
    
    totalPages.value = data.total_pages;
    hasMore.value = currentPage.value < totalPages.value;
    
  } catch (err) {
    error.value = err.message;
    console.error('Error loading movies by genre:', err);
  } finally {
    loading.value = false;
  }
};

const sortMovies = async () => {
  currentPage.value = 1;
  hasMore.value = true;
  
  if (selectedGenre.value) {
    await loadMoviesByGenre();
  } else if (searchQuery.value.trim()) {
    await searchMovies();
  } else {
    await loadPopularMovies();
  }
};

// Lifecycle
onMounted(() => {
  if (props.searchOnMount) {
    if (props.initialQuery) {
      searchMovies();
    } else {
      loadPopularMovies();
    }
  }
});
</script>

<style scoped>
.movie-browser {
  position: relative;
}

.movie-card {
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.movie-card:hover {
  border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth scroll animation */
@media (prefers-reduced-motion: no-preference) {
  .movie-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

/* Loading animation */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
  }
}

.movie-card:hover {
  animation: pulse-glow 2s infinite;
}
</style>
