import React from 'react';
import { Text } from 'react-native';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children, roles }) => {
    const { user } = useAuth();

    if (!user) {
        return <Text>You need to be logged in to access this page.</Text>;
    }

    if (roles && !roles.user(role => user.roles.includes(role))) {
        return <Text>You do not have permission to view this page.</Text>;
    }
    return children;
}

export default ProtectedRoute;