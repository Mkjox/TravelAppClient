import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../assets/colors/colors";

const SharedPostsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Shared Posts Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});

export default SharedPostsScreen;