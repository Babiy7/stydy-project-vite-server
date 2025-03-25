import { useNavigate } from 'react-router-dom';
import {TCharacter} from "../types.ts";
import {JSX} from "react";

interface HomePageProps {
  characters: TCharacter[]|undefined,
}

const Home = ({ characters }: HomePageProps): JSX.Element => {
  const navigate = useNavigate();

  if (!characters) {
    return <div>Loading...</div>;
  };

  return (
    <div className='container'>
      <h1>Rick and Morty Characters</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters?.map((character) => (
          <li
            onClick={() => navigate(`/character/${character.id}`)}
            style={{ border: 'red 1px solid', margin: '16px' }}
            key={character.id}
          >
            <img height={300} width={270} src={character.image} alt={character.name} />
            <div>
              <h2>{character.name}</h2>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
