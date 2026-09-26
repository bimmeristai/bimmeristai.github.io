import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    __BIMMERISTAI_REACT_ACTIVE__?: boolean;
  }
}

window.__BIMMERISTAI_REACT_ACTIVE__ = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
