import { NavLink, useLocation } from 'react-router-dom';
import image from '../img/html_placeholder_01.jpg';
import { Item } from './PopularMovie';
export const MoviesList = ({ list }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/original/';
  const lokation = useLocation();
  return (
    <ul>
      {list.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: lokation }}>
            <img
              src={poster_path ? `${posterUrl}${poster_path}` : image}
              alt={title}
              width="200"
            />
            <h2>{title}</h2>
          </NavLink>
        </Item>
      ))}
    </ul>
  );
};
