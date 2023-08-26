import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MovieItemProps } from '../interfaces/components';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '../interfaces/navigation';
import { Screens } from '../common/screens';
import { COLORS } from '../constants/styles';

type NavigationProp = HomeScreenProps['navigation'];

const MovieItem = ({ movie }: MovieItemProps) => {
  const navigation = useNavigation<NavigationProp>();

  const onPress = () => {
    navigation.navigate(Screens.MovieDetails, { movie });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          style={styles.poster}
          resizeMode='cover'
          source={{
            uri: movie.poster || 'https://placehold.co/600x400',
          }}
          alt='Poster'
          blurRadius={1}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.plot}>{movie.plot || 'No Plot Available'}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    elevation: 5,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  poster: {
    height: 100,
    aspectRatio: 0.7,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  plot: {
    fontSize: 14,
    color: '#666',
  },
});
