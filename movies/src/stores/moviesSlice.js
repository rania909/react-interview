import { createSlice } from "@reduxjs/toolkit";
import { movies$ } from "../data/movies";

const initialState = {
  allMovies: undefined,
  movies: undefined,
  categories: undefined,
  loading: true,
  pagination: {
    page: 1,
    perPage: 4,
    hasPreviousPage: false,
    hasNextPage: false,
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMoviesAndCategories: (state, action) => {
      state.movies = action.payload.movies;
      state.categories = action.payload.categories;
      state.loading = false;
    },
  
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    deleteMovie: (state, action) => {
      const id = action.payload;
      const newMovies = state.movies.filter((movie) => movie.id !== id);
      state.movies = newMovies;
      state.categories = getCategories(newMovies);
    },

    addLike: (state, action) => {
      const id = action.payload;
      const newMovies = state.movies.map((movie) => {
        if (movie.id === id) {
          movie.likes++;
        }
        return movie;
      });
      state.movies = newMovies;
    },
    addDislike: (state, action) => {
      const id = action.payload;
      const newMovies = state.movies.map((movie) => {
        if (movie.id === id) {
          movie.dislikes++;
        }
        return movie;
      });
      state.movies = newMovies;
    },
  },
});

export const { deleteMovie, addLike, addDislike, setMoviesAndCategories, setCategories, setLoading, setPagination } = moviesSlice.actions;

export default moviesSlice.reducer;

function getCategories(movies) {
  let categories = [];
  categories = movies.reduce((acc, movie) => {
    if (!acc.includes(movie.category)) {
      acc.push(movie.category);
    }
    return acc;
  }, []);
  categories = categories.sort((a, b) => (a < b ? -1 : 1));
  return categories;
}
export function fetchMovies() {
  return async (dispatch) => {
    dispatch(setLoading());    
      let movies = await movies$;
      let categories = getCategories(movies);
      dispatch(setMoviesAndCategories({ movies, categories }));
  };
}
