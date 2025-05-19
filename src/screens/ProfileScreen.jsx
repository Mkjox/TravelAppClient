import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../assets/colors/themeColors";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;

  // Placeholder
  const user = {
    fullName: "Jane Doe",
    userName: "janedoe",
    avatarUrl: "https://via.placeholder.com/300",
    location: "New York, NY",
    phone: "+1 212-555-1234",
    email: "jane.doe@example.com",
    followers: 240,
    following: 180,
  };

  return (
    <SafeAreaView style={[styles.container, theme.container]}>
      {/* Cover Banner */}
      <ImageBackground
        src={"https://picsum.photos/700"}
        style={styles.banner}
      >
        <View style={styles.bannerOverlay} />
      </ImageBackground>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={100}
          source={{ uri: user.avatarUrl }}
          style={styles.avatar}
        />
      </View>

      {/* Name & Username */}
      <View style={styles.nameSection}>
        <Text style={[styles.fullName, theme.text]}>{user.fullName}</Text>
        <Text style={[styles.userName, theme.text]}>@{user.userName}</Text>
      </View>

      {/* Contact Row */}
      <View style={[styles.contactRow, theme.primaryBackground]}>
        <TouchableOpacity style={styles.contactItem}>
          <Entypo name="location-pin" size={20} color="#fff" />
          <Text style={[styles.contactText, theme.text]}>{user.location}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}>
          <Entypo name="phone" size={20} color="#fff" />
          <Text style={[styles.contactText, theme.text]}>{user.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}>
          <Entypo name="mail" size={20} color="#fff" />
          <Text style={[styles.contactText, theme.text]}>{user.email}</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, theme.cardBackground]}>
          <Text style={[styles.statCount, theme.text]}>{user.followers}</Text>
          <Text style={[styles.statLabel, theme.text]}>Followers</Text>
        </View>
        <View style={[styles.statCard, theme.cardBackground]}>
          <Text style={[styles.statCount, theme.text]}>{user.following}</Text>
          <Text style={[styles.statLabel, theme.text]}>Following</Text>
        </View>
      </View>

      {/* Options List */}
      <View style={styles.options}>
        {[
          { icon: "heart", label: "Shared Posts", onPress: () => navigation.navigate("SharedPosts") },
          { icon: "comment", label: "Comments", onPress: () => navigation.navigate("Comments") },
          { icon: "share", label: "Recommend App", onPress: () => {/* share logic */ } },
          { icon: "gear", label: "Settings", onPress: () => navigation.navigate("Settings") },
        ].map(({ icon, label, onPress }) => (
          <TouchableOpacity
            key={label}
            style={[styles.optionRow, theme.cardBackground]}
            onPress={onPress}
          >
            <FontAwesome name={icon} size={20} style={theme.text} />
            <Text style={[styles.optionLabel, theme.text]}>{label}</Text>
            <Entypo name="chevron-right" size={20} style={theme.text} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  banner: {
    width,
    height: width * 0.5,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  avatarContainer: {
    position: "absolute",
    top: width * 0.5 - 30,
    left: width / 2 - 50,
  },
  avatar: {
    borderWidth: 3,
    borderColor: "#fff",
  },
  nameSection: {
    marginTop: width * 0.13,
    alignItems: "center",
  },
  fullName: {
    fontSize: 22,
    fontWeight: "600"
  },
  userName: {
    fontSize: 16,
    color: "#888"
  },
  contactRow: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "space-around",
    marginTop: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  contactText: {
    marginLeft: 6,
    fontSize: 14
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  statCard: {
    width: width * 0.4,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  statCount: {
    fontSize: 20,
    fontWeight: "600"
  },
  statLabel: {
    fontSize: 14,
    color: "#666"
  },
  options: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 8,
  },
  optionLabel: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
});

export default ProfileScreen;