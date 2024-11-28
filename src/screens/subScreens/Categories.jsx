import { View, Text, StyleSheet, ActivityIndicator, Dimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import { useEffect, useState } from "react";
import CategoryService from '../../assets/data/services/CategoryService';
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";

const { height, width } = Dimensions.get('window')

const Categories = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    useEffect(() => {
        getCategories();
    });

    async function getCategories() {
        var result = await CategoryService.getAllByNonDeletedAndActive();
        setData(result.data.categories);
        setLoading(false);
    };

    if (loading) {
        return <ActivityIndicator size="large" color={colors.orange} />;
    };

    return (
        <ScrollView style={[{ flex: 1 }, themeStyles.container]}>
            <View style={styles.container}>

                <View style={styles.titleWrapper}>
                    <Entypo
                        name='chevron-left'
                        size={30}
                        style={styles.backIcon}
                        onPress={() => navigation.goBack()}
                        color={themeStyles.icon.color}
                    />
                    <Text style={[styles.title, themeStyles.text]}>All Categories</Text>
                </View>

                <View style={themeStyles.hairLine} />


                <View style={styles.categoryContainer}>
                    <FlatList
                        alwaysBounceVertical
                        style={[styles.listWrapper]}
                        // pagingEnabled
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <View style={[styles.categoryWrapper, themeStyles.card]}>
                                    <Text style={[styles.categoryTitle, themeStyles.text]}>{item.name}</Text>
                                    <Text style={[styles.categoryDescription, themeStyles.text]}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    titleWrapper: {
        flexDirection: 'row',
        fontFamily: 'Poppins_400Regular',
    },
    title: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: height * 0.007
    },
    backIcon: {
        marginLeft: 10,
        marginTop: 5
    },
    categoryContainer: {
        marginTop: 15
    },
    categoryWrapper: {
        padding: 15,
        width: width * 0.9,
        alignSelf: 'center',
        marginTop: 10,
        minHeight: 170,
        maxHeight: 270,
        borderRadius: 5,
        // borderColor: colors.white,
        // borderWidth: 1,
        elevation: 5
    },
    categoryTitle: {
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 18,
        fontStyle: 'italic',
        justifyContent: 'center',
    },
    categoryDescription: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Poppins_300Light',
    },
});

export default Categories;