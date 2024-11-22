import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[styles.text, themeStyles.text]}>Reset Password</Text>
                <TextInput
                    style={[styles.textInput, themeStyles.textinput]}
                    placeholder="Enter your email"
                />
                <TouchableOpacity style={[styles.button, themeStyles.button]}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>Send Email</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.forgotWrapper, themeStyles.text]}>
                        Do you remember your password?{<Text style={[styles.forgotText, themeStyles.textBlue]}> Sign In</Text>}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        marginTop: 300,
        fontFamily: 'Poppins_400Regular',
        fontWeight: '800',
        fontSize: 18,
        marginBottom: 25
    },
    textInput: {
        margin: 10,
        borderRadius: 10,
        borderBlockColor: colors.black,
        width: 300,
        height: 55,
        textAlign: 'center',
        color: colors.teallight,
        backgroundColor: colors.white,
        elevation: 5
    },
    button: {
        backgroundColor: colors.teallight,
        margin: 10,
        padding: 15,
        width: 250,
        marginTop: 290,
        borderRadius: 15,
        elevation: 5
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
    },
    forgotWrapper: {
        marginTop: 10,
        color: colors.lightGray,
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    },
    forgotText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15
    }
})

export default ResetPasswordScreen;