import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';
import AuthService from '../../assets/data/services/AuthService';
import { useTheme } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../assets/colors/themeColors';

const { height, width } = Dimensions.get('window')

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            await AuthService.register(username, password, email);
            navigation.navigate('Home');
        }
        catch (error) {
            setError(error.message);
        }
    };



    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            <View>
                <View style={styles.header}>
                    <Text style={[styles.headerTextMain, themeStyles.text]}>Welcome Onboard!</Text>
                    <Text style={[styles.headerTextSecondary, themeStyles.text]}>Let's help you find new traveling routes.</Text>
                </View>

                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder='Enter your username'
                    placeholderTextColor={themeStyles.textinputPlaceholder}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder='Enter your email'
                    placeholderTextColor={themeStyles.textinputPlaceholder}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder='Enter your password'
                    placeholderTextColor={themeStyles.textinputPlaceholder}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder='Confirm password'
                    placeholderTextColor={themeStyles.textinputPlaceholder}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleRegister}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>Register</Text>
                </TouchableOpacity>

                {error ? <Text style={[styles.errorText, themeStyles.text]}>{error}</Text> : null}

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={[styles.information, themeStyles.text]}>Already have an account? {<Text style={[styles.signInText, themeStyles.textBlue]}>Sign in</Text>}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignSelf: 'center',
        marginTop: height * 0.1
    },
    headerTextMain: {
        fontFamily: 'Poppins_700Bold',
        alignSelf: 'center',
        marginVertical: height * 0.03,
        fontSize: 24
    },
    headerTextSecondary: {
        fontFamily: 'Poppins_400Regular'
    },
    textInput: {
        marginHorizontal: 10,
        marginTop: 25,
        alignSelf: 'center',
        width: width * 0.75,
        height: 55,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins_400Regular',
        elevation: 5
    },
    button: {
        width: width * 0.7,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 15,
        marginTop: height * 0.21,
        backgroundColor: colors.teallight,
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold'
    },
    information: {
        alignSelf: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
    },
    signInText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15
    },
    errorText: {
        alignSelf: 'center',
        fontFamily: 'Poppins_700Bold',
        fontSize: 15
    },
});


export default RegisterScreen;