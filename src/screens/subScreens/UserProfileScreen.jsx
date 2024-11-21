import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/colors/colors";
import { Avatar, Caption } from "react-native-paper";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

const UserProfileScreen = () => {
    const { isDark } = useTheme();
    const navigation = useNavigation();

    const themeStyles = isDark ? darkTheme : lightTheme;

    return (
        <View style={[styles.container, themeStyles.container]}>
            <View style={styles.innerContainer}>
                <View style={styles.back}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color={themeStyles.icon.color} />
                        <Text style={[styles.headerText, themeStyles.text]}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.informationWrapper}>
                    <View style={styles.profileInformation}>
                        <Avatar.Image size={70} style={styles.avatar} />
                        <View style={styles.profileInformationInner}>
                            <Text style={[styles.profileInformationText, themeStyles.text]}>Username</Text>
                            <Text style={[styles.profileInformationText, themeStyles.text]}>@user</Text>
                        </View>
                    </View>
                    <View style={styles.personalInformation}>
                        <View style={styles.location}>
                            <Entypo name='location-pin' size={26} color={themeStyles.icon.color} />
                            <Text style={[styles.personalInformationText, themeStyles.text]}>Location</Text>
                        </View>
                        <View style={styles.email}>
                            <Entypo name='mail' size={26} color={themeStyles.icon.color} />
                            <Text style={[styles.personalInformationText, { marginLeft: 5 }, themeStyles.text]}>Email</Text>
                        </View>
                    </View>
                    <View style={styles.followWrapper}>
                        <View style={styles.followers}>
                            <Text style={[styles.followText, themeStyles.text]}>0</Text>
                            <Text style={[styles.followText, themeStyles.text]}>Followers</Text>
                        </View>
                        <View style={styles.following}>
                            <Text style={[styles.followText, themeStyles.text]}>0</Text>
                            <Text style={[styles.followText, themeStyles.text]}>Following</Text>
                        </View>
                    </View>

                    {/* <View style={styles.detailsContainer}>
                    <View style={styles.countContainer}>
                        <Text style={styles.detailsText}>4</Text>
                        <Caption style={styles.detailsText}>Post Count</Caption>
                    </View>
                    <View style={styles.countContainer}>
                        <Text style={styles.detailsText}>5</Text>
                        <Caption style={styles.detailsText}>Comment Count</Caption>
                    </View>
                </View> */}

                    <TouchableOpacity onPress={''} style={[styles.button, themeStyles.button]}>
                        <Text style={[styles.buttonText, themeStyles.buttonText]}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        marginTop: StatusBar.currentHeight - height * 0.02
    },
    back: {
        flexDirection: 'row',
        margin: height * 0.01 || width * 0.01
    },
    headerText:{
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        marginLeft: 5
    },
    informationWrapper: {
        height: 420,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    profileInformation: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
    },
    profileInformationInner: {
        flexDirection: 'column',
        textAlign: 'center'
    },
    profileInformationText: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 5
    },
    personalInformation: {
        flexDirection: 'row',
        marginTop: 20
    },
    personalInformationText: {
        color: colors.white,
        fontSize: 16
    },
    location: {
        marginLeft: 15,
        left: 90,
        flexDirection: 'row',
        alignItems: 'center',
    },
    email: {
        marginLeft: 15,
        left: 130,
        flexDirection: 'row',
        alignItems: 'center'

    },
    followWrapper: {
        flexDirection: 'row',
        marginTop: 40
    },
    followers: {
        flexDirection: 'column',
        left: 90
    },
    following: {
        flexDirection: 'column',
        marginLeft: 37,
        left: 150,

    },
    followText: {
        fontFamily: 'Poppins_400Regular',
        color: colors.white,
        fontSize: 14,
        textAlign: 'center'
    },
    detailsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 10,
        alignContent: "space-between",
        alignSelf: 'center'
    },
    detailsText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: colors.white,
        alignSelf: 'center'
    },
    countContainer: {
        marginHorizontal: 40,
        alignItems: 'center',
        marginRight: 25
    },
    button: {
        alignSelf: 'center',
        marginTop: 25,
        backgroundColor: colors.white,
        width: 130,
        borderRadius: 20,
        height: 50,
        elevation: 15,
        padding: 10
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        fontWeight: '800',
        letterSpacing: 0.2
    },
});

export default UserProfileScreen;