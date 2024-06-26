import React, { useState, useEffect } from "react";
import { StyleSheet, Linking, Platform, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import LikedData from '../assets/data/likedData.json';
import colors from "../assets/colors/colors";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    try {
      setData(LikedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.profileTopWrapper}>
          <Avatar.Image size={70} style={styles.avatar} />
          <Text style={styles.headerText}>Welcome USER</Text>
          <Text style={[styles.headerText, { marginBottom: 5 }]}>@</Text>
          <Entypo name="location-pin" size={18} color={'#F5F5F5'} style={styles.profileDetails}>
            <Text style={styles.profileDetailsText}>Location</Text>
          </Entypo>
          <Entypo name="phone" size={18} color={'#F5F5F5'} style={styles.profileDetails}>
            <Text style={styles.profileDetailsText}>Phone Number</Text>
          </Entypo>
          <Entypo name="mail" size={18} color={'#F5F5F5'} style={styles.profileDetails}>
            <Text style={styles.profileDetailsText}>Email</Text>
          </Entypo>
          {/* FIX STYLING ON THIS AREA  ALSO ADD DB DATA */}
          <View style={styles.followContainer}>
            <View style={styles.followerDetails}>
              <Text style={styles.followerDetailsText}>0</Text>
              <Text style={styles.followerDetailsText}>Followers</Text>
            </View>
            <View style={styles.followingDetails}>
              <Text style={styles.followingDetailsText}>0</Text>
              <Text style={styles.followingDetailsText}>Following</Text>
            </View>
          </View>
        </View>
        {/* ENTER DB DATA HERE */}
        <View style={styles.countWrapper}>
          <View style={styles.countContainer}>
            <Text>4</Text>
            <Caption style={{ fontSize: 14 }}>Post Count</Caption>
          </View>
          <View style={styles.countContainer}>
            <Text>5</Text>
            <Caption>Comment Count</Caption>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate("SharedPosts")}>
            <FontAwesome name="heart" style={styles.optionItem} size={17}>
              <Text style={styles.optionItemText}> Shared Posts</Text>
            </FontAwesome>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <FontAwesome name="comment" style={styles.optionItem} size={17}>
              <Text style={styles.optionItemText}> Comments</Text>
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("CustomizeProfile")}>
          <FontAwesome name="pencil" style={styles.optionItem} size={17}>
            <Text style={styles.optionItemText}> Customize Profile</Text>
          </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity>
          <FontAwesome name="share" style={styles.optionItem} size={17}>
            <Text style={styles.optionItemText}> Recommend the app to your friend</Text>
          </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <FontAwesome name="gear" style={styles.optionItem} size={17}>
            <Text style={styles.optionItemText}> Settings</Text>
          </FontAwesome>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileTopWrapper: {
    backgroundColor: colors.teallight,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    height: 370,
    shadowOpacity: 30,
  },
  avatar: {
    marginTop: 25,
    marginBottom: 10,
    alignSelf: 'center'
  },
  information: {
  },
  headerText: {
    fontFamily: 'Poppins_500Medium',
    color: colors.white,
    fontSize: 18,
    alignSelf: 'center'
  },
  profileDetails: {
    marginVertical: 4,
    marginLeft: 120
  },
  profileDetailsText: {
    fontFamily: 'Poppins_300Light',
  },
  followContainer: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignContent: "space-between",
    alignSelf: 'center'
  },
  followerDetails: {
    marginRight: 50
  },
  followerDetailsText: {
    fontFamily: 'Poppins_300Light',
    fontSize: 14,
    color: colors.white,
    alignSelf: 'center'
  },
  followingDetails: {
    marginLeft: 50
  },
  followingDetailsText: {
    fontFamily: 'Poppins_300Light',
    fontSize: 14,
    color: colors.white,
    alignSelf: 'center'
  },
  countWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    height: 60,
    marginBottom: 15,
    flexDirection: 'row'
  },
  countContainer: {
    marginHorizontal: 50,
    alignItems: 'center'
  },
  options: {
    flexDirection: 'column',
    marginLeft: 40
  },
  optionItem: {
    marginVertical: 10,
    height: 20,
    color: colors.teallight,
  },
  optionItemText: {
    color: colors.black,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  }
});

export default ProfileScreen;
