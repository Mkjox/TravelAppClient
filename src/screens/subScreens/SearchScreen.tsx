import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, lightTheme } from "../../assets/colors/themeColors";
import PostService from '../../assets/data/services/PostService';
import { Searchbar } from 'react-native-paper';

interface Post {
  id: number;
  title: string;
  content: string;
}

const SearchScreen = () => {
  const navigation = useNavigation()
  // const [searchQuery, setSearchQuery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const { isDark } = useTheme();

  const themeStyles = isDark ? darkTheme : lightTheme;

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setResults([]); // Clear results if query is empty
      return;
    }

    try {
      const results: Post[] = await PostService.searchPost(query, true);
      console.log(results);
      setResults(results);
    } catch (error) {
      console.error('Error performing search:', error);
      setResults([]);
    }
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{ padding: 16 }}>
          <Searchbar
            placeholder="Search posts"
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
            onIconPress={() => handleSearch(searchQuery)}
            style={{ marginBottom: 16, width: '80%' }}
            autoFocus
          />

          <FlatList
            data={results} // Results from search
            keyExtractor={(item) => item.id.toString()} // Use the id field
            renderItem={renderPost} // Render each post
            ListEmptyComponent={() => (
              <Text style={styles.noResultsText}>
                No posts found. Try a different search.
              </Text>
            )}
          />

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
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
},
postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
},
postContent: {
    fontSize: 14,
    color: '#555',
},
noResultsText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    color: '#888',
},
})


export default SearchScreen