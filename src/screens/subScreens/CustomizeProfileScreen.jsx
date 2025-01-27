import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, Dimensions } from "react-native";
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import { Avatar, Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../assets/colors/themeColors';

const { height, width } = Dimensions.get("window")

const CustomizeProfileScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [nickname, setNickname] = useState('');
    // USE DATEPICKER
    const [dateofbirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const { isDark } = useTheme();
    const themeStyles = isDark ? darkTheme : lightTheme;
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]);

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
        <SafeAreaView style={[{ flex: 1 }, themeStyles.container]}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' size={30} color={themeStyles.icon.color} />
                    </TouchableOpacity>
                    <Text style={[styles.title, themeStyles.text]}>Customize Profile</Text>
                </View>

                <View style={themeStyles.hairLine} />

                <View style={styles.content}>
                    <Avatar.Image size={60} style={styles.profilePhoto} />

                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputText, themeStyles.text]}>Full Name</Text>
                        <TextInput
                            style={[styles.input, themeStyles.card]}
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputText, themeStyles.text]}>Nickname</Text>
                        <TextInput
                            style={[styles.input, themeStyles.card]}
                            value={nickname}
                            onChangeText={setNickname}
                        />
                    </View>

                    {/* USE DATEPICKER */}
                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputText, themeStyles.text]}>Date of Birth</Text>
                        <TextInput
                            style={[styles.input, themeStyles.card]}
                            value={dateofbirth}
                            onChangeText={setDateOfBirth}
                        />
                    </View>


                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputText, themeStyles.text]}>Email</Text>
                        <TextInput
                            style={[styles.input, themeStyles.card]}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>


                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputText, themeStyles.text]}>Gender</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder=""
                            style={[styles.dropdown, themeStyles.card]}
                            dropDownContainerStyle={[styles.dropdownContainer, themeStyles.text]}
                        />
                    </View>

                    <TouchableOpacity onPress={handlePress}>
                        <View style={[styles.button, themeStyles.button]}>
                            <Text style={[styles.buttonText, themeStyles.buttonText]}>Update</Text>
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
    header: {
        marginTop: 25,
        marginLeft: 15,
        position: 'relative',
        flexDirection: 'row'
    },
    title: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        marginTop: 5
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
    dropdownContainer: {
        backgroundColor: '#fff',
        borderWidth: 0.3,
        borderColor: '#ccc',
        borderRadius: 10,
        width: 300
    },
    button: {
        width: 300,
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
        marginTop: height * 0.05
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Poppins_400Regular'
    },
});

export default CustomizeProfileScreen;