import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../assets/colors/colors";

const CommentsSreen = () => {
    return (
        <View style={styles.container}>
            <Text>Comments Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

export default CommentsSreen;