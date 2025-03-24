import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import {TCharacter} from "./types.ts";

interface Props {
  path: string,
  characters: TCharacter[],
}

export async function render({ path, characters }: Props) {
  const html = renderToString(
    <StaticRouter location={path}>
      <App characters={characters} />
    </StaticRouter>
  );

  return { html };
}
