import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../index';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';

const CustomButton = ({
  style,
  onPress,
  buttonText,
  textStyle,
  isDisabled,
  color,
  size,
  weight,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isDisabled
            ? COLORS.background_grey_color
            : COLORS.white,
        },
        style,
      ]}
      disabled={isDisabled}
    >
      <Text
        text={buttonText}
        style={textStyle}
        weight={weight ?? TextWeights.bold}
        size={size ?? SIZES.h14}
        color={color ?? COLORS.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: SIZES.padding * 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: SIZES.padding * 2,
  },
});

export default CustomButton;
