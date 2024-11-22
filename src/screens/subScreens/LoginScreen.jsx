import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import colors from '../../assets/colors/colors';
import AuthService from '../../assets/data/services/AuthService';
import { useTheme } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../assets/colors/themeColors';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        try {
            await AuthService.login(email, password);
            navigation.navigate('Home');
        }
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            <View>
                <Text style={[styles.title, themeStyles.text]}>
                    Welcome Back!
                </Text>
                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder='Enter your password'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Add navigation to the forgot password page */}
                <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
                    <Text style={[styles.forgotPassword, themeStyles.textBlue]}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLogin} style={[styles.button, themeStyles.button]}>
                <Text style={[styles.buttonText, themeStyles.buttonText]}>
                    Login
                </Text>
            </TouchableOpacity>
            {error ? <Text style={[styles.errorText, themeStyles.text]}>{error}</Text> : null}

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={[styles.signUpText, themeStyles.text]}>
                    Don't you have an account? {<Text style={[styles.signUpLink, themeStyles.textBlue]}>Sign Up</Text>}
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
        width: 300,
        height: 55,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins_400Regular',
        elevation: 5
    },
    forgotPassword: {
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 15,
        fontFamily: 'Poppins_700Bold',
        fontSize: 15,
    },
    button: {
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 18,
        bottom: -170,
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Poppins_500Medium'
    },
    signUpText: {
        fontSize: 14,
        color: colors.lightGray,
        bottom: -180,
        fontFamily: 'Poppins_500Medium'
    },
    signUpLink: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15
    },
});

export default LoginScreen;