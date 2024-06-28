import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';

const AddPostScreen = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        place: '',
        price: '',
        rating: '',
        duration: ''
    });
    const handleInputChange = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = () => {

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' size={32} color={colors.black} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Add Post</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                        onChangeText={text => handleInputChange('title', text)}
                        value={inputs.title}
                        placeholder='Enter Title' />
                    <TextInput style={[styles.textInput,{height: 200}]}
                        onChangeText={text => handleInputChange('description', text)}
                        value={inputs.description}
                        placeholder='Enter Description'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => handleInputChange('place', text)}
                        value={inputs.place}
                        placeholder='Enter Place'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => handleInputChange('price', text)}
                        value={inputs.price}
                        placeholder='Enter Price'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => handleInputChange('rating', text)}
                        value={inputs.rating}
                        placeholder='Enter Rating'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => handleInputChange('duration', text)}
                        value={inputs.duration}
                        placeholder='Enter Duration'
                    />
                    <View style={styles.button}>
                    <Button onPress={handleSubmit} title='Submit' color={colors.teallight} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    header: {
        marginTop: 20,
        marginLeft: 20,
        position: 'relative',
        flexDirection: 'row'
    },
    title:{
        marginTop: 5,
        fontFamily: 'Poppins_400Regular'
    },
    textInput: {
        marginHorizontal: 10,
        marginTop: 15,
        alignSelf: 'center',
        color: colors.teallight,
        width: 300,
        backgroundColor: colors.white,
        height: 70,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins_400Regular'
    },
    button: {
        width: 300,
        margin: 10,
        alignSelf:'center',
        borderRadius: 20,
        padding: 20,
        bottom: -40
    }
});

export default AddPostScreen;