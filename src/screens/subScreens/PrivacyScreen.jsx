import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    SafeAreaView,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height } = Dimensions.get("window");

const options = [
    { key: "hidePosts", label: "Make my post count private" },
    { key: "hideComments", label: "Make my comment count private" },
    { key: "privateProfile", label: "Make my profile private" },
];

const PrivacyScreen = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();
    const themeStyles = isDark ? darkTheme : lightTheme;

    const [toggles, setToggles] = useState({
        hidePosts: false,
        hideComments: false,
        privateProfile: false,
    });

    const onToggle = (key) =>
        setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

    const handleConfirm = () => {
        console.log("Privacy settings saved:", toggles);
        alert("Privacy settings saved!");
    };

    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            {/* HEADER */}
            <View style={[styles.header, themeStyles.primaryBackground]}>
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color={themeStyles.text.color}
                    onPress={() => navigation.goBack()}
                />
                <Text style={[styles.headerTitle, themeStyles.text]}>Privacy</Text>
            </View>

            {/* OPTIONS */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.card, themeStyles.cardBackground]}>
                    {options.map(({ key, label }) => (
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

            {/* FOOTER */}
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
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#ddd",
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

    card: {
        borderRadius: 10,
        padding: 15,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    label: {
        fontSize: 16,
        flex: 1,
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
        elevation: 2,
    },
    confirmText: {
        fontSize: 16,
        fontWeight: "600",
    },
});

export default PrivacyScreen;