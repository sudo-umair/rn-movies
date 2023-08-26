import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { PillProps } from '../../interfaces/components';
import { COLORS } from '../../constants/styles';
import { isColorDark } from '../../helpers';

const Pill = ({ title, onPress, style }: PillProps) => {
  return (
    <Text
      onPress={onPress}
      style={[
        styles.pill,
        {
          ...style,
          backgroundColor: style?.backgroundColor ?? COLORS.PRIMARY,
          color: isColorDark(style?.backgroundColor ?? COLORS.PRIMARY)
            ? COLORS.WHITE
            : COLORS.BLACK,
        },
      ]}
    >
      {title ?? 'Pill'}
    </Text>
  );
};

export default Pill;

const styles = StyleSheet.create({
  pill: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    elevation: 5,
    minHeight: 10,
    minWidth: 30,
    margin: 5,
    textAlign: 'center',
    fontSize: 12,
  },
});
