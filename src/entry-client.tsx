import './index.css';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById("root")!;

const data = window.__SSR_DATA__;
delete window.__SSR_DATA__;

hydrateRoot(
  rootElement,
  <BrowserRouter>
    <App characters={data} />
  </BrowserRouter>
);
