import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import type { HomeScreenProps } from '../../interfaces/navigation';
import { getMovies } from '../../api';
import { IMovie } from '../../interfaces/common';
import MovieItem from '../../components/movie-item';
import Button from '../../components/ui/button';
import { COLORS } from '../../constants/styles';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [moviesList, setMoviesList] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: 'Movies List',
    });
  }, [navigation]);

  const getMoviesList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getMovies({
        collection: 'movies',
        database: 'sample_mflix',
        dataSource: 'ServerlessInstance0',
        limit: limit,
      });
      setMoviesList(response.data?.documents);
    } catch (error: any) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    getMoviesList();
  }, [limit]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Movies List (${moviesList.length})`,
    });
  }, [moviesList]);

  const loadMore = () => setLimit((l) => l + 5);

  return (
    <View style={styles.root}>
      <FlatList
        onRefresh={getMoviesList}
        refreshing={loading}
        style={{ flex: 1 }}
        data={moviesList}
        renderItem={({ item }) => <MovieItem movie={item} />}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              {loading ? 'Loading...' : 'No movies found'}
            </Text>
          </View>
        )}
      />
      <Button
        disabled={loading}
        onPress={loadMore}
        title={loading ? 'Loading...' : 'Load More'}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },
});
