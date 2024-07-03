import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!fullName || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        // const apiUrl = '';

        const data = {
            fullName, 
            email,
            password
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((result) => {
            if (result.success) {
                Alert.alert('Success', 'Registration is successful');
            }
            else {
                Alert.alert('Error', result.message || 'Registration failed');
            }
        })
        .catch((error) => {
            Alert.alert('Error', 'An error occured');
            console.error(error);
        });
    };


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
                    value={fullName}
                    onChangeText={setFullName}
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

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.information}>Already have an account? {<Text style={{ color: colors.blue }}>Sign in</Text>}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

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
        marginVertical: 15,
        fontSize: 24
    },
    headerTextSecondary: {
        fontFamily: 'Poppins_400Regular'
    },
    textInput: {
        marginHorizontal: 10,
        marginTop: 15,
        alignSelf: 'center',
        color: colors.teallight,
        width: 300,
        backgroundColor: colors.white,
        height: 65,
        textAlign: 'center',
        borderRadius: 25,
        fontFamily: 'Poppins_400Regular'
    },
    button: {
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 20,
        bottom: -170,
        backgroundColor: colors.teallight,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.white
    },
    information: {
        bottom: -180,
        alignSelf: 'center',
        fontFamily: 'Poppins_400Regular'
    }
});


export default RegisterScreen;