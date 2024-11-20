import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, StatusBar, Dimensions } from "react-native";
import colors from "../../assets/colors/colors";
import LikedData from '../../assets/data/likedData.json';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../assets/colors/themeColors';

const { height, width } = Dimensions.get('window');

const SharedPostsScreen = () => {
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
            <View style={styles.header}>
                <Entypo name='chevron-left' size={24} onPress={() => navigation.goBack()} color={themeStyles.icon.color}>
                    <Text style={[styles.headerText, themeStyles.text]}>Shared Posts</Text>
                </Entypo>
            </View>

            <View style={styles.sharedWrapper}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>
                            <Card style={[styles.sharedItemWrapper, themeStyles.card]}>
                                <ImageBackground src={item.image} style={styles.sharedItemImage}>
                                    <TouchableOpacity style={styles.moreButton}>
                                        <Entypo name='dots-three-vertical' size={20} colors={themeStyles.icon.color} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <Card.Content>
                                    <Text style={[styles.sharedItemTitle, themeStyles.text]}>{item.title}</Text>
                                    <Text style={[{ marginVertical: 1 }, themeStyles.text]}>
                                        <MaterialIcons name='place' size={15} color={themeStyles.icon.color} />
                                        {item.place}
                                    </Text>
                                    <Text style={[styles.sharedItemBody, themeStyles.text]}>{item.body}</Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                    alwaysBounceVertical={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'static',
        marginTop: 15,
        marginLeft: 15,
        marginTop: StatusBar.currentHeight - height * 0.01
    },
    headerText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 22
    },
    sharedWrapper: {
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 20,
        paddingTop: 7,
    },
    sharedItemWrapper: {
        marginHorizontal: 5,
        marginVertical: 5,
        width: "auto",
    },
    sharedItemImage: {
        height: 200,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        borderRadius: 10,
    },
    sharedItemBody: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
    },
    moreButton: {
        position: 'absolute',
        right: 6,
        top: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    sharedItemTitle: {
        fontSize: 16,
        color: colors.black,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: '500'
    },
});

export default SharedPostsScreen;