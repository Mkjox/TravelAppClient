import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { List } from "react-native-paper";
import colors from "../../assets/colors/colors";

const NotificationsScreen = () => {
    // DON'T FORGET TO CHANGE THESE
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const handleConfirmPress = () => {
        console.log('Confirm button pressed');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.titleWrapper}>
                <Entypo name='chevron-left' size={28} />
                <Text style={styles.title}>Notifications</Text>
            </TouchableOpacity>
            <Text style={styles.infoTitle}>Send me notification when</Text>
            <View>
                <List.Item
                    title="Someone replies to my comment"
                    titleStyle={styles.options}
                    right={props => <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
                />
                <List.Item
                    title="Someone comments on my post"
                    titleStyle={styles.options}
                    right={props => <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
                />
                <List.Item
                    title="Someone likes my content"
                    titleStyle={styles.options}
                    right={props => <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
                />
                <List.Item
                    title="Someone likes my comment"
                    titleStyle={styles.options}
                    right={props => <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
                />

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
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
    },
    infoTitle: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 15,
        fontFamily: 'Poppins_400Regular'
    },
    options: {
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
        bottom: -275
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default NotificationsScreen;