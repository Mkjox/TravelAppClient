import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    ScrollView,
    SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height } = Dimensions.get("window");

const settings = [
    {
        key: "replies",
        label: "Someone replies to my comment",
    },
    {
        key: "comments",
        label: "Someone comments on my post",
    },
    {
        key: "likesContent",
        label: "Someone likes my content",
    },
    {
        key: "likesComment",
        label: "Someone likes my comment",
    },
    {
        key: "login",
        label: "Someone tries to login to my account",
    },
];

const NotificationsScreen = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();
    const themeStyles = isDark ? darkTheme : lightTheme;

    const [toggles, setToggles] = useState({
        replies: false,
        comments: false,
        likesContent: false,
        likesComment: false,
        login: true,
    });

    const onToggle = (key) =>
        setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

    const handleConfirm = () => {
        // placeholder for submit logic
        console.log("Settings saved:", toggles);
        alert("Notification settings saved!");
    };

    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            <View style={[styles.header, themeStyles.primaryBackground]}>
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color={themeStyles.icon.color}
                    onPress={() => navigation.goBack()}
                />
                <Text style={[styles.headerTitle, themeStyles.text]}>Notifications</Text>
            </View>
            <View style={themeStyles.hairLine} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={[styles.sectionTitle, themeStyles.text]}>
                    Send me a notification when:
                </Text>

                <View style={[styles.card, themeStyles.cardBackground]}>
                    {settings.map(({ key, label }) => (
                        <View style={styles.row} key={key}>
                            <Text style={[styles.label, themeStyles.text]}>{label}</Text>
                            <Switch
                                value={toggles[key]}
                                onValueChange={() => onToggle(key)}
                                trackColor={{ false: "#ccc", true: "#2DCCA7" }}
                                thumbColor={toggles[key] ? "#fff" : "#f4f3f4"}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={[styles.footer, themeStyles.container]}>
                <TouchableOpacity
                    style={[styles.confirmButton, themeStyles.button]}
                    onPress={handleConfirm}
                >
                    <Text style={[styles.confirmText, themeStyles.buttonText]}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const FOOTER_HEIGHT = 80;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 15,
    },

    scrollContent: {
        padding: 20,
        paddingBottom: FOOTER_HEIGHT + 20,
    },

    sectionTitle: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: "500",
    },

    card: {
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    label: {
        flex: 1,
        paddingRight: 10,
        fontSize: 14
    },

    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: FOOTER_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    confirmButton: {
        width: "60%",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
    },
    confirmText: {
        fontSize: 16,
        fontWeight: "600",
    },
});

export default NotificationsScreen;