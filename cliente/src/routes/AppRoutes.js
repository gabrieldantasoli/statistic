import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Error404, Estagio1 } from '../pages';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/estagio1' element={<Estagio1 />} />

            <Route path='/*' element={<Error404 />} />
        </Routes>
    );
};

export default AppRoutes;
