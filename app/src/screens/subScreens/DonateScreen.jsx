import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const DonateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.back}>
    <Ionicons name="arrow-back" size={24} color="black" />
    </View>
      <View style={styles.text}>
        <Text>- Donate Screen -</Text>
        <Text>I will design this page later</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    alignItems: 'left',
    marginTop: 35,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'flex-start'
  },
  text: {
    alignItems: "center",
    marginTop: 300,
  },
});

export default DonateScreen;
