import { Image, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';
import useMoviesData from '@/hooks/useMovieData';
import React from 'react';

export default function MoviesList() {
  const data = useMoviesData();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movie list</Text>
      <FlatList
        data={data}
        keyExtractor={(movie) => movie?.id?.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        }
        ListEmptyComponent={<Text>No items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Link
              style={{ display: 'flex' }}
              href={{
                pathname: '/details/[id]',
                params: { ...item },
              }}
            >
              <Image
                style={styles.movieDetailsImage}
                source={{ uri: item.image }}
              />
              <View style={styles.movieDetailsRow}>
                <Text style={styles.movieDetailsTitle}>{item.title}</Text>
                <Text style={{ width: '80%' }}>{item.description}</Text>
              </View>
            </Link>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginBottom: 10,
  },
  movieDetailsImage: {
    width: 100,
    height: 150,
    marginLeft: 5,
    borderRadius: 5,
  },
  movieDetailsRow: {
    flexGrow: 1,
    paddingLeft: 5,
  },
  movieDetailsTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
});
