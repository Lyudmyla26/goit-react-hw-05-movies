import { Link } from 'react-router-dom';
import { Item } from './PopularMovie.js';
export const PopularMovies = ({ results }) => {
  return (
    <>
      <h1>Trendig today</h1>
      <ul>
        {results.map(({ title, id }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`}>
              <p>{title}</p>
            </Link>
          </Item>
        ))}
      </ul>
    </>
  );
};
