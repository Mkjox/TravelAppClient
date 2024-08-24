import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import colors from "../../assets/colors/colors";
import LikedData from '../../assets/data/likedData.json';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

const SharedPostsScreen = () => {
    const [data, setData] = useState([]);
    var navigation = useNavigation();

    useEffect(() => {
        try {
            setData(LikedData);
        }
        catch (error) {
            console.error("Error fetching data:", error)
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Entypo name='chevron-left' size={24} onPress={() => navigation.goBack()}>
                    <Text style={styles.headerText}>Shared Posts</Text>
                </Entypo>
            </View>

            <View style={styles.sharedWrapper}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>
                        <Card style={styles.sharedItemWrapper}>
                            <ImageBackground src={item.image} style={styles.sharedItemImage}>
                                <TouchableOpacity style={styles.moreButton}>
                                    <Entypo name='dots-three-vertical' size={20} colors={colors.white} />
                                </TouchableOpacity>
                            </ImageBackground>
                            <Card.Content>
                                <Text style={styles.sharedItemTitle}>{item.title}</Text>
                                <Text style={{marginVertical: 1}}>
                                    <MaterialIcons name='place' size={15} color={colors.black} />
                                    {item.place}
                                </Text>
                                <Text style={styles.sharedItemBody}>{item.body}</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                )}
                alwaysBounceVertical={true}
                showsVerticalScrollIndicator={false}
            />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    header: {
        position: 'static',
        marginTop: 15,
        marginLeft: 15,
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