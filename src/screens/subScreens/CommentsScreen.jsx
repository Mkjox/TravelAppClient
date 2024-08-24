import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import LikedData from '../../assets/data/likedData.json';
import { Card } from "react-native-paper";

const CommentsSreen = () => {
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
                    <Text style={styles.headerText}>Comments</Text>
                </Entypo>
            </View>

            <FlatList
                alwaysBounceVertical='true'
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={styles.commentWrapper}>
                        <Card.Content>
                            <Entypo name='dots-three-vertical' style={styles.more} size={20} color={colors.white} />
                            <Text style={styles.body}>{item.body}</Text>
                            <View style={styles.titleWrapper}>
                                <Entypo name='text-document' size={22} style={styles.icon} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </Card.Content>
                    </Card>
                )}
            />
            <Text></Text>
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
    commentWrapper: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: colors.teallight,
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