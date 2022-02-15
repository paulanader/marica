import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Spot } from '../pages/Spot';
import { Spots } from '../pages/Spots';

export const PagesRoutes: React.FC = () => 
    (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/pontos-turisticos" element={<Spots />} />   
                <Route path="/pontos-turisticos/:id" element={<Spot />} />              
            </Routes>
        </BrowserRouter>
    );



