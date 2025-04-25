import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';

type Comment = { id: string; author: string; text: string };
interface PostItem {
  id: string;
  title: string;
  content: string;
  photos?: string[];      // array of image URLs
  comments: Comment[];
}

interface Props {
  route: { params: { item: PostItem } };
  navigation: { goBack: () => void };
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function PostDetails({ route, navigation }: Props) {
  const { item } = route.params;
  const photos = item.photos?.slice(0, 10) ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [comments, setComments] = useState<Comment[]>(item.comments);
  const [newComment, setNewComment] = useState('');
  const flatListRef = useRef<FlatList<string>>(null);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems[0]) setActiveIndex(viewableItems[0].index);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const addComment = () => {
    const t = newComment.trim();
    if (!t) return;
    setComments([{ id: Date.now().toString(), author: 'You', text: t }, ...comments]);
    setNewComment('');
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER: back button + carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={photos}
          keyExtractor={(uri, i) => uri + i}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item: uri }) => (
            <Image source={{ uri }} style={styles.photo} />
          )}
        />
        <TouchableOpacity style={styles.backBtn} onPress={navigation.goBack}>
          <Entypo name="chevron-left" size={28} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.pagination}>
          {photos.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === activeIndex ? styles.dotActive : undefined,
              ]}
            />
          ))}
        </View>
      </View>

      {/* BODY: title + description */}
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.content}</Text>
            </View>
            <Text style={styles.commentsHeader}>Comments</Text>
          </>
        }
        data={comments}
        keyExtractor={(c) => c.id}
        renderItem={({ item: c }) => (
          <View style={styles.commentCard}>
            <Text style={styles.commentAuthor}>{c.author}</Text>
            <Text style={styles.commentText}>{c.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* COMMENT INPUT */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inputBar}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          placeholderTextColor={colors.darkGray}
          value={newComment}
          onChangeText={setNewComment}
          multiline
        />
        <TouchableOpacity style={styles.sendBtn} onPress={addComment}>
          <Text style={styles.sendText}>Post</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
  carouselContainer: {
    height: SCREEN_WIDTH * 0.6,
    position: 'relative',
  },
  photo: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.6,
    resizeMode: 'cover',
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 4,
  },
  pagination: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 4,
  },
  dotActive: {
    backgroundColor: colors.white,
  },

  contentContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 8,
    color: colors.black,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: colors.gray,
    lineHeight: 20,
  },

  commentsHeader: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: colors.black,
  },
  listContent: {
    paddingBottom: 100, // leave space for input bar
  },

  commentCard: {
    backgroundColor: colors.white,
    marginVertical: 4,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
  },
  commentAuthor: {
    fontFamily: 'Poppins_500Medium',
    marginBottom: 4,
    color: colors.black,
  },
  commentText: {
    fontFamily: 'Poppins_400Regular',
    color: colors.darkGray,
  },

  inputBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.lightGray,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: 'Poppins_400Regular',
    maxHeight: 80,
  },
  sendBtn: {
    marginLeft: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: colors.orange,
    borderRadius: 20,
  },
  sendText: {
    fontFamily: 'Poppins_500Medium',
    color: colors.white,
  },
});