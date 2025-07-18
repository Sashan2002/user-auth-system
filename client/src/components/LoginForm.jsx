// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// const LoginForm = ({ switchToRegister }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { login } = useAuth();
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const result = await login(email, password);
//         if (!result.success) {
//             setError(result.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-white rounded shadow">
//                 <input className="border rounded px-3 py-2" type="email" placeholder="Email" />
//                 <input className="border rounded px-3 py-2" type="password" placeholder="Password" />
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2">Login</button>
//             </form>

//             <button onClick={switchToRegister}>Don't have an account? Register</button>
//         </div>
//     );
// };

// export default LoginForm;

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
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
            <div className="mt-4 text-center">
                <button onClick={switchToRegister} className="text-blue-600 hover:underline">
                    Don't have an account? Register
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
