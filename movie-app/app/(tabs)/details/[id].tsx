import { SafeAreaView, Image, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';

export default function MovieDetails() {
  const params = useLocalSearchParams();
  const { image, title, description, release_year, genre } = params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text>
        {release_year} {genre}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: 500,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  description: {
    marginTop: 10,
  },
});
