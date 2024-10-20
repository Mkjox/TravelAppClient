import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
  ActivityIndicator
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/core";
import { Card, Searchbar } from "react-native-paper";
import PostService from "../assets/data/services/PostService";

const LikedScreen = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [heart, setHeart] = useState("heart-outlined");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const toggleHeart = () => {
    setHeart(heart === "heart-outlined" ? "heart" : "heart-outlined");
  };

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    var result = await PostService.getAllPosts();
    setData(result.data.posts);
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" color={colors.orange} />;
  };

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.menuWrapper}>
          <Feather name="menu" size={32} style={styles.menuButton} onPress={() => navigation.openDrawer()} />
          <Searchbar style={styles.searchBar}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="bar"
          />
        </View>
        <View>
          <Text style={styles.title}>
            Liked Posts
          </Text>
        </View>
        <View style={styles.likedWrapper}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>
                <Card style={styles.likedItemWrapper}>
                  <ImageBackground src={'https://picsum.photos/700'} style={styles.likedItemImage}>
                    <TouchableOpacity style={styles.moreButton}>
                      <Entypo name='dots-three-vertical' size={18} colors={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleHeart} style={styles.heart}>
                      <Entypo name={heart} size={28} color={colors.orange} />
                    </TouchableOpacity>
                  </ImageBackground>
                  <Card.Content>
                    <Text style={styles.likedItemTitle}>{item.title}</Text>
                    <Text style={styles.likedItemLocation}>
                      <MaterialIcons name='place' size={15} color={colors.black} />
                      {item.location}
                    </Text>
                    <Text>{item.content}</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            )}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.arrowUp}>
        <MaterialIcons name='keyboard-arrow-up' size={36} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  menuWrapper: {
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
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
    backgroundColor: '#EEEEEE'
  },
  title: {
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
  },
  likedWrapper: {
    marginHorizontal: 5,
    marginBottom: 100,
    borderRadius: 20,
    paddingTop: 7,
  },
  likedItemWrapper: {
    marginHorizontal: 5,
    marginVertical: 5,
    width: "auto",
  },
  likedItemImage: {
    height: 200,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  moreButton: {
    position: 'absolute',
    right: 6,
    top: 10,
    width: 15,
    height: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5
  },
  heart: {
    position: "absolute",
    right: 11,
    bottom: 15,
    width: 44,
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  likedItemTitle: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '500'
  },
  likedItemLocation: {
    marginVertical: 5,
  },
  arrowUp: {
    position: 'absolute',
    borderRadius: 60,
    borderColor: colors.white,
    borderStyle: 'solid',
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
    elevation: 5
  }
});

export default LikedScreen;
