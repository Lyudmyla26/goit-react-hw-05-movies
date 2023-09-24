import { fetchCast } from 'fetch/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QuzeActor } from './CardActor';

const Cast = () => {
  const [actor, setActor] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetcheCast() {
      try {
        const fetchedCast = await fetchCast(movieId);

        const data = fetchedCast.map(actor => ({
          id: actor.id,
          character: actor.character,
          name: actor.original_name,
          imageSrc: actor.profile_path,
        }));

        setActor(data);
      } catch (error) {
        console.log('noyo.');
      }
    }
    fetcheCast();
  }, [movieId]);

  return (
    <>
      <QuzeActor array={actor} />
    </>
  );
};

export default Cast;
