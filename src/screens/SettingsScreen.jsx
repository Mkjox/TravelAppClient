import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Switch, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import colors from "../assets/colors/colors";
import LikedData from '../assets/data/likedData.json';
import { List } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darkTheme, lightTheme } from "../assets/colors/themeColors";
import { useTheme } from "../context/ThemeContext";

const SettingsScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const themeStyles = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    try {
      setData(LikedData);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, []);

  return (
    <View style={[{ flex: 1 }, themeStyles.container]}>
      <View style={styles.container}>

        <View style={styles.back}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.headerText, themeStyles.text]}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={themeStyles.hairLine} />

        <View style={styles.settingsWrapper}>
          <View style={[styles.listWrapper, themeStyles.card]}>
            <List.Accordion
              title="Dark Mode"
              titleStyle={themeStyles.text}
              left={props => <List.Icon {...props} icon={() => <Icon name="dark-mode" size={24} color={themeStyles.icon.color} />} />}
              right={props => <List.Icon {...props} icon="chevron-right" color={themeStyles.icon.color} />}
              style={themeStyles.card}
            >
              <List.Item title="Enabled" style={styles.switch} titleStyle={themeStyles.text}
                right={props => <Switch
                  value={isDark}
                  onValueChange={toggleTheme}
                />}
              />
            </List.Accordion>

            <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
              <List.Item
                title="Notifications"
                titleStyle={themeStyles.text}
                left={props => <List.Icon {...props} icon={() => <Icon name="notifications" size={24} color={themeStyles.icon.color} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" color={themeStyles.icon.color} />}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <List.Item
                title="Language"
                titleStyle={themeStyles.text}
                left={props => <List.Icon {...props} icon={() => <Icon name="language" size={24} color={themeStyles.icon.color} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" color={themeStyles.icon.color} />}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
              <List.Item
                title="Privacy"
                titleStyle={themeStyles.text}
                left={props => <List.Icon {...props} icon={() => <Icon name="privacy-tip" size={24} color={themeStyles.icon.color} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" color={themeStyles.icon.color} />}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight - 30
  },
  back: {
    alignItems: "left",
    marginTop: 25,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginLeft: 10
  },
  settingsWrapper: {
    alignItems: "center",
    padding: 20,
    marginTop: 80,
  },
  listWrapper: {
    marginTop: 50,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 25,
    elevation: 2,
    borderColor: '#FFFFFF',
    borderWidth: 0.5
  },
  switch: {
    marginLeft: 15
  }
});
export default SettingsScreen;
