// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// const RegisterForm = ({ switchToLogin }) => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const { register } = useAuth();
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }
//         const result = await register(username, email, password);
//         if (!result.success) {
//             setError(result.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
//                 <button type="submit">Register</button>
//             </form>
//             <button onClick={switchToLogin}>Already have an account? Login</button>
//         </div>
//     );
// };

// export default RegisterForm;


import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const RegisterForm = ({ switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register } = useAuth();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        const result = await register(username, email, password);
        if (!result.success) {
            setError(result.message);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                    Register
                </button>
            </form>
            <div className="mt-4 text-center">
                <button onClick={switchToLogin} className="text-green-600 hover:underline">
                    Already have an account? Login
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
