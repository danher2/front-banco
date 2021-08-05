import React from 'react';
import { LoginScreen } from '../components/LoginScreen';
import './AppRouter.css'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
               <LoginScreen />
            </div>

        </div>
    )
}