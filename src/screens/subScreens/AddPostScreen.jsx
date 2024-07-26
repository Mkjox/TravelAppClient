import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';
import PostService from '../../assets/data/PostService';
import DropDownPicker from 'react-native-dropdown-picker';

const AddPostScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [budget, setBudget] = useState('');
    const [rating, setRating] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
    const { error, setError } = useState('');
    const [open, setOpen] = useState('');
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        { label: 'Hiking', value: 'hike' },
        { label: 'Bicycle', value: 'bicycle' },
        { label: 'Drive', value: 'drive' },
        { label: 'Kayak', value: 'kayak' },
        { label: 'Ski', value: 'ski' },
        { label: 'Water Ski', value: 'water_ski' },
        { label: 'Swim', value: 'swim' },
    ]);

    const handleAddPost = async () => {
        try {
            await PostService.addPost(photo, title, content, balance, rating, duration, category);
            navigation.navigate('Home');
        }
        catch (err) {
            setError(err.Message);
        }
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' size={32} color={colors.black} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Add Post</Text>
                </View>

                <View style={styles.image}>
                    <Text style={{ textAlign: 'center' }}>
                        This is where image picker goes
                    </Text>
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Post Title</Text>
                    <TextInput style={styles.input}
                        onChangeText={setTitle}
                        value={title}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Post Description</Text>
                    <TextInput style={[styles.input, { height: 200 }]}
                        onChangeText={setDescription}
                        value={description}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Place</Text>
                    <TextInput style={styles.maps}
                        onChangeText={setPlace}
                        value={place}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Suggested budget</Text>
                    <TextInput style={styles.input}
                        onChangeText={setBudget}
                        value={budget}
                        inputMode='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Rating out of five</Text>
                    <TextInput style={styles.input}
                        onChangeText={setRating}
                        value={rating}
                        inputMode='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>How long does the trip take</Text>
                    <TextInput style={styles.input}
                        onChangeText={setDuration}
                        value={duration}
                        inputMode='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Category</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder=""
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownContainer}
                    />
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <View style={styles.button}>
                    <Button onPress={handleAddPost} title='Submit' color={colors.teallight} />
                </View>
            </View>
        </ScrollView>
    );
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    header: {
        marginTop: 25,
        marginLeft: 15,
        position: 'relative',
        flexDirection: 'row'
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15,
    },
    title: {
        marginTop: 5,
        fontFamily: 'Poppins_400Regular'
    },
    inputWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputText: {
        fontFamily: 'Poppins_400Regular',
        marginTop: 15,
        color: colors.gray,
        fontSize: 14,
    },
    input: {
        marginHorizontal: 10,
        color: colors.black,
        width: 300,
        height: 40,
        textAlign: 'left',
        borderStartEndRadius: 25,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        fontFamily: 'Poppins_400Regular',
    },
    maps: {
        borderWidth: 0.7,
        height: 300,
        width: 300,
        borderRadius: 15
    },
    dropdown: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        height: 55,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 300,
        marginTop: 15,
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
        width: 300,
        alignSelf: 'center'
    },
    button: {
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 20,
        bottom: -40,
        marginBottom: 35,
        marginTop: -20
    }
});

export default AddPostScreen;