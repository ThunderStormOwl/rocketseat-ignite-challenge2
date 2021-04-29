import { useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { api } from '../services/api';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenreId: Number,
  selectedGenreTitle: String
}

export function Content(props : ContentProps) {

  const [movies, setMovies] = useState<MovieProps[]>([]);

  function getMovies(id: Number){
    api.get<MovieProps[]>(`movies/?Genre_id=${id}`).then(response => {
      setMovies(response.data);
    });
  };

  getMovies(props.selectedGenreId);

  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenreTitle}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
