import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem('auth_token');
        if (savedToken) {
            setToken(savedToken);
            fetchUserProfile(savedToken);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUserProfile = async (authToken) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/profile', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            } else {
                localStorage.removeItem('auth_token');
                setToken(null);
            }
        } catch (error) {
            localStorage.removeItem('auth_token');
            setToken(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem('auth_token', data.token);
            return { success: true, message: data.message };
        }
        return { success: false, message: data.message };
    };

    const register = async (username, email, password) => {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem('auth_token', data.token);
            return { success: true, message: data.message };
        }
        return { success: false, message: data.message };
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('auth_token');
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
