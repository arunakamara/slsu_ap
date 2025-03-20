import * as Sentry from "@sentry/react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

Sentry.init({
  dsn: "https://e15d2611ae581425f93aee5683dc6201@o4508959386697728.ingest.us.sentry.io/4508959391875072"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
