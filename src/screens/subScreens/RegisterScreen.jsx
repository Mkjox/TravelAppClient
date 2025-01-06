import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Dimensions, ScrollView } from 'react-native';
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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [about, setAbout] = useState('');
    const [facebookLink, setFacebookLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [picture, setPicture] = useState(null);

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
            await AuthService.register({
                username,
                password,
                email,
                firstName: firstName || null,
                lastName: lastName || null,
                phoneNumber: phoneNumber || null,
                about: about || null,
                facebookLink: facebookLink || null,
                instagramLink: instagramLink || null,
                twitterLink: twitterLink || null,
                websiteLink: websiteLink || null,
                youtubeLink: youtubeLink || null,
                picture: picture || null
            });
            navigation.navigate('Home');
        }
        catch (error) {
            setError(error.message);
        }
    };



    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            <ScrollView>
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
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your first name'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your last name'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your phone number'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter about yourself'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={about}
                        onChangeText={setAbout}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your Facebook link'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={facebookLink}
                        onChangeText={setFacebookLink}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your Instagram link'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={instagramLink}
                        onChangeText={setInstagramLink}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your Twitter link'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={twitterLink}
                        onChangeText={setTwitterLink}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your website link'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={websiteLink}
                        onChangeText={setWebsiteLink}
                    />
                    <TextInput
                        style={[styles.textInput, themeStyles.textinput]}
                        placeholder='Enter your YouTube link'
                        placeholderTextColor={themeStyles.textinputPlaceholder}
                        value={youtubeLink}
                        onChangeText={setYoutubeLink}
                    />
                    {/* Add a file input for the picture if needed */}

                    <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleRegister}>
                        <Text style={[styles.buttonText, themeStyles.buttonText]}>Register</Text>
                    </TouchableOpacity>

                    {error ? <Text style={[styles.errorText, themeStyles.text]}>{error}</Text> : null}

                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.information, themeStyles.text]}>Already have an account? {<Text style={[styles.signInText, themeStyles.textBlue]}>Sign in</Text>}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        // marginTop: height * 0.21,
        marginTop: 25,
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