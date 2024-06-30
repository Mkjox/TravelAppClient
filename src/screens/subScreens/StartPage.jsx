import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';


const StartPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.list}>
                <Image source={require('../../assets/images/ux-re.png')} style={styles.image} />
                <Text style={styles.infoText}>Share your travels with{"\n"} people around the world!</Text>
                <TouchableOpacity style={styles.button} onPress={() => ''}>
                    <Text>Get Started</Text>
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
        borderWidth: 0.6,
        borderColor: colors.black,
        padding: 20,
        width: 250,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#4DB6AC',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        bottom: -250,
        elevation: 5
    }
});

export default StartPage;