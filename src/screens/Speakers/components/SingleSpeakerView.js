import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../constants';
import { ImageView, Text } from '../../../components';
import { TextWeights } from '../../../config';
import FastImage from 'react-native-fast-image';

const SingleSpeakerView = ({ item }) => {
  return (
    <View style={styles.main_view}>
      <ImageView
        width={SIZES.padding * 5}
        height={SIZES.padding * 5}
        radius={SIZES.padding * 4.65}
        url={item?.profileImage}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />

      <Text
        text={item?.name}
        weight={TextWeights.medium}
        size={SIZES.h14}
        mt={SIZES.padding2 * 0.8}
        align={'center'}
      />

      <View style={styles.text_view}>
        <Text
          size={SIZES.h10}
          color={COLORS.placeholder_text_color}
          text={item?.specialty}
          align={'center'}
          numberOfLines={2}
        />
      </View>

      <Text
        color={COLORS.light_blue_color}
        text={item?.institute}
        align={'center'}
        size={SIZES.h10}
        mt={SIZES.padding2 / 2}
      />
      <Text
        size={SIZES.h10}
        mt={SIZES.padding2 / 2}
        text={item?.description}
        align={'center'}
        lineHeight={SIZES.padding2 * 1.2}
      />
    </View>
  );
};

export default SingleSpeakerView;

const styles = StyleSheet.create({
  main_view: {
    marginTop: SIZES.padding2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2,
    width: '48%',
    padding: SIZES.padding2,
  },
  image: {
    alignSelf: 'center',
  },
  text_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding2 / 5,
    justifyContent: 'center',
    marginTop: SIZES.padding2 / 2,
    alignItems: 'center',
  },
});
