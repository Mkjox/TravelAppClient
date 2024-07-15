import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Platform, View, StyleSheet, TextComponent, ScrollView } from "react-native";
import { Appbar, List, RadioButton, useTheme } from "react-native-paper";
import { Switch } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
// import ScreenWrapper from "./ScreenWrapper";

type AppbarModes = "small" | "medium" | "large" | "center-aligned";
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots.vertical";

const AppSettings = () => {
  const [showLeftIcon, setShowLeftIcon] = React.useState(true);
  const [showExactTheme, setShowExactTheme] = React.useState(false);
  const [showSearchIcon, setShowSearchIcon] = React.useState(true);
  const [showMoreIcon, setShowMoreIcon] = React.useState(true);
  const [appbarMode, setAppbarMode] =
    React.useState<AppbarModes>("center-aligned");
  const navigation = useNavigation();

  const { isV3 } = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Appbar.Header
          theme={{ mode: showExactTheme ? "exact" : "adaptive" }}
          mode={appbarMode}
        >
          {showLeftIcon && (
            <Appbar.BackAction onPress={() => navigation.goBack()} />
          )}
          <Appbar.Content title="Title" />
          {showSearchIcon && (
            <Appbar.Action icon="magnify" onPress={() => { }} />
          )}
          {showMoreIcon && (
            <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
          )}
        </Appbar.Header>
      ),
    });
  }, [
    navigation,
    showLeftIcon,
    showSearchIcon,
    showMoreIcon,
    showExactTheme,
    appbarMode,
    //isCenterAlignedMode
  ]);


  const renderDefaultOptions = () => (
    <>
      <View style={styles.row}>
        <TextComponent>Left icon</TextComponent>
        <Switch value={showLeftIcon} onValueChange={setShowLeftIcon}></Switch>
      </View>
      <View style={styles.row}>
        <TextComponent>Search Icon</TextComponent>
        <Switch value={showSearchIcon} onValueChange={setShowSearchIcon} />
      </View>
      <View style={styles.row}>
        <TextComponent>More Icon</TextComponent>
        <Switch value={showMoreIcon} onValueChange={setShowMoreIcon} />
      </View>
      <View style={styles.row}>
        <TextComponent>Exact Dark Theme</TextComponent>
        <Switch value={showExactTheme} onValueChange={setShowExactTheme} />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {isV3 ? (
        <List.Section title="Default options">
          {renderDefaultOptions()}
        </List.Section>
      ) : (
        renderDefaultOptions()
      )}
      {isV3 && (
        <List.Section title="Appbar Modes">
          <RadioButton.Group
            value={appbarMode}
            onValueChange={(value: string) =>
              setAppbarMode(value as AppbarModes)
            }
          >
            <View style={styles.row}>
              <TextComponent>Small (default)</TextComponent>
              <RadioButton value="small" />
            </View>
            <View style={styles.row}>
              <TextComponent>Medium</TextComponent>
              <RadioButton value="medium" />
            </View>
            <View style={styles.row}>
              <TextComponent>Large</TextComponent>
              <RadioButton value="large" />
            </View>
            <View style={styles.row}>
              <TextComponent>Center-aligned</TextComponent>
              <RadioButton value="center-aligned" />
            </View>
          </RadioButton.Group>
        </List.Section>
      )}
      <Appbar style={styles.bottom} theme={{ mode: showExactTheme ? 'exact' : 'adaptive' }} children={undefined}>
      </Appbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1
  },
  contentContainer: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default AppSettings;