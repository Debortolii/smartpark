import React from 'react';
import LandingPage from './components/LandingPage';
import './App.css';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <div className="App">
        <LandingPage />
      </div>
    </PrimeReactProvider>
  );
}

