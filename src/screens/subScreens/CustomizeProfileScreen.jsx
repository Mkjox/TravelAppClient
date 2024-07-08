import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import { Avatar, Button } from "react-native-paper";

const CustomizeProfileScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [nickname, setNickname] = useState('');
    // USE DATEPICKER
    const [dateofbirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const handlePress = () => {
        if (!fullName || !nickname || !dateofbirth || !email || !gender) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        const apiUrl = '';

        const data = {
            fullName,
            nickname,
            dateofbirth,
            email,
            gender
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    Alert.alert('Success', 'Update was successful');
                }
                else {
                    Alert.alert('Error', result.message || 'Update failed');
                }
            })
            .catch((error) => {
                Alert.alert('Error', 'An error occured');
                console.error(error);
            });
    };

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
                        <TextInput
                            style={styles.input}
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Nickname</Text>
                        <TextInput
                            style={styles.input}
                            value={nickname}
                            onChangeText={setNickname}
                        />
                    </View>

                    {/* USE DATEPICKER */}
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Date of Birth</Text>
                        <TextInput
                            style={styles.input}
                            value={dateofbirth}
                            onChangeText={setDateOfBirth}
                        />
                    </View>


                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>


                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Gender</Text>
                        <TextInput
                            style={styles.input}
                            value={gender}
                            onChangeText={setGender}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button title="Submit" mode="elevated" onPress={handlePress} buttonColor={colors.teallight} textColor={colors.white}>Update</Button>
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
        marginTop: 20,
        borderWidth: 0.6
    },
    inputWrapper: {
        marginVertical: 10
    },
    inputText: {
        fontFamily: 'Poppins_400Regular',
        color: '#615F5F'
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