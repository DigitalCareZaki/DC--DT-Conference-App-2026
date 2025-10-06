import { StatusBar, View } from 'react-native';
import React, { Fragment } from 'react';
import { styles } from './index.style';
import { COLORS, images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageView from '../ImageView';
import FastImage from 'react-native-fast-image';
import { common_styles } from '../../utils/common_styles';

const Container = ({ children, background, barStyle, isImage = true }) => {
  return (
    <View
      style={[
        common_styles.flex_1,
        { backgroundColor: background ?? COLORS.white },
      ]}
    >
      {isImage && (
        <ImageView
          radius={0}
          resizeMode={FastImage.resizeMode.cover}
          image={images.background_image}
          style={styles.image}
        />
      )}

      <StatusBar
        barStyle={barStyle || 'light-content'}
        backgroundColor={background ?? COLORS.white}
        translucent
      />
      <SafeAreaView style={common_styles.flex_1}>{children}</SafeAreaView>
    </View>
  );
};

export default Container;
