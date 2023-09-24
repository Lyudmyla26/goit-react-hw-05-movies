import img from '../img/html_placeholder_01.jpg'
export const QuzeActor = ({ array }) => {
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    
    return (
      <ul>
        {array.map((item) => (
          <li key={item.id}>
            <img src={item.profile_path ? `${posterUrl}${item.profile_path}`: img} alt={item.name} />
            <h2>{item.name}</h2>
            <h2>Character: {item.character}</h2>
          </li>
        ))}
      </ul>
    );
  };