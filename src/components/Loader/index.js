import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const Loader = ({ style, color, size, mt }) => {
  return (
    <ActivityIndicator
      size={size ? size : 'large'}
      color={color ?? COLORS.primary}
      style={[{ marginTop: mt ?? SIZES.padding2 }, style]}
    />
  );
};

export default Loader;

