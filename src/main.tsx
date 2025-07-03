import './index.css'

import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme/theme-provider.tsx';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
      <Toaster richColors closeButton />
      <Router />
    </ThemeProvider>
  </StrictMode>,
)
