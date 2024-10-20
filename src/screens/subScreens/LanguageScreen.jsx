import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/core";

const LanguageScreen = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
        console.warn("Confirm button pressed");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={24} onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>Language</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>
                    English
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>
                    Turkish
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>
                    Spanish
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton} onPress={handleButtonPress}>
                <Text style={styles.confirmButtonText}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 3,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 280,
        alignSelf: 'center',
        marginVertical: 7,
    },
    buttonText: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center'
    },
    confirmButton: {
        backgroundColor: colors.teallight,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 150,
        alignSelf: 'center',
        bottom: -520
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default LanguageScreen;