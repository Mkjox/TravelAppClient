import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { List } from "react-native-paper";
import colors from "../../assets/colors/colors";

const PrivacyScreen = () => {
    const [repliesNotification, setRepliesNotification] = useState(false);
    const [commentsNotification, setCommentsNotification] = useState(false);
    const [likesContentNotification, setLikesContentNotification] = useState(false);
    const [likesCommentNotification, setLikesCommentNotification] = useState(false);
    const [loginNotification, setLoginNotification] = useState(false);

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
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.titleWrapper}>
                <Entypo name='chevron-left' size={28} />
                <Text style={styles.title}>Privacy</Text>
            </TouchableOpacity>
            <View style={styles.listWrapper}>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>someone replies to my comment</Text>
                    <Switch 
                        value={repliesNotification}
                        onValueChange={setRepliesNotification}
                        trackColor={{false: '#E5E5E5', true: '#2DCCA7'}}
                        thumbColor={repliesNotification ? '#ffffff' : '#f4f3f4'}
                        ios_backgroundColor='#E5E5E5'
                        style={styles.switch}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>someone comments on my post</Text>
                    <Switch 
                        value={commentsNotification}
                        onValueChange={setCommentsNotification}
                        trackColor={{false: '#E5E5E5', true: '#2DCCA7'}}
                        thumbColor={commentsNotification ? '#ffffff' : '#f4f3f4'}
                        ios_backgroundColor='#E5E5E5'
                        style={styles.switch}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>someone likes my content</Text>
                    <Switch 
                        value={likesContentNotification}
                        onValueChange={setLikesContentNotification}
                        trackColor={{false: '#E5E5E5', true: '#2DCCA7'}}
                        thumbColor={likesContentNotification ? '#ffffff' : '#f4f3f4'}
                        ios_backgroundColor='#E5E5E5'
                        style={styles.switch}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>someone likes my comment</Text>
                    <Switch 
                        value={likesCommentNotification}
                        onValueChange={setLikesCommentNotification}
                        trackColor={{false: '#E5E5E5', true: '#2DCCA7'}}
                        thumbColor={likesCommentNotification ? '#ffffff' : '#f4f3f4'}
                        ios_backgroundColor='#E5E5E5'
                        style={styles.switch}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>someone tries to login to my account</Text>
                    <Switch 
                        value={loginNotification}
                        onValueChange={setLoginNotification}
                        trackColor={{false: '#E5E5E5', true: '#2DCCA7'}}
                        thumbColor={loginNotification ? '#ffffff' : '#f4f3f4'}
                        ios_backgroundColor='#E5E5E5'
                        style={styles.switch}
                    />
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>
                        Confirm
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
    titleWrapper: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        fontFamily: 'Poppins_400Regular'
    },
    title: {
        fontSize: 18,
        marginTop: 3
    },
    listWrapper: {
        marginTop: 15
    },

    switchContainer: {
        width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft: 15
    },
    switchLabel: {

    },
    switch: {
        fontFamily: 'Poppins_300Light'
    },
    confirmButton: {
        backgroundColor: colors.teallight,
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
        bottom: -350
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default PrivacyScreen;