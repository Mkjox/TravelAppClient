import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const FollowScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Entypo name='chevron-left' size={30} onPress={() => navigation.goBack()}/>
            </View>

            {/* 
                Add underline for the selected and add color for it also map the data for the selected tab
                I can make component for it or find a ready component
            */}

            <View style={styles.followBar}>
                <View style={styles.followingTab}>
                    <Text style={styles.followingText}>Following</Text>
                </View>
                <View style={styles.followersTab}>
                    <Text style={styles.followersText}>Followers</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10
    },

    followBar: {
        flexDirection: 'row',
        marginTop: 10
    },

    followingTab: {
        marginHorizontal: 5,
        marginLeft: 85,
    },

    followingText: {
        fontFamily: 'Poppins_500Medium',
        fontWeight: '600',
        color: '#A0A4AB'
    },

    followersTab: {
        marginHorizontal: 5,
        marginLeft: 95,
    },

    followersText: {
        fontFamily: 'Poppins_500Medium',
        fontWeight: '600',
        color: '#A0A4AB'
    }
});

export default FollowScreen;