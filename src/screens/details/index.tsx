import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MovieDetailsScreenProps } from '../../interfaces/navigation';
import { COLORS } from '../../constants/styles';
import { capitalize } from '../../helpers';
import PillContainer from '../../components/ui/pill-container';

const MovieDetailsScreen = ({ navigation, route }: MovieDetailsScreenProps) => {
  const movie = route.params.movie;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: movie.title,
    });
  }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.rootContent} style={styles.root}>
      <Image
        source={{ uri: movie.poster || 'https://placehold.co/600x400' }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.subtitle}>
        {capitalize(movie.type || 'NA')} | {movie.year}
      </Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{movie.plot || 'Plot N/A'}</Text>
        <PillContainer section='Genres' data={movie.genres} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>RunTime: {movie.runtime} min</Text>
        <Text style={styles.text}>Rated: {movie.rated || 'N/A'}</Text>
      </View>
      <PillContainer section='Cast' data={movie.cast} />
      <PillContainer section='Directors' data={movie.directors} />
      <PillContainer section='Language(s)' data={movie.languages} />
      <Text style={styles.subtitle}>Awards</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Wins: {movie.awards.wins}</Text>
        <Text style={styles.text}>
          Nominations: {movie.awards.nominations || 'N/A'}
        </Text>
      </View>
      <Text style={styles.subtitle}>Imdb</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Rating: {movie.imdb.rating}</Text>
        <Text style={styles.text}>Votes: {movie.imdb.votes || 'N/A'}</Text>
      </View>
      <Text style={styles.subtitle}>Rotten Tomatoes</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Rating: {movie.tomatoes.viewer.rating}</Text>
        <Text style={styles.text}>
          Reviews: {movie.tomatoes.viewer.numReviews || 'N/A'}
        </Text>
        <Text style={styles.text}>
          Meter: {movie.tomatoes.viewer.meter || 'N/A'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  rootContent: {
    padding: 10,
  },
  poster: {
    width: '40%',
    aspectRatio: 2 / 3,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 5,
  },
});
