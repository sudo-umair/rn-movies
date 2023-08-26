import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ButtonProps } from '../../interfaces/components';
import { COLORS } from '../../constants/styles';

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        style,
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{title ?? 'Button'}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    minHeight: 40,
    minWidth: 100,
  },
  pressed: {
    backgroundColor: COLORS.PRIMARY_DARK,
  },
  disabled: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
});
