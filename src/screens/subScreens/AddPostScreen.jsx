import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';

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
            <ScrollView style={{flex: 1}}>
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
                            onChangeText={text => handleInputChange('title', text)}
                            value={inputs.title}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Post Description</Text>
                        <TextInput style={[styles.input, { height: 200 }]}
                            onChangeText={text => handleInputChange('description', text)}
                            value={inputs.description}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Place</Text>
                        <TextInput style={styles.maps}
                            onChangeText={text => handleInputChange('place', text)}
                            value={inputs.place}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Suggested budget</Text>
                        <TextInput style={styles.input}
                            onChangeText={text => handleInputChange('price', text)}
                            value={inputs.price}
                            inputMode='numeric'
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Rating out of five</Text>
                        <TextInput style={styles.input}
                            onChangeText={text => handleInputChange('rating', text)}
                            value={inputs.rating}
                            inputMode='numeric'
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>How long does the trip take</Text>
                        <TextInput style={styles.input}
                            onChangeText={text => handleInputChange('duration', text)}
                            value={inputs.duration}
                            inputMode='numeric'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={handleSubmit} title='Submit' color={colors.teallight} />
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
        marginLeft: 20,
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