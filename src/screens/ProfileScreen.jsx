import React, { useState, useEffect } from "react";
import { StyleSheet, Linking, Platform, View, Text, ImageBackground, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import LikedData from '../assets/data/likedData.json';
import colors from "../assets/colors/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../assets/colors/themeColors";

const { height, width } = Dimensions.get('window');

const ProfileScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const { isDark } = useTheme();

  const themeStyles = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    try {
      setData(LikedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <View style={[styles.container, themeStyles.container]}>
      <ScrollView style={styles.topSection}>
        <View style={styles.profileTopWrapper}>

          <View style={styles.information}>
            <Avatar.Image size={70} style={styles.avatar} />
            <View style={styles.informationInnerWrapper}>
              <Text style={[styles.headerText, themeStyles.text]}>Welcome USER</Text>
              <Text style={[styles.headerText, themeStyles.text, { marginBottom: 5 }]}>@</Text>
            </View>
          </View>

          <Entypo name="location-pin" size={18} color='#FFFFFF' style={styles.profileDetails}>
            <Text style={[styles.profileDetailsText, themeStyles.text]}> Location</Text>
          </Entypo>

          <Entypo name="phone" size={18} color='#FFFFFF' style={styles.profileDetails}>
            <Text style={[styles.profileDetailsText, themeStyles.text]}> Phone Number</Text>
          </Entypo>

          <Entypo name="mail" size={18} color='#FFFFFF' style={styles.profileDetails}>
            <Text style={[styles.profileDetailsText, themeStyles.text]}> Email</Text>
          </Entypo>

          {/* FIX STYLING ON THIS AREA  ALSO ADD DB DATA */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailsWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
                <Text style={[styles.detailsText, themeStyles.text]}>0</Text>
                <Caption style={[styles.detailsText, themeStyles.text]}>Followers</Caption>
              </TouchableOpacity>
            </View>
            <View style={styles.followingDetails}>
              <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
                <Text style={[styles.detailsText, themeStyles.text]}>0</Text>
                <Caption style={[styles.detailsText, themeStyles.text]}>Following</Caption>
              </TouchableOpacity>
            </View>
          </View>

          <View style={themeStyles.hairLine} />

          {/* <View style={styles.detailsContainer}>
            <View style={styles.countContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('SharedPosts')}>
                <Text style={styles.detailsText}>4</Text>
                <Caption style={styles.detailsText}>Post Count</Caption>
              </TouchableOpacity>
            </View>
            <View style={styles.countContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                <Text style={styles.detailsText}>5</Text>
                <Caption style={styles.detailsText}>Comment Count</Caption>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={[styles.temporaryUserProfile]}>
            <Text style={themeStyles.text}>Go to User Profile Screen</Text>
          </TouchableOpacity> */}
          <View style={styles.line} />
        </View>

        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate("SharedPosts")}>
            <FontAwesome name="heart" style={[styles.optionItem, themeStyles.primary]} size={17}>
              <Text style={[styles.optionItemText, themeStyles.text]}> Shared Posts</Text>
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <FontAwesome name="comment" style={[styles.optionItem, themeStyles.primary]} size={17}>
              <Text style={[styles.optionItemText, themeStyles.text]}> Comments</Text>
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("CustomizeProfile")}>
            <FontAwesome name="pencil" style={[styles.optionItem, themeStyles.primary]} size={17}>
              <Text style={[styles.optionItemText, themeStyles.text]}> Customize Profile</Text>
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="share" style={[styles.optionItem, themeStyles.primary]} size={17}>
              <Text style={[styles.optionItemText, themeStyles.text]}> Recommend the app to your friend</Text>
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <FontAwesome name="gear" style={[styles.optionItem, themeStyles.primary]} size={17}>
              <Text style={[styles.optionItemText, themeStyles.text]}> Settings</Text>
            </FontAwesome>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topSection: {
  },
  profileTopWrapper: {
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    height: height * 0.45,

  },
  avatar: {
    marginBottom: 10,
    alignSelf: 'left',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: height * 0.01
  },
  information: {
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight + height * 0.01
  },
  informationInnerWrapper: {
    marginVertical: height * 0.01
  },
  headerText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    alignSelf: 'center'
  },
  profileDetails: {
    marginVertical: 4,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  profileDetailsText: {
    fontFamily: 'Poppins_300Light',
    textAlign: 'left'
  },
  detailsContainer: {
    marginVertical: height * 0.01,
    flexDirection: 'row',
  },
  detailsWrapper: {
    marginHorizontal: width * 0.23,
  },
  detailsText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: colors.white,
    alignSelf: 'center'
  },
  followingDetails: {
  },
  // countContainer: {
  //   marginHorizontal: 40,
  //   alignItems: 'center',
  //   marginRight: 25
  // },
  // temporaryUserProfile: {
  //   alignSelf: 'center',
  //   marginVertical: 15,
  //   borderRadius: 10,
  //   borderWidth: 0.5,
  //   height: 30,
  //   alignItems: 'center'
  // },
  line: {
    borderBottomWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10
  },
  options: {
    flexDirection: 'column',
    marginLeft: 40,
    marginTop: height * 0.03,
  },
  optionItem: {
    marginVertical: 10,
    height: 20,
  },
  optionItemText: {
    color: colors.black,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  }
});

export default ProfileScreen;
