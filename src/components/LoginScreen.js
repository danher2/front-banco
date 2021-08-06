import React from 'react';
import './Login.css';


const LoginScreen = () => {
    return (
    <>
            <h3 className="auth__title text-center">Welcome</h3>
            <form > {/**onSubmit manda un evento */}
                <input
                    type="text"
                    placeholder="Emaiil"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"

                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"

                >Login</button>
            </form>
        </>
    )
}

export default LoginScreen;