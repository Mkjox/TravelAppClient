import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Entypo, Ionicons } from '@expo/vector-icons';
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import LikedData from '../../assets/data/likedData.json';
import { Card } from "react-native-paper";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height, width } = Dimensions.get('window');

const CommentsSreen = () => {
    const [data, setData] = useState([]);
    var navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    useEffect(() => {
        try {
            setData(LikedData);
        }
        catch (error) {
            console.error("Error fetching data:", error)
        }
    }, []);

    return (
        <View style={[styles.container, themeStyles.container]}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Ionicons name='arrow-back' size={24} onPress={() => navigation.goBack()} color={themeStyles.icon.color} />
                    <Text style={[styles.headerText, themeStyles.text]}>Comments</Text>
                </View>

                <View style={[themeStyles.hairLine, { marginBottom: 10 }]} />

                <FlatList
                    alwaysBounceVertical='true'
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card style={[styles.commentWrapper, themeStyles.card]}>
                            <Card.Content>
                                <Entypo name='dots-three-vertical' style={styles.more} size={20} color={themeStyles.icon.color} />
                                <Text style={[styles.body, themeStyles.text]}>{item.body}</Text>
                                <View style={[styles.titleWrapper, themeStyles.text]}>
                                    <Entypo name='text-document' size={22} style={styles.icon} color={themeStyles.icon.color} />
                                    <Text style={[styles.title, themeStyles.text]}>{item.title}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    )}
                />
            </View>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        marginTop: StatusBar.currentHeight
    },
    header: {
        marginTop: 15,
        marginLeft: 15,
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        marginLeft: 5
    },
    commentWrapper: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 15
    },
    body: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        marginTop: -15
    },
    title: {
        color: colors.white,
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        marginHorizontal: 10,
    },
    more: {
        position: 'static',
        alignContent: 'center',
        alignSelf: 'flex-end',
    },
    icon: {
        color: colors.white,
        marginRight: -5,
    },
    titleWrapper: {
        flexDirection: 'row',
        width: '95%',
        marginTop: 10,
        marginBottom: -5
    }
});

export default CommentsSreen;