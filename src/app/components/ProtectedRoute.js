import React from 'react';
import { Navigate } from 'react-router-dom';

/* ------------- || Providers Imports || ------------- */
import useAuth from '../providers/AuthenticationProvider';

const ProtectedRoute = ({ children }) => {
    const { isAuth } = useAuth();

    return isAuth === true
        ? children
        : <Navigate to="/login" replace />;
};

export default ProtectedRoute;