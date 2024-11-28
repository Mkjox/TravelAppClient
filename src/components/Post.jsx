import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator } from "react-native";
import colors from "../assets/colors/colors";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import PostService from '../assets/data/services/PostService.js';
import { FlatList } from "react-native-gesture-handler";
import LikeService from "../assets/data/services/LikeService";
import CategoryService from "../assets/data/services/CategoryService.js";
import { useTheme } from "../context/ThemeContext.tsx";
import { darkTheme, lightTheme } from "../assets/colors/themeColors.tsx";

function Post() {
    const [post, setPost] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;


    async function getPosts() {
        var result = await PostService.getAllPostsByNonDeletedAndActive();
        setPost(result.data.posts);
        setLoading(false);
    }

    async function getCategories() {
        var result = await CategoryService.getAllByNonDeletedAndActive();
        setCategory(result.data.categories);
    }

    useEffect(() => {
        getPosts();
        getCategories();
    }, []);

    // const isPostLiked = async (postId, userId) => {
    //     try {
    //         const response = await LikeService.isPostLiked(postId, userId);
    //         return response.data.isLiked;
    //     }
    //     catch (error) {
    //         console.error('Error checking if post is liked:', error);
    //         return false;
    //     }
    // };

    // useEffect(() => {
    //     const checkIfLiked = async () => {
    //         try {
    //             const liked = await LikeService.isPostLiked(postId, userId);
    //             setIsLiked(liked);
    //             console.log(error.liked.data);
    //         }
    //         catch (error) {
    //             // console.error('Error', 'Could not check liked status');
    //             console.log(error.data);
    //         }
    //     };
    //     checkIfLiked();
    // }, [postId, userId]);

    // const handleLike = async (postId) => {
    //     try {
    //         if (isLiked) {
    //             await LikeService.unlikePost(postId, userId)
    //             setIsLiked(false);
    //         }
    //         else {
    //             await LikeService.likePost(postId, userId);
    //             setIsLiked(true);
    //         }
    //     }
    //     catch (error) {
    //         Alert.alert('Error', 'There has been an error while liking the post.');
    //         console.error('Error liking/unliking post:', error.response ? error.response.data : error.message);
    //     }
    // };

    if (loading) {
        return <ActivityIndicator size="large" color={colors.orange} />;
    };

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>
    }

    return (
        <View style={styles.postWrapper}>
            <View style={styles.postItemsWrapper}>
                <FlatList
                    data={post}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={() => (
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={category}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={styles.categoryItem}>
                                    <Text style={styles.categoryText}>{item.name}</Text>
                                </TouchableOpacity>
                            }
                        />
                    )}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Card
                                style={[styles.postInnerWrapper, themeStyles.card]}
                                onPress={() =>
                                    navigation.navigate("PostDetails", { item: item })
                                }
                            >
                                <ImageBackground src={'https://picsum.photos/700'} style={styles.postItemImage}>
                                    <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.heart}>
                                        <Entypo
                                            name={isLiked ? "heart" : "heart-outlined"}
                                            size={28}
                                            color={colors.orange} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <Card.Content style={styles.postText}>
                                    <Text style={[styles.postItemTitle,themeStyles.text]}>{item.title}</Text>
                                    <Text style={[styles.postPlace,themeStyles.text]}>
                                        <MaterialIcons
                                            name="place"
                                            size={15}
                                            color={themeStyles.icon.color}
                                        />
                                        {item.location}
                                    </Text>
                                    <Text style={[styles.postContent,themeStyles.text]}>{item.content}</Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                    alwaysBounceVertical={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryItem: {
        marginVertical: 10,
        marginHorizontal: 15,
        alignItems: 'center'
    },
    categoryText: {
        color: colors.darkGray,
        fontFamily: 'Poppins_500Medium',
        fontSize: 16
    },
    postWrapper: {
        marginHorizontal: 5,
        marginBottom: 10,
    },
    postInnerWrapper: {
        marginHorizontal: 2,
        marginVertical: 5,
        // borderWidth: 1,
    },
    postItemsWrapper: {
        paddingTop: 10,
        marginHorizontal: 5,
        width: "auto",
    },
    postItem: {
        width: 300,
        height: 120,
        marginRight: 20,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    postText: {
        fontSize: 16,
        color: "#FBFCFE",
        marginTop: 10,
        paddingBottom: 10,
        fontFamily: 'Poppins_400Regular',
    },
    postItemTitle: {
        fontSize: 16,
        color: colors.black,
        fontFamily: 'Poppins_500Medium',
    },
    postPlace: {
        marginBottom: 5,
        color: colors.black,
        fontFamily: 'Poppins_400Regular',
    },
    postContent: {
        fontFamily: 'Poppins_400Regular',
    },
    postItemImage: {
        height: 200,
        overflow: 'hidden',
        borderRadius: 10,
    },
    heart: {
        position: "absolute",
        right: 11,
        bottom: 15,
        width: 44,
        height: 44,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    errorText: {
        color: colors.red,
        textAlign: 'center'
    }
});

export default Post;