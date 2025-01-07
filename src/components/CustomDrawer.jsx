import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useTheme } from '../context/ThemeContext';
import { darkTheme, lightTheme } from '../assets/colors/themeColors';

const CustomDrawer = props => {
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: themeStyles.primary }} >
                    <View>
                        <DrawerItemList {...props} />
                    </View>
                </DrawerContentScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CustomDrawer;