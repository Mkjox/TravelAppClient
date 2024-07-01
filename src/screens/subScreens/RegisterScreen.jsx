import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [inputs, setInputs] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const handleInputChange = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
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
                    onChangeText={text => handleInputChange('fullName', text)}
                    value={inputs.fullName}
                    placeholder='Enter your full name'
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => handleInputChange('email', text)}
                    value={inputs.email}
                    placeholder='Enter your email'
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => handleInputChange('password', text)}
                    value={inputs.password}
                    placeholder='Enter your password'
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => handleInputChange('repeatPassword', text)}
                    value={inputs.repeatPassword}
                    placeholder='Confirm password'
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
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
        marginTop: 25
    },
    headerTextMain: {
        fontFamily: 'Poppins_600SemiBold',
        alignSelf: 'center',
        marginVertical: 15
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
        height: 70,
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
        bottom: -300,
        backgroundColor: colors.teallight,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.white
    }
});


export default RegisterScreen;