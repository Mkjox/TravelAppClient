import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Alert, ActivityIndicator } from "react-native";
import colors from "../assets/colors/colors";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import PostService from '../assets/data/services/PostService.js';
import LikeService from "../assets/data/services/LikeService";

function Post({ postId, userId }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await PostService.getAllPostsByNonDeletedAndActive();
                setData(posts);
            }
            catch (error) {
                setError("Error fetching posts");
                console.error("Error fetching data:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const checkIfLiked = async () => {
            try {
                const liked = await isPostLiked(postId, userId);
                setIsLiked(liked);
            }
            catch (error) {
                Alert.alert('Error', 'Could not check liked status');
            }
        };
        checkIfLiked();
    }, [postId, userId]);

    const isPostLiked = async (postId, userId) => {
        try {
            const response = await LikeService.isPostLiked(postId, userId);
            return response.data.isLiked;
        }
        catch (error) {
            console.error('Error checking if post is liked:', error);
            return false;
        }
    };

    const handleLike = async (itemId) => {
        try {
            if (isLiked) {
                await LikeService.unlikePost(userId, postId)
                setIsLiked(false);
            }
            else {
                await LikeService.likePost(userId, postId);
                setIsLiked(true);
            }
        }
        catch (error) {
            Alert.alert('Error', 'There has been an error while liking the post.');
        }
    };

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
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Card
                                style={styles.postInnerWrapper}
                                onPress={() =>
                                    navigation.navigate("PostDetails", { item: item })
                                }
                            >
                                <ImageBackground source={{ uri: item.image }} style={styles.postItemImage}>
                                    <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.heart}>
                                        <Entypo
                                            name={isLiked ? "heart" : "heart-outlined"}
                                            size={28}
                                            color={colors.orange} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <Card.Content style={styles.postText}>
                                    <Text style={styles.postItemTitle}>{item.title}</Text>
                                    <Text style={styles.postPlace}>
                                        <MaterialIcons
                                            name="place"
                                            size={15}
                                            color={colors.darkGray}
                                        />
                                        {item.place}
                                    </Text>
                                    <Text style={styles.postContent}>{item.body}</Text>
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
    postWrapper: {
        marginHorizontal: 5,
        marginBottom: 10,
    },
    postInnerWrapper: {
        marginHorizontal: 2,
        marginVertical: 5
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
        marginVertical: 5,
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