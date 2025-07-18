import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import { useAuth } from './context/AuthContext';

const App = () => {
    const { isAuthenticated, loading } = useAuth();
    const [showRegister, setShowRegister] = useState(false);

    if (loading) return <p>Loading...</p>;
    if (isAuthenticated) return <Dashboard />;

    return showRegister ? (
        <RegisterForm switchToLogin={() => setShowRegister(false)} />
    ) : (
        <LoginForm switchToRegister={() => setShowRegister(true)} />
    );
};

export default App;
