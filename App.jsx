import React from "react";
import { StyleSheet } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import LikedScreen from "./src/screens/LikedScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Appbar from "./src/components/Appbar";
import PostDetails from "./src/components/PostDetails";
import SettingsScreen from "./src/screens/SettingsScreen";
import DonateScreen from "./src/screens/DonateScreen";
import Post from "./src/components/Post";
import Explore from "./src/components/Explore";
import AddPostScreen from "./src/screens/AddPostScreen";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import SharedPostsScreen from "./src/screens/SharedPostsScreen";
import CommentsSreen from "./src/screens/CommentsScreen";
import CustomizeProfileScreen from "./src/screens/CustomizeProfileScreen";
import NotificationsScreen from "./src/screens/subScreens/NotificationsScreen";
import PrivacyScreen from "./src/screens/subScreens/PrivacyScreen";
import LanguageScreen from "./src/screens/subScreens/LanguageScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: { borderTopStartRadius: 15, borderTopEndRadius: 15 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// const Sidebar = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Appbar">
//       <Drawer.Screen name="Appbar" component={Appbar}/>
//       <Drawer.Screen name="Settings" component={SettingsScreen}/>
//     </Drawer.Navigator>
//   );
// }

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={styles.header}
        />

        {/* <Stack.Screen name="Sidebar" component={Sidebar} /> */}

        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={styles.header}
        />

        <Stack.Screen
          name="Appbar"
          component={Appbar}
          options={styles.header}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Donate"
          component={DonateScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Post"
          component={Post}
          options={styles.header} />

        <Stack.Screen
          name="Explore"
          component={Explore}
          options={styles.header}
        />

        <Stack.Screen
          name="AddPost"
          component={AddPostScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="SharedPosts"
          component={SharedPostsScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Comments"
          component={CommentsSreen}
          options={styles.header}
        />

        <Stack.Screen
          name="CustomizeProfile"
          component={CustomizeProfileScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={styles.header}
        />

        <Stack.Screen 
          name="Language"
          component={LanguageScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={styles.header}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    // flex: 1,
    // textAlign: 'center',
    // alignContent: 'center',
    // marginTop: 50,
    // margin: 50,
    // alignSelf: 'center',
    // display: 'flex'
  },
  header: {
    headerShown: false,
  },
});

export default App;
