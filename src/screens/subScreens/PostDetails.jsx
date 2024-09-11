import React, { useState, useEffect } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
import { ScrollView } from "react-native-gesture-handler";

const height = Dimensions.get("window").height;

const PostDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const [heart, setHeart] = useState("heart-outlined");
  const toggleHeart = () => {
    setHeart(heart === "heart-outlined" ? "heart" : "heart-outlined");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          // src={item.thumbnail}
          src={'https://picsum.photos/700'}
          style={styles.backgroundImage}
        >
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-left" size={32} color={colors.black} style={styles.backButton} />
          </TouchableOpacity>
        </ImageBackground>


        <View style={styles.informationWrapper}>
          <View style={styles.titlesWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.locationWrapper}>
              <MaterialIcons name="place" size={20} color="black" />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Suggested Budget</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.balance}</Text>
                <Text style={styles.infoSubText}>/per</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Rating</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.rating}</Text>
                <Text style={styles.infoSubText}>/5</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Duration</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.duration}</Text>
                <Text style={styles.infoSubText}>/ hour</Text>
              </View>
            </View>

            <View>
              <Text style={styles.categoryText}>Category</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={toggleHeart} style={styles.heart}>
            <Entypo name={heart} size={32} color={colors.orange} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsWrapper}>
          <View style={styles.detailsTextWrapper}>
            <Text style={styles.detailsTitle}>Details</Text>
            <Text style={styles.detailsText}>{item.content}</Text>
          </View>

          {/* ADD COMMENT */}


          <View style={styles.commentsWrapper}>
            <View style={styles.commentsInnerWrapper}>
              <Text style={styles.commentsTitle}>Comments</Text>
              <View style={styles.comments} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // justifyContent: 'center',
    // alignItems: 'center',

    // I know giving the height by hand is wrong but for now it kinda needs to stay like that
    height: 1300
  },
  backgroundImage: {
    height: height * 0.499,
    justifyContent: "space-between",
  },
  informationWrapper: {
    height: 300,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 0.4,
    top: -100,
    backgroundColor: colors.white,
    elevation: 5,
    marginBottom: 10
  },
  detailsWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -100,
    borderRadius: 25,
  },
  backIcon: {
    marginTop: 40,
    marginLeft: 20,
  },
  titlesWrapper: {
    marginHorizontal: 25,
    marginBottom: 10,
    marginTop: 20
  },
  itemTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 17,
    color: colors.black,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: colors.black,
  },
  heart: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderWidth: 0.2,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailsTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20
  },
  detailsTitle: {
    fontWeight: "700",
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Poppins_500Medium',
    fontStyle: 'italic',
  },
  detailsText: {
    marginTop: 20,
    color: colors.black,
    height: 'auto',
    marginBottom: 20,
    textAlign: 'justify',
    fontFamily: 'Poppins_400Regular',
  },
  infoWrapper: {
    flexDirection: "column",
    marginHorizontal: 25,
    justifyContent: "space-between",
    width: '80%',
  },
  infoTitle: {
    fontSize: 15,
    color: colors.black,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontWeight: '400',
    fontSize: 13,
    color: colors.black,
    fontFamily: 'Poppins_400Regular'
  },
  infoSubText: {
    fontWeight: "400",
    fontSize: 12,
    color: colors.darkGray,
    fontFamily: 'Poppins_400Regular'
  },
  categoryText: {
    marginVertical: 5,
    marginBottom: 8
  },
  category: {
    borderWidth: 1,
    minWidth: '20%',
    maxWidth: '30%',
    borderRadius: 10,
    alignItems: 'center',
    color: colors.blue,
    textAlign: 'center',
    borderColor: colors.blue,
  },
  commentsWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: 'Poppins_400Regular'
  },
  commentsInnerWrapper: {

  },
  commentsTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_300Light_Italic'
  },
  comments: {
    borderRadius: 25,
    backgroundColor: colors.white,
    borderWidth: 1,
    height: 300,
  }
});

export default PostDetails;
