import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import colors from '../../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'https://localhost:7117';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const credentials = { email, password };
            const response = await axios.post(`${API_URL}/api/account/login`, credentials);

            await AsyncStorage.setItem('authToken', response.data.token);
            await fetchAndStoreUserInfo(response.data.token);
        }
        catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    const fetchAndStoreUserInfo = async (token) => {
        try {
            const response = await axios.get(`${API_URL}/api/account/current-user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            await AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
            console.log('User information stored successfully:', response.data);
        }
        catch (error) {
            console.error('Failed to fetch user info:', error);
            throw error;
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Welcome Back!
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your password'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Add navigation to the forgot password page */}
                <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
                    <Text style={styles.forgotPassword}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpText}>
                    Don't you have an account? {<Text style={styles.signUpLink}>Sign Up</Text>}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontFamily: 'Poppins_700Bold',
        alignSelf: 'center',
        marginVertical: 15,
        fontSize: 24
    },
    textInput: {
        marginHorizontal: 10,
        marginTop: 20,
        alignSelf: 'center',
        color: colors.teallight,
        width: 300,
        backgroundColor: colors.white,
        height: 55,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins_400Regular'
    },
    forgotPassword: {
        color: '#007BFF',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 15,
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 18,
        bottom: -170,
        backgroundColor: colors.teallight,
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Poppins_400Regular'
    },
    signUpText: {
        fontSize: 14,
        color: colors.lightGray,
        bottom: -180,
    },
    signUpLink: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
});

export default LoginScreen;