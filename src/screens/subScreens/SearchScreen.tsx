import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react'
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
  // const [searchQuery, setSearchQuery] = useState('');
  // const [results, setResults] = useState<Post[]>([]);
  const [keyword, setKeyword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isDark } = useTheme();

  const themeStyles = isDark ? darkTheme : lightTheme;



  const handleSearch = async () => {
    try {
      const result = await PostService.searchPost(keyword);
      setPosts(result.data.posts);
      console.log(result);
      console.log(result.data);
      console.log(result.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  // const renderPost = ({ item }: { item: Post }) => (
  //   <View style={styles.postContainer}>
  //     <Text style={styles.postTitle}>{item.title}</Text>
  //     <Text style={styles.postContent}>{item.content}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{ padding: 16 }}>
          <Searchbar
            placeholder="Search posts"
            value={keyword}
            onChangeText={setKeyword}
            // onIconPress={() => handleSearch(searchQuery)}
            style={{ marginBottom: 16, width: '80%' }}
            autoFocus
            onSubmitEditing={handleSearch}
          />
          {/* {loading && <ActivityIndicator size="large" />} */}
          {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
          <FlatList
            data={posts} // Results from search
            keyExtractor={(item) => item.id.toString()} // Use the id field
            renderItem={({ item }) => (
              <View style={styles.postContainer}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postContent}>{item.content}</Text>
              </View>
            )} // Render each post
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default SearchScreen;