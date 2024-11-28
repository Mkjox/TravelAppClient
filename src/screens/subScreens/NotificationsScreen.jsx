import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Alert, StatusBar, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { List } from "react-native-paper";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height, width } = Dimensions.get('window');

const NotificationsScreen = () => {
    const navigation = useNavigation();
    const [repliesNotification, setRepliesNotification] = useState(false);
    const [commentsNotification, setCommentsNotification] = useState(false);
    const [likesContentNotification, setLikesContentNotification] = useState(false);
    const [likesCommentNotification, setLikesCommentNotification] = useState(false);
    const [loginNotification, setLoginNotification] = useState(true);
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    const handleConfirm = async () => {
        const data = {
            repliesNotification,
            commentsNotification,
            likesContentNotification,
            likesCommentNotification,
            loginNotification
        };

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            Alert.alert('Success', 'Notification settings updated successfully!');
            console.log(result);
        }
        catch (error) {
            Alert.alert('Error', 'There was a problem updating your notification settings.');
            console.error('Error:', error);
        }
    };

    return (
        <View style={[styles.container, themeStyles.container]}>
            <View style={styles.innerContainer}>

                <TouchableOpacity style={styles.titleWrapper}>
                    <Ionicons name='arrow-back' size={24} onPress={() => navigation.goBack()} color={themeStyles.icon.color} />
                    <Text style={[styles.title, themeStyles.text]}>Notifications</Text>
                </TouchableOpacity>
                
                <View style={themeStyles.hairLine} />

                <Text style={[styles.infoTitle, themeStyles.text]}>Send me notification when;</Text>
                <View>
                    <View style={styles.switchContainer}>
                        <Text style={[styles.switchLabel, themeStyles.text]}>someone replies to my comment</Text>
                        <Switch
                            value={repliesNotification}
                            onValueChange={setRepliesNotification}
                            trackColor={{ false: '#E5E5E5', true: '#2DCCA7' }}
                            thumbColor={repliesNotification ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor='#E5E5E5'
                            style={styles.switch}
                        />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={[styles.switchLabel, themeStyles.text]}>someone comments on my post</Text>
                        <Switch
                            value={commentsNotification}
                            onValueChange={setCommentsNotification}
                            trackColor={{ false: '#E5E5E5', true: '#2DCCA7' }}
                            thumbColor={commentsNotification ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor='#E5E5E5'
                            style={styles.switch}
                        />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={[styles.switchLabel, themeStyles.text]}>someone likes my content</Text>
                        <Switch
                            value={likesContentNotification}
                            onValueChange={setLikesContentNotification}
                            trackColor={{ false: '#E5E5E5', true: '#2DCCA7' }}
                            thumbColor={likesContentNotification ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor='#E5E5E5'
                            style={styles.switch}
                        />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={[styles.switchLabel, themeStyles.text]}>someone likes my comment</Text>
                        <Switch
                            value={likesCommentNotification}
                            onValueChange={setLikesCommentNotification}
                            trackColor={{ false: '#E5E5E5', true: '#2DCCA7' }}
                            thumbColor={likesCommentNotification ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor='#E5E5E5'
                            style={styles.switch}
                        />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={[styles.switchLabel, themeStyles.text]}>someone tries to login to my account</Text>
                        <Switch
                            value={loginNotification}
                            onValueChange={setLoginNotification}
                            trackColor={{ false: '#E5E5E5', true: '#2DCCA7' }}
                            thumbColor={loginNotification ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor='#E5E5E5'
                            style={styles.switch}
                        />
                    </View>

                    <TouchableOpacity style={[styles.confirmButton, themeStyles.button]} onPress={handleConfirm}>
                        <Text style={[styles.confirmButtonText, themeStyles.buttonText]}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        marginTop: StatusBar.currentHeight - 10
    },
    titleWrapper: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 20,
        fontFamily: 'Poppins_400Regular'
    },
    title: {
        fontSize: 18,
        marginLeft: 5
    },
    infoTitle: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 15,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 10,
    },
    switchContainer: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 15,
    },
    switchLabel: {
        fontFamily: 'Poppins_400Regular_Italic',
    },
    switch: {
        width: 100
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
        marginTop: height * 0.4
    },
    confirmButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default NotificationsScreen;