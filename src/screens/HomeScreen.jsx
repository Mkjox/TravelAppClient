import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  // ActivityIndicator
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Activity from "../components/Activity";
// import { DrawerActions } from '@react-navigation/drawer';
// import { Appbar } from '../components/Appbar';
import Explore from '../components/Explore';
import Post from '../components/Post';
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import colors from "../assets/colors/colors";
import PostService from "../assets/data/services/PostService";
import { useTheme } from '../context/ThemeContext';
import { darkTheme, lightTheme } from '../assets/colors/themeColors';

{/* DO NOT FORGET TO ADD SCROLLVIEW OR FIX THE ERROR ABOUT VIRTUALIZED LISTS */ }

const { height, width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { isDark } = useTheme();

  const themeStyles = isDark ? darkTheme : lightTheme;

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
    <View style={[styles.container, themeStyles.container]} >
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        <View style={styles.topMargin}>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              style={styles.menuButton}
              onPress={() => navigation.openDrawer()}
              color={themeStyles.icon.color}
            />
            {/* Don't forget to add post parameters for this */}
            <Searchbar style={styles.searchBar}
              placeholder="Search"
              // onChangeText={setSearchQuery}
              // value={searchQuery}
              mode="bar"
              onFocus={() => navigation.navigate("Search")}
            />
          </View>

          <View style={styles.activityWrapper}>
            <View style={styles.activities}>
              <View style={styles.activityInnerWrapper}>
                <Text style={[styles.activityTitle, themeStyles.text]}>Categories</Text>
              </View>
              <TouchableOpacity style={styles.activityInnerWrapper} onPress={() => navigation.navigate("Categories")}>
                <Text style={[themeStyles.primary, styles.activityAll]}>See Details &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.postWrapper}>
            {/* Post component called here */}
            <Post />
          </View>

        </View>
      </ScrollView>
      <TouchableOpacity style={[themeStyles.button, styles.plusIcon]} onPress={() => navigation.navigate("AddPost")}>
        <Feather name="plus" size={36} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topMargin: {
    marginTop: StatusBar.currentHeight + height * 0.01
  },
  menuButton: {
    elevation: 5,
    shadowRadius: 5,
    marginLeft: 5,
    marginTop: 10
  },
  searchBar: {
    width: width * 0.8,
    height: height * 0.06,
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#ccc',
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
    marginLeft: -15,
    marginTop: 10
  },
  activityAll: {
    fontFamily: 'Poppins_500Medium',
    marginLeft: 10,
    marginTop: 10
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
