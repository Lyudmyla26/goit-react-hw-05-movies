import img from '../img/html_placeholder_01.jpg';
export const QuzeActor = ({ array }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/original/';
  console.log(array);
  return (
    <ul>
      {array.map(item => (
        <li key={item.id}>
          <img
            src={item.imageSrc ? `${posterUrl}${item.imageSrc}` : img}
            alt={item.name}
            width={300}
          />
          <h2>{item.name}</h2>
          <h2>Character: {item.character}</h2>
        </li>
      ))}
    </ul>
  );
};
