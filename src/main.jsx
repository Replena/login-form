import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';// Eğer `index.css` dosyanız varsa burayı dahil edin
import './App.css';   // Arka plan ve yıldız efektleri için CSS dosyasını buraya dahil edin

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
