import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from "../../context/ThemeContext.tsx";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors.tsx";
import PostService from '../../assets/data/services/PostService.js';
import { Searchbar } from 'react-native-paper';

const SearchScreen = () => {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDark } = useTheme();

  const themeStyles = isDark ? darkTheme : lightTheme;

  const handleSearch = async ({ query }) => {
    setSearchQuery(query);

    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const results = await PostService.searchPost('', true);
      console.log(results);
    }
    catch (error) {
      console.error('Error during search:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={{ padding: 16 }}>
            <Searchbar
                placeholder="Search posts"
                value={searchQuery}
                onChangeText={handleSearch}
                style={{ marginBottom: 16, width: '80%' }}
                autoFocus
            />

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ padding: 8, borderBottomWidth: 1 }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                            <Text>{item.content}</Text>
                        </View>
                    )}
                />
            )}
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  innerContainer: {
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  }
})


export default SearchScreen