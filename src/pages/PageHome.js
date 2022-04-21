import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {LOGIN} from '../navigation/CONSTANTS';
export const PageHome = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <h1>Welcome</h1>
            <Link to={LOGIN} className='nav-link'> Login</Link>
                     
        </div>
    );
}