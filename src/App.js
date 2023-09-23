import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import renderRoutes from './routes';
import { Suspense } from 'react';
import Loader from './components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
export default App;
