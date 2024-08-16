import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const ResetPasswordScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>Reset Password</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send Email</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text style={styles.forgotWrapper}>
                        Do you remember your password?{<Text style={styles.forgotText}> Sign In</Text>}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
        color: colors.lightGray
    },
    forgotText: {
        color: colors.darkBlue,
        fontWeight: 'bold'
    }
})

export default ResetPasswordScreen;