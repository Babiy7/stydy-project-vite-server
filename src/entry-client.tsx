import { StrictMode } from 'react';
import './index.css';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';

console.log("⏳ Render start:", performance.now());

const rootElement = document.getElementById("root")!;

const data = window.__SSR_DATA__;
delete window.__SSR_DATA__;

// if (rootElement.innerHTML) {

console.log("🔵 Hydration start:", performance.now());
hydrateRoot(
  rootElement,
  <BrowserRouter>
    <div>Test</div>
  </BrowserRouter>
);
console.log("✅ Hydration complete:", performance.now());

// } else {
//     console.log("🟢 CSR Render start:", performance.now());
//     createRoot(rootElement).render(<App characters={[]} />);
//     console.log("✅ CSR Render complete:", performance.now());
// }
