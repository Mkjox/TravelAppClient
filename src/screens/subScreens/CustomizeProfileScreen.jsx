import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
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

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Full Name</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Nickname</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Date of Birth</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>


                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>


                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Gender</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>


                    <View style={styles.button}>
                        <Button title="Submit" mode="elevated" onPress={() => console.warn('Pressed')} buttonColor={colors.teallight} textColor={colors.white}>Submit</Button>
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
    inputWrapper: {
        marginVertical: 10
    },
    inputText: {
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: colors.white,
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
        elevation: 5,
    }
});

export default CustomizeProfileScreen;