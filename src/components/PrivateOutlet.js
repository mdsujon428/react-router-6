import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateOutlet = ({children}) => {
    const auth = useAuth();
    console.log('Welcome....!')
    return auth ? <Outlet/> : <Navigate to = '/login'/>
};
export default PrivateOutlet;