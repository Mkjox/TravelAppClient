import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/colors/colors";
import { Avatar, Caption } from "react-native-paper";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const UserProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.informationWrapper}>
                <View style={styles.profileInformation}>
                    <Avatar.Image size={70} style={styles.avatar} />
                    <View style={styles.profileInformationInner}>
                        <Text style={styles.profileInformationText}>Username</Text>
                        <Text style={styles.profileInformationText}>@user</Text>
                    </View>
                </View>
                <View style={styles.personalInformation}>
                    <View style={styles.location}>
                        <Entypo name='location-pin' size={26} color={colors.white} />
                        <Text style={styles.personalInformationText}>Location</Text>
                    </View>
                    <View style={styles.email}>
                        <Entypo name='mail' size={26} color={colors.white} />
                        <Text style={[styles.personalInformationText, { marginLeft: 5 }]}>Email</Text>
                    </View>
                </View>
                <View style={styles.followWrapper}>
                    <View style={styles.followers}>
                        <Text style={styles.followText}>0</Text>
                        <Text style={styles.followText}>Followers</Text>
                    </View>
                    <View style={styles.following}>
                        <Text style={styles.followText}>0</Text>
                        <Text style={styles.followText}>Following</Text>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.countContainer}>
                        <Text style={styles.detailsText}>4</Text>
                        <Caption style={styles.detailsText}>Post Count</Caption>
                    </View>
                    <View style={styles.countContainer}>
                        <Text style={styles.detailsText}>5</Text>
                        <Caption style={styles.detailsText}>Comment Count</Caption>
                    </View>
                </View>

                <TouchableOpacity onPress={''} style={styles.button}>
                    <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    informationWrapper: {
        height: 420,
        backgroundColor: colors.teallight,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    profileInformation: {
        marginLeft: 30,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileInformationInner: {
        flexDirection: 'column',
        marginLeft: 15,
    },
    profileInformationText: {
        fontFamily: 'Poppins_400Regular',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    personalInformation: {
        flexDirection: 'row',
        marginTop: 35
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