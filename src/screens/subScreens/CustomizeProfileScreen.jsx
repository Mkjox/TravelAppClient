import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import { Avatar, Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomizeProfileScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [nickname, setNickname] = useState('');
    // USE DATEPICKER
    const [dateofbirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ])

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
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder=""
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropDownContainer}
                        />
                    </View>

                    <TouchableOpacity onPress={handlePress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Update</Text>
                    </View>
                    </TouchableOpacity>
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
        width: 300,
        height: 55,
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: '#ccc',
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 10,
    },
    dropdown: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        height: 55,
        justifyContent: 'center',
        width: 300,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 10,
    },
    dropDownContainer: {
        backgroundColor: '#fff',
        borderWidth: 0.3,
        borderColor: '#ccc',
        borderRadius: 10,
        width: 300
    },
    button: {
        width: 300,
        bottom: -130,
        padding: 18,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 5,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: colors.teallight,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Poppins_400Regular'
    },
});

export default CustomizeProfileScreen;