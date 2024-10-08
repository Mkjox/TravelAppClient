import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import colors from '../../assets/colors/colors';
import AuthService from '../../assets/data/services/AuthService';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        try {
            await AuthService.login(email,password);
            navigation.navigate('Home');
        }
        catch (error) {
            setError(error.message);
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