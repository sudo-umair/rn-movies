import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screens } from '../common/screens';
import { IMovie } from './common';

export type RootStackParamList = {
  [Screens.Home]: undefined;
  [Screens.MovieDetails]: { movie: IMovie };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.Home
>;

export type MovieDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.MovieDetails
>;
