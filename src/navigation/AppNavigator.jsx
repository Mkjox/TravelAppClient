import * as React from 'react';
import { StyleSheet } from 'react-native';
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import LikedScreen from "../screens/LikedScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppSettings from "../components/AppSettings";
import PostDetails from "../screens/subScreens/PostDetails";
import SettingsScreen from "../screens/SettingsScreen";
import DonateScreen from "../screens/subScreens/DonateScreen";
import Post from "../components/Post";
import Explore from "../components/Explore";
import AddPostScreen from "../screens/subScreens/AddPostScreen";
import SharedPostsScreen from "../screens/subScreens/SharedPostsScreen";
import CommentsSreen from "../screens/subScreens/CommentsScreen";
import CustomizeProfileScreen from "../screens/subScreens/CustomizeProfileScreen";
import NotificationsScreen from "../screens/subScreens/NotificationsScreen";
import PrivacyScreen from "../screens/subScreens/PrivacyScreen";
import LanguageScreen from "../screens/subScreens/LanguageScreen";
import StartPage from "../screens/subScreens/StartPage";
import RegisterScreen from "../screens/subScreens/RegisterScreen";
import LoginScreen from "../screens/subScreens/LoginScreen";
import colors from "../assets/colors/colors";
import CustomTabBar from "../components/CustomTabBar";
import UserProfileScreen from '../screens/subScreens/UserProfileScreen';
import ResetPasswordScreen from '../screens/subScreens/ResetPasswordScreen';
import FollowScreen from '../screens/subScreens/FollowScreen';
import Categories from '../screens/subScreens/Categories';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }} />

            <Tab.Screen
                name="Liked"
                component={LikedScreen}
                options={{
                    headerShown: false,
                }} />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }} />
        </Tab.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
            }}>
            <Drawer.Screen
                name="Home"
                component={StackNavigator} options={{
                    drawerIcon: ({ }) => (
                        <FontAwesome name='home' size={22} color={colors.blue} />
                    )
                }} />

            <Drawer.Screen
                name="StartPage"
                component={StartPage}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name='sign-in' size={22} color={colors.blue} />
                    )
                }} />

            <Drawer.Screen
                name='Settings'
                component={SettingsScreen} options={{
                    drawerIcon: () => (
                        <FontAwesome name='gear' size={22} color={colors.blue} />
                    )
                }} />
        </Drawer.Navigator>
    );
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PostDetails"
                component={PostDetails}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AppSettings"
                component={AppSettings}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Donate"
                component={DonateScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Post"
                component={Post}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Explore"
                component={Explore}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AddPost"
                component={AddPostScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SharedPosts"
                component={SharedPostsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Comments"
                component={CommentsSreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="CustomizeProfile"
                component={CustomizeProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Language"
                component={LanguageScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Privacy"
                component={PrivacyScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Start"
                component={StartPage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='ResetPassword'
                component={ResetPasswordScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Follow'
                component={FollowScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Categories'
                component={Categories}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}