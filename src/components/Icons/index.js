import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { delete_icon } from '../../assets/icons';
const IconComponent = ({
  name,
  style,
  iconHeight,
  fill = 'transparent',
  stroke,
}) => {
  return (
    <View style={[styles.main_view, style]}>
      {iconHeight ? (
        <SvgXml
          stroke={stroke}
          xml={name}
          width={iconHeight}
          height={iconHeight}
          fill={name === delete_icon ? 'white' : fill}
        />
      ) : (
        <SvgXml stroke={stroke} xml={name} fill={fill} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main_view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default IconComponent;
