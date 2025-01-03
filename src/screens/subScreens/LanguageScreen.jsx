import React from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height, width } = Dimensions.get('window');

const LanguageScreen = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    const handleButtonPress = () => {
        console.warn("Confirm button pressed");
    }

    return (
        <View style={[styles.container, themeStyles.container]}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Ionicons name='arrow-back' size={24} onPress={() => navigation.goBack()} color={themeStyles.icon.color} />
                    <Text style={[styles.title, themeStyles.text]}>Language</Text>
                </View>

                <View style={[themeStyles.hairLine, { marginBottom: 10 }]} />

                <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleButtonPress}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>
                        English
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleButtonPress}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>
                        Turkish
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleButtonPress}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>
                        Spanish
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.confirmButton, themeStyles.button]} onPress={handleButtonPress}>
                    <Text style={[styles.confirmButtonText, themeStyles.buttonText]}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        marginTop: StatusBar.currentHeight
    },
    header: {
        marginLeft: 15,
        marginTop: 15,
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        marginLeft: 5
    },
    button: {
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
        marginTop: height * 0.6
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default LanguageScreen;