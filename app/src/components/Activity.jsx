// Entypo address
// FontAwesome map-signs / maybe motorcycle too
// FontAwesome5 bicycle or biking / car / hiking / running (?) / skiing / swimmer / campground
// Can add other sites' icons for adding contact by FontAwesome5Brands
// MaterialIcons kayaking
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


function Activity() {
    return (
        <View style={styles.activityWrapper}>
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={[styles.activityText, {color: colors.teallight}]}>Hiking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={styles.activityText}>Bicycle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={styles.activityText}>Drive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={styles.activityText}>Kayak</Text>
                </TouchableOpacity>
                {/*
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={styles.activityText}>Ski</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={styles.activityText}>Water ski</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <Text style={styles.activityText}>Swim</Text>
                </TouchableOpacity>
                */}
        </View>
    );
};

const styles = StyleSheet.create({
    activityWrapper: {
        flexDirection: 'row',
    },
    activityItem: {
        marginVertical: 10,
        marginHorizontal: 15,
        alignItems: 'center',
    },
    activityText: {
        color: colors.darkGray,
        fontFamily: 'Poppins_500Medium',
        fontSize: 16
    },
    iconColor: {
        color: colors.teallight
    }
});

export default Activity;