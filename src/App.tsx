import Home from "./pages/home.tsx";
import Character from "./pages/character.tsx";
import { Route, Routes } from 'react-router-dom';
import { TCharacter } from "./types.ts";
import {JSX} from "react";

interface AppProps {
  characters: TCharacter[]|undefined;
}

function App({ characters }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route index element={<Home characters={characters} />} />
      <Route path="/character/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
