import { DetailsMovie } from 'components/DetailsMovie';
import { GoToBack } from 'components/GoToBack';
import { fetchDetails } from 'fetch/API';
import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedDetails = await fetchDetails(movieId);

        const data = {
          d: fetchedDetails.id,
          title: fetchedDetails.title,
          overview: fetchedDetails.overview,
          poster: fetchedDetails.poster_path,
          votes: fetchedDetails.vote_average.toFixed(1),
          genres: fetchedDetails.genres.map(genre => genre.name).join(' , '),
          country: fetchedDetails.production_countries
            .map(country => country.name)
            .join(' , '),
        };

        setDetails(data);
      } catch (error) {
        console.log('noyo.');
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <GoToBack to={backLinkHref.current} />
      <DetailsMovie details={details} />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Riviews</NavLink>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
