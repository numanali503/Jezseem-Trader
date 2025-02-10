import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from '../Components/Loader'
import { useAuth } from '../context/data';

function AdminProtectedRoute(props) {
    const { authURL } = useAuth();
    const { Component } = props;
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [loading, setLoading] = useState(true); // Start with loading state true

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${authURL}/admin/authorization`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });

                if (response.status === 200) {
                    toast.success(`Access Granted!`);
                } else if (response.status === 403) {
                    toast.error(`Unauthorized!`);
                    setRedirectToLogin(true);
                } else if (response.status === 401) {
                    toast.error(`Token Expired!`);
                    console.log(`Token Invalid!`);
                    console.log(`Login First!`);
                    setRedirectToLogin(true);
                } else if (response.status === 404) {
                    toast.error(`Token Expired!`);
                    console.log('No Token Found');
                    setRedirectToLogin(true);
                } else {
                    toast.error(`Unauthorized!`);
                    setRedirectToLogin(true);
                }
            } catch (error) {
                toast.error(`Unauthorized!`);
                console.error('Error while verifying token:', error);
                setRedirectToLogin(true);
            } finally {
                setTimeout(() => setLoading(false), 2000); // Show loader for 5 seconds
            }
        };

        verifyToken();
    }, [redirectToLogin]);

    if (redirectToLogin) {
        return <Navigate to="/administrator" />;
    }

    return (
        <>
            {loading && <Loader />} {/* Show loader if loading is true */}
            {!loading && <Component />} {/* Show component after loading is false */}
        </>
    );
}

export default AdminProtectedRoute;
