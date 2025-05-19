import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height } = Dimensions.get("window");

const languages = ["English", "Turkish", "Spanish", "French", "German"];

const LanguageScreen = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();
    const themeStyles = isDark ? darkTheme : lightTheme;

    const [selected, setSelected] = useState("English");

    const handleConfirm = () => {
        console.log("Language chosen:", selected);
        // TODO: save selection & navigate back or forward
        navigation.goBack();
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
                <Text style={[styles.headerTitle, themeStyles.text]}>Language</Text>
            </View>

            {/* LANGUAGE LIST */}
            <ScrollView contentContainerStyle={styles.scroll}>
                {languages.map((lang) => {
                    const isSelected = lang === selected;
                    return (
                        <TouchableOpacity
                            key={lang}
                            style={[styles.row, themeStyles.cardBackground]}
                            onPress={() => setSelected(lang)}
                        >
                            <Text style={[styles.label, themeStyles.text]}>{lang}</Text>
                            {isSelected && (
                                <Ionicons
                                    name="checkmark-circle"
                                    size={24}
                                    color={themeStyles.button.backgroundColor}
                                />
                            )}
                        </TouchableOpacity>
                    );
                })}
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
        borderColor: "#ccc",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 15,
    },

    scroll: {
        padding: 20,
        paddingBottom: FOOTER_HEIGHT + 20,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
    },

    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: FOOTER_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ccc",
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

export default LanguageScreen;