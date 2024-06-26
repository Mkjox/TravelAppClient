import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import colors from "../assets/colors/colors";
import LikedData from '../assets/data/likedData.json';
import { List } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    try {
      setData(LikedData);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={styles.headerText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsWrapper}>
          <View style={styles.listWrapper}>
            <List.Accordion
              title="Dark Mode"
              left={props => <List.Icon {...props} icon={() => <Icon name="dark-mode" size={24} />} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
            >
              <List.Item title="Enabled"  style={styles.switch}
                right={props => <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />}
              />
            </List.Accordion>

            <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
              <List.Item
                title="Notifications"
                left={props => <List.Icon {...props} icon={() => <Icon name="notifications" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <List.Item
                title="Language"
                left={props => <List.Icon {...props} icon={() => <Icon name="language" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
              <List.Item
                title="Privacy"
                left={props => <List.Icon {...props} icon={() => <Icon name="privacy-tip" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 80
  },
  listWrapper: {
    marginTop: 50,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 25,
    elevation: 2
  },
  switch: {
    marginLeft: 15
  }
});
export default SettingsScreen;
