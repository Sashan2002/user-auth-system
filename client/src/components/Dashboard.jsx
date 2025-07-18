// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Dashboard = () => {
//     const { user, logout } = useAuth();

//     return (
//         <div>
//             <h2>Welcome, {user.username}</h2>
//             <p>Email: {user.email}</p>
//             <p>Role: {user.role}</p>
//             <button onClick={logout}>Logout</button>
//         </div>
//     );
// };

// export default Dashboard;


import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center mb-4">Welcome, {user.username}</h1>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
                <button
                    onClick={logout}
                    className="mt-6 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
