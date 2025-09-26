import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RowView, SizedBox } from '../../../components';
import CustomText from '../../../components/Text';
import { COLORS, SIZES } from '../../../constants';
import IconComponent from '../../../components/Icons';
import {  heart_icon } from '../../../assets/icons';
import { TextWeights } from '../../../config';

const Card = () => {
  return (
    <View style={styles.card}>
      {/* Title Row */}
     <RowView style={{ alignItems: "flex-start" }}>
  <CustomText
    text={
      "Future of Technology 2025 "
    }
    size={SIZES.h16}
    weight={TextWeights.bold}
    color={COLORS.card_heading_color}
    style={styles.heading}
  />

  {/* Icon right aligned fixed */}
  <TouchableOpacity>
    <IconComponent name={heart_icon} iconHeight={20} />
  </TouchableOpacity>
</RowView>


      <SizedBox height={SIZES.h13} />

      {/* Subtitle */}
      <CustomText
        text={'Exploring the latest trends and innovations in technology.'}
        size={SIZES.h12}
        weight={TextWeights.regular}
      />

      <SizedBox height={SIZES.padding} />

      {/* Date */}
      <RowView gap={1}>
        <CustomText
          text={'Date:'}
          size={SIZES.h10}
          weight={TextWeights.medium}
          color={COLORS.white + 80}
        />
        <CustomText
          text={'Sunday, June 15, 2025 -  June 17, 2025'}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
      </RowView>

      <SizedBox height={SIZES.h10} />

      {/* Time */}
      <RowView gap={1}>
        <CustomText
          text={'Time:'}
          size={SIZES.h10}
          weight={TextWeights.medium}
          color={COLORS.white + 80}
        />
        <CustomText
          text={'2:00 PM - 11:00 PM'}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
      </RowView>

      <SizedBox height={SIZES.h10} />

      {/* Venue */}
      <RowView>
        <CustomText
          text={'Venue:'}
          size={SIZES.h10}
          weight={TextWeights.medium}
          color={COLORS.white + 80}
        />
        <CustomText
          text={'Convention Center, Hall A'}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
      </RowView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    width:"90%",
    padding: SIZES.padding2 * 1.5,
    marginHorizontal: SIZES.padding,
  },
  heading:{
    flex: 1,
    flexShrink: 1,
    marginRight: SIZES.padding2
  }
});
