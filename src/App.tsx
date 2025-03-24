import Home from "./pages/home.tsx";
import Character from "./pages/character.tsx";
import { TCharacter } from "./types.ts";

interface AppProps {
  characters: TCharacter[]
}

function App({ characters }: AppProps) {
  return <div>App</div>;
}

export default App;
