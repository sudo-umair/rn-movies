import type { TextStyle, ViewStyle } from 'react-native';
import type { IMovie } from './common';

export interface MovieItemProps {
  movie: IMovie;
}

export interface ButtonProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  disabled?: boolean;
}

export interface PillProps {
  title: string;
  style?: TextStyle;
  onPress?: () => void;
}

export interface PillContainerProps {
  section: string;
  data: string[];
}
