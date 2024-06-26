import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import colors from "../assets/colors/colors";
import Entypo from '@expo/vector-icons/Entypo';
import LikedData from "../assets/data/likedData";
import { useNavigation } from "@react-navigation/core";

function Explore() {
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        try {
            setData(LikedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    return (
        <View>
            <View>
                <Text style={styles.explore}>Explore</Text>
                <View style={styles.exploreItem}>
                    {/* Add color blue for the selected INSTEAD OF THIS */}
                    <Text style={[styles.exploreItemText, {color: colors.tealdark}]}>All</Text>
                    <Text style={styles.exploreItemText}>Routes</Text>
                    <Text style={styles.exploreItemText}>City</Text>
                    <Text style={styles.exploreItemText}>Experiences</Text>
                </View>
            </View>
            <View style={styles.pinnedPostWrapper}>
                <FlatList
                    data={data}
                    maxToRenderPerBatch={5}
                    keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('PostDetails', {
                            item: item
                        })}>
                            <ImageBackground src={item.image} style={styles.pinnedPost} imageStyle={styles.pinnedPostImage}>
                                <Text style={styles.pinnedPostTitle}>{item.title}</Text>
                                <View style={styles.pinnedPostLocationWrapper}>
                                    <Entypo name="location-pin" size={18} color={colors.white} />
                                    <Text style={styles.pinnedPostLocationText}>{item.place}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )} horizontal={true} showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    explore: {
        marginVertical: 15,
        fontSize: 18,
        marginLeft: 20,
        fontFamily: 'Poppins_600SemiBold'
    },
    exploreItem: {
        fontSize: 24,
        alignContent: 'center',
        width: 343,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    exploreItemText: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.gray
    },
    pinnedPostWrapper: {
        paddingVertical: 20,
        marginHorizontal: 12,
        // width: 'auto',
        // height: 300,
        // borderRadius: 12,
        // marginVertical: 10
    },
    pinnedPost: {
        width: 180,
        height: 230,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20
    },
    pinnedPostImage: {
        borderRadius: 15
    },
    pinnedPostTitle: {
        fontFamily: 'Poppins_300Light',
        fontSize: 16,
        color: colors.white
    },
    pinnedPostLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    pinnedPostLocationText: {
        marginLeft: 5,
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
        color: colors.white
    },
});

export default Explore;