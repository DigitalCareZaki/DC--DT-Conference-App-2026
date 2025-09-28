import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RowView, SizedBox } from '../../../components';
import CustomText from '../../../components/Text';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';

const ShopModules = ({ title, time, description }) => {
  return (
    <View style={styles.backcard}>
      <View style={styles.card}>
        {/* Title + Time */}
        <RowView style={styles.wrap}>
          <CustomText
            text={title}
            size={SIZES.h16}
            weight={TextWeights.medium}
            color={COLORS.card_heading_color}
            style={{ flex: 1, flexShrink: 1 }}
          />
          <View style={styles.time}>
            <CustomText text={time} color={COLORS.text_black} size={SIZES.h12} />
          </View>
        </RowView>
    

        <SizedBox height={SIZES.h10} />

        {/* Description */}
        <CustomText
          text={description}
          size={SIZES.h14}
          style={{ flex: 1, flexShrink: 1 }}
        />
      </View>
    </View>
  );
};

export default ShopModules;

const styles = StyleSheet.create({
  backcard: {
    backgroundColor: COLORS.card_heading_color,
    height: SIZES.height * 0.14,
    width: '95%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.14,
    width: '98%',
    padding: 5,
    paddingHorizontal: SIZES.padding2,
    alignSelf: 'flex-end',
    borderRadius: 15,
  },
  time: {
    width: '30%',
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  wrap: {
    flexWrap: 'wrap',
  },
});
