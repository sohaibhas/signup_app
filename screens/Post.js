import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Loader from "../components/Loader";

const Post = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);
      fetch(`https://dummyjson.com/posts?_page=${page + 1}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setProduct([...product, ...data.posts]);
          setPage(page + 1);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    loadMoreData(); // Load initial data
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item?.title}</Text>
      <Text style={styles.postBody}>{item?.body}</Text>
      <View style={styles.tagWrapper}>
        {item?.tags &&
          Array.isArray(item?.tags) &&
          item.tags.map((tag, tagIndex) => (
            <Text style={styles.tagItem} key={tagIndex}>
              {tag}
            </Text>
          ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post</Text>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <Loader /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    postContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 5,
    },
    postTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    postBody: {
      fontSize: 16,
      marginBottom: 10,
    },
    tagContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    tagWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      tagItem: {
        marginRight: 5,
        marginBottom: 5,
        backgroundColor: "#f0f0f0",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ccc",
      },
})

export default Post;
