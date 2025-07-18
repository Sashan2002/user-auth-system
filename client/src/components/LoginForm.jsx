import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginForm = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (!result.success) {
            setError(result.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-white rounded shadow">
                <input className="border rounded px-3 py-2" type="email" placeholder="Email" />
                <input className="border rounded px-3 py-2" type="password" placeholder="Password" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2">Login</button>
            </form>

            <button onClick={switchToRegister}>Don't have an account? Register</button>
        </div>
    );
};

export default LoginForm;
