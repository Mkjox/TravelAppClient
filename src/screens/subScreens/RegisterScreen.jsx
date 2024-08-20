import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'https://localhost:7117';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const registrationData = {
                username, password, email
            };

            const response = await axios.post(`${API_URL}/api/account/register`, registrationData);

            await AsyncStorage.setItem('authToken', response.data.token);

            await fetchAndStoreUserInfo(response.data.token);
        }
        catch (error) {
            console.error('Registration failed:', error);
            setError('Registration failed. Please check your information and try again.');
        }
    }

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


    //FIX THIS
    // if (!username || !email || !password || !confirmPassword) {
    //     Alert.alert('Error', 'Please fill all fields');
    //     return;
    // }

    if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTextMain}>Welcome Onboard!</Text>
                    <Text style={styles.headerTextSecondary}>Let's help you find new traveling routes.</Text>
                </View>

                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your full name'
                    value={username}
                    onChangeText={setUsername}
                />
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
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirm password'
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.information}>Already have an account? {<Text style={styles.signInText}>Sign in</Text>}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    header: {
        alignSelf: 'center',
        marginTop: 100
    },
    headerTextMain: {
        fontFamily: 'Poppins_700Bold',
        alignSelf: 'center',
        marginVertical: 25,
        fontSize: 24
    },
    headerTextSecondary: {
        fontFamily: 'Poppins_400Regular'
    },
    textInput: {
        marginHorizontal: 10,
        marginTop: 25,
        alignSelf: 'center',
        color: colors.teallight,
        width: 300,
        backgroundColor: colors.white,
        height: 55,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins_400Regular'
    },
    button: {
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 15,
        bottom: -170,
        backgroundColor: colors.teallight,
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        color: colors.white,
        fontSize: 17,
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold'
    },
    information: {
        bottom: -180,
        alignSelf: 'center',
        color: '#7D7D7D',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14
    },
    signInText: {
        color: colors.blue,
        fontWeight: 'bold'
    }
});


export default RegisterScreen;