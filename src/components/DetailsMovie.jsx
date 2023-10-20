import img from '../img/html_placeholder_01.jpg';
export const DetailsMovie = ({ details }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <>
      <img
        src={details.poster ? `${posterUrl}${details.poster}` : img}
        alt={details.title}
        width={500}
      />
      <h2>{details.title}</h2>
      <p>User Score: {details.votes}</p>
      <h3>Overview</h3>
      <p>{details.overview}</p>
      <h2>Genres</h2>
      <p>{details.genres}</p>
      <p>{details.country}</p>
      <hr />
      <p>Additional Information</p>
    </>
  );
};
