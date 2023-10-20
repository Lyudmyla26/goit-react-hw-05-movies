import MovieDetails from 'page/MovieDetails';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layot } from './Layot';
import Movies from 'page/Movie';
import { lazy } from 'react';
const Home = lazy(() => import('../page/home'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layot />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
