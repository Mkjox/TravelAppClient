import React, { useEffect } from 'react';
import { Dimensions, Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../assets/data/services/AuthService';
import { useTheme } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../assets/colors/themeColors';

const { height, width } = Dimensions.get('window');

const StartPage = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    useEffect(() => {
        const checkUserSignedIn = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                if (token) {
                    const userInfo = await AuthService.fetchAndStorageUserInfo(token);
                    if (userInfo) {
                        navigation.navigate('Home');
                    }
                }
            }
            catch (error) {
                alert('Error checking user sign-in status:', error);
            }
        };
        checkUserSignedIn();
    }, []);

    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            <View style={styles.list}>
                <Image source={require('../../assets/images/ux-re.png')} style={styles.image} />
                <Text style={[styles.infoText, themeStyles.text]}>Share your travels with{"\n"} people around the world!</Text>
                <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => navigation.navigate("Register")}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        flexDirection: 'column'
    },
    image: {
        width: width * 0.54,
        height: height * 0.24,
        alignSelf: 'center',
        marginTop: height * 0.2,
        position: 'static'
    },
    infoText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        alignSelf: 'center',
        bottom: -height * 0.05
    },
    button: {
        alignSelf: 'center',
        padding: 18,
        width: width * 0.7,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: height * 0.3,
        elevation: 5
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
    }
});

export default StartPage;