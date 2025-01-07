import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';
import PostService from '../../assets/data/services/PostService';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../assets/colors/themeColors';
import axios from 'axios';
// import ProtectedRoute from '../../assets/data/services/ProtectedRoute';
import * as ImagePicker from 'expo-image-picker';
// import ImageViewer from '../../components/ImageViewer';

const { height, width } = Dimensions.get('window');

const AddPostScreen = ({ navigation }) => {
    // const { user } = useAuth();
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
    const [selectedImage, setSelectedImage] = useState(null);
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    const handleAddPost = async () => {
        try {
            const response = await PostService.addPost(thumbnail, title, content, balance, rating, duration, category)
            // const response = await axios.post(`${API_URL}/Post/Add`, {
            //     thumbnail,
            //     title,
            //     content,
            //     balance,
            //     rating,
            //     duration,
            //     category,
            //     createdByName: user.username
            // });
            console.log('Post added:', response.data);

            //Add modal to confirm
            navigation.navigate('Home');
        }
        catch (error) {
            setError('Error adding post:', error);
        }
    };

    // const pickImageAsync = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         allowsEditing: true,
    //         quality: 1
    //     });

    //     if (!result.canceled) {
    //         setSelectedImage(result.assets[0].uri);
    //     }
    //     else {
    //         alert('You did not select any image.');
    //     }
    // }

    return (
        <ScrollView style={[{ flex: 1 }, themeStyles.container]}>
            {/* <ProtectedRoute roles={['User']} /> */}
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' size={32} color={themeStyles.icon.color} />
                    </TouchableOpacity>
                    <Text style={[styles.title, themeStyles.text]}>Add Post</Text>
                </View>
                <View style={themeStyles.hairLine} />

                {/* <View style={styles.image}>
                    <ImageViewer 
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                    />
                </View> */}

                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText, themeStyles.text]}>Post Title</Text>
                    <TextInput style={[styles.input, themeStyles.card]}
                        onChangeText={setTitle}
                        value={title}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText, themeStyles.text]}>Post Description</Text>
                    <TextInput style={[[styles.input, themeStyles.card], { height: 200 }]}
                        onChangeText={setDescription}
                        value={description}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText, themeStyles.text]}>Place</Text>
                    <TextInput style={[styles.maps, themeStyles.card]}
                        onChangeText={setPlace}
                        value={place}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText, themeStyles.text]}>Suggested budget</Text>
                    <TextInput style={[styles.input, themeStyles.card]}
                        onChangeText={setBudget}
                        value={budget}
                        inputMode='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText, themeStyles.text]}>Rating out of five</Text>
                    <TextInput style={[styles.input, themeStyles.card]}
                        onChangeText={setRating}
                        value={rating}
                        inputMode='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText, themeStyles.text]}>How long does the trip take</Text>
                    <TextInput style={[styles.input, themeStyles.card]}
                        onChangeText={setDuration}
                        value={duration}
                        inputMode='numeric'
                    />
                </View>

                {/* <View style={styles.inputWrapper}>
                    <Text style={[styles.inputText,themeStyles.text]}>Category</Text>
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
                </View> */}

                {error ? <Text style={[styles.errorText, themeStyles.text]}>{error}</Text> : null}

                <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleAddPost}>
                    <Text style={[styles.buttonText, themeStyles.buttonText]}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight - 20
    },
    header: {
        marginTop: 25,
        marginLeft: 15,
        position: 'relative',
        flexDirection: 'row'
    },
    title: {
        marginTop: 5,
        fontFamily: 'Poppins_400Regular'
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15,
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
        alignSelf: 'flex-start',
        marginLeft: '15%'
    },
    input: {
        marginHorizontal: 10,
        color: colors.black,
        width: width * 0.7,
        height: 40,
        textAlign: 'left',
        borderStartEndRadius: 25,
        borderWidth: 1,
        fontFamily: 'Poppins_400Regular',
        borderRadius: 10,
        elevation: 5
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
        elevation: 10,
    },
    // dropdownContainer: {
    //     backgroundColor: '#fff',
    //     borderWidth: 0.3,
    //     borderColor: '#ccc',
    //     borderRadius: 10,
    //     width: 300,
    //     alignSelf: 'center'
    // },
    button: {
        width: width * 0.7,
        height: height * 0.05,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: height * 0.1,
        marginTop: height * 0.03,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default AddPostScreen;