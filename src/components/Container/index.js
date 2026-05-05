import { StatusBar, View } from 'react-native';
import React, { Fragment } from 'react';
import { styles } from './index.style';
import { COLORS, images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageView from '../ImageView';
import FastImage from 'react-native-fast-image';
import { common_styles } from '../../utils/common_styles';

const Container = ({
  children,
  background,
  barStyle,
  isImage = true,
  isTab = false,
  backgroundImage,
}) => {
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
          image={images.pharma_background_img}
          url={backgroundImage}
          style={styles.image}
        />
      )}

      <StatusBar
        barStyle={barStyle || 'light-content'}
        backgroundColor={background ?? COLORS.transparent}
        translucent
      />
      <SafeAreaView
        edges={['left', 'right', 'top', !isTab && 'bottom']}
        style={common_styles.flex_1}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};

export default Container;
