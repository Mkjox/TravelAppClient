import React from "react";
import { StyleSheet, View, Text, TextInput  } from "react-native";
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import { Avatar, Button } from "react-native-paper";

const CustomizeProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Entypo name='chevron-left' size={26} style={styles.backIcon}>
                    <Text style={styles.title}>Customize Profile</Text>
                </Entypo>
                <View style={styles.content}>
                    <Avatar.Image size={60} style={styles.profilePhoto} />
                    <TextInput style={styles.input} placeholder="Full Name"></TextInput>
                    <TextInput style={styles.input} placeholder="Nickname"></TextInput>
                    <TextInput style={styles.input} placeholder="Date of Birth"></TextInput>
                    <TextInput style={styles.input} placeholder="Email"></TextInput>
                    <TextInput style={styles.input} placeholder="Gender"></TextInput>
                    <View style={styles.button}>
                    <Button title="Submit" mode="contained" onPress={() => console.warn('Pressed')}>Submit</Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        marginLeft: 15,
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    },
    content: {
        alignItems: 'center'
    },
    profilePhoto: {
        marginTop: 20
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: colors.white,
        marginTop: 15,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 5,
    },
    button: {
        width: 150,
        bottom: -150,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 5
    }
});

export default CustomizeProfileScreen;