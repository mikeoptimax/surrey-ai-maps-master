import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Safely mount the app in browser environments only
if (typeof window !== 'undefined') {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
}
