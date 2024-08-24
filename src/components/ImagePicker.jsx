import { Button, StyleSheet, View } from "react-native";
import * as ImagePick from 'expo-image-picker';

function ImagePicker() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePick.launchImageLibraryAsync({
            mediaTypes: ImagePick.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Pick an image from gallery" onPress={pickImage} />
            {image && <Image source={{uri: image}} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    },
});

export default ImagePicker;