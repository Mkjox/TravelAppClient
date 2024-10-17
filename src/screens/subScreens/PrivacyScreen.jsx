import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons } from '@expo/vector-icons';
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/core";

const PrivacyScreen = () => {
    const navigation = useNavigation();
    const [repliesNotification, setRepliesNotification] = useState(false);
    const [commentsNotification, setCommentsNotification] = useState(false);
    const [likesContentNotification, setLikesContentNotification] = useState(false);

    const handleConfirm = async () => {
        const data = {
            repliesNotification,
            commentsNotification,
            likesContentNotification,
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
                <Ionicons name='arrow-back' size={24} onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>Privacy</Text>
            </TouchableOpacity>
            <View style={styles.listWrapper}>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>make my post count private</Text>
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
                    <Text style={styles.switchLabel}>make my comment count private</Text>
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
                    <Text style={styles.switchLabel}>make my profile private</Text>
                    <Switch
                        value={likesContentNotification}
                        onValueChange={setLikesContentNotification}
                        trackColor={{ false: '#E5E5E5', true: '#2DCCA7' }}
                        thumbColor={likesContentNotification ? '#ffffff' : '#f4f3f4'}
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
        marginLeft: 15,
        marginTop: 15,
        fontFamily: 'Poppins_400Regular'
    },
    title: {
        fontSize: 18,
        marginLeft: 5
    },
    listWrapper: {
        marginTop: 15
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
        fontFamily: 'Poppins_400Regular_Italic'
    },
    switch: {
        width: 100
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
        bottom: -550
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default PrivacyScreen;