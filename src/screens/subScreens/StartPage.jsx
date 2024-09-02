import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../assets/data/services/AuthService';

const StartPage = () => {
    const navigation = useNavigation();

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
        <SafeAreaView style={styles.container}>
            <View style={styles.list}>
                <Image source={require('../../assets/images/ux-re.png')} style={styles.image} />
                <Text style={styles.infoText}>Share your travels with{"\n"} people around the world!</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EEEEEE'
    },
    list: {
        flexDirection: 'column'
    },
    image: {
        width: 220,
        height: 200,
        alignSelf: 'center',
        marginTop: -70,
        position: 'static'
    },
    infoText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        alignSelf: 'center',
        bottom: -150
    },
    button: {
        alignSelf: 'center',
        borderColor: colors.black,
        padding: 18,
        width: 300,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#4DB6AC',
        bottom: -250,
        elevation: 5
    },
    buttonText: {
        color: colors.white,
        fontSize: 17,
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
    }
});

export default StartPage;