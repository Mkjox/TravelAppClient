import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  // ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Activity from "../components/Activity";
import LikedData from "../assets/data/likedData.json";
import { DrawerActions } from '@react-navigation/drawer';
// import { Appbar } from '../components/Appbar';
import Explore from '../components/Explore';
import Post from '../components/Post';
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import colors from "../assets/colors/colors";
import PostService from "../assets/data/services/PostService";

{/* DO NOT FORGET TO ADD SCROLLVIEW OR FIX THE ERROR ABOUT VIRTUALIZED LISTS */ }


const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getPosts();
  // }, []);

  // async function getPosts() {
  //   var result = PostService.getAllPostsByNonDeletedAndActive();
  //   console.log(result.data);
  //   setData(result.data.posts);
  //   setLoading(false);
  // }

  // if (loading) {
  //   return <ActivityIndicator size="large" color={colors.orange} />;
  // };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.container}>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              style={styles.menuButton}
              onPress={() => navigation.openDrawer()}
            />
            {/* Don't forget to add post parameters for this */}
            <Searchbar style={styles.searchBar}
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              mode="bar"
            />
          </View>
          <View style={styles.activityWrapper}>
            <View style={styles.activities}>
              <View style={styles.activityInnerWrapper}>
                <Text style={styles.activityTitle}>Categories</Text>
              </View>
              <TouchableOpacity style={styles.activityInnerWrapper} onPress={() => navigation.navigate("Categories")}>
                <Text style={styles.activityAll}>See Details &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postWrapper}>
            {/* Post component called here */}
            <Post />
          </View>

        </View>
      </ScrollView>
      <TouchableOpacity style={styles.plusIcon} onPress={() => navigation.navigate("AddPost")}>
        <Feather name="plus" size={36} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
    backgroundColor: '#EEEEEE'
  },
  menuButton: {
    elevation: 5,
    shadowRadius: 5,
    marginLeft: 5,
    marginTop: 10
  },
  searchBar: {
    width: 350,
    marginHorizontal: 5,
    backgroundColor: '#f1f1f1',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -2
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  menuWrapper: {
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
  },
  activityWrapper: {
  },
  activities: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  activityInnerWrapper: {
    marginHorizontal: 80
  },
  activityTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: -15
  },
  activityAll: {
    color: colors.teallight,
    fontFamily: 'Poppins_500Medium',
    marginLeft: 10
  },
  activityCategories: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  plusIcon: {
    position: 'absolute',
    borderRadius: 60,
    borderColor: colors.white,
    borderStyle: "solid",
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    width: 46,
    height: 46,
    backgroundColor: colors.teallight,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default HomeScreen;
