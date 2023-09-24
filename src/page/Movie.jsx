import { GoToBack } from 'components/GoToBack';
import { MoviesList } from 'components/MoviesList';
import { searchMovies } from 'fetch/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Button } from './Movies.js';

const Movie = () => {
  const [search, setSearch] = useSearchParams();

  const [quizItems, setQuizItems] = useState([]);
  const [movie, setMovie] = useState('');
  const changeFilter = event => {
    setMovie(event.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ filter: movie });

    if (movie === '') {
      alert('Enter quary');
    }
  };

  useEffect(() => {
    async function getQuizzes() {
      const filter = search.get('filter') ?? '';
      try {
        const quizItems = await searchMovies(filter);
        console.log(quizItems);
        setQuizItems(quizItems);
      } catch (error) {
        console.log(error);
      }
    }
    getQuizzes();
  }, [search]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="quary" value={movie} onChange={changeFilter} />
        <Button type="submit">Search</Button>
      </form>

      {quizItems && <MoviesList list={quizItems} />}
    </>
  );
};
export default Movie;
