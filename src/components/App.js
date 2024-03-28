import React, { useState } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './LoaderSpinner/LoaderSpinner';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { AppLayout } from './AppLayout';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  const [favorites, setFavorites] = useState([]);
  return (
    
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route index element={<HomePage />} />          
          <Route
            path="/catalog"
            element={
              <CatalogPage favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route
            path="/favorite"
            element={
              <FavoritesPage
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    
  );
};