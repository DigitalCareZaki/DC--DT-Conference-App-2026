import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { RowView, SizedBox } from '../../../components';
import CustomText from '../../../components/Text';
import { COLORS, SIZES } from '../../../constants';
import IconComponent from '../../../components/Icons';
import { forward_arrow_icon, heart_icon } from '../../../assets/icons';
import { TextWeights } from '../../../config';


const Card = ({
  title,
  subtitle,
  date,
  time,
  venue,
  onPressHeart,
  onPressForward,
}) => {
  return (
    <View style={styles.card}>
      {/* Title Row */}
      <RowView justifyContent="space-between" alignItems="center">
        <CustomText
          text={title}
          size={SIZES.h16}
          weight={TextWeights.bold}
          color={COLORS.card_heading_color}
        />
        <TouchableOpacity onPress={onPressHeart}>
          <IconComponent name={heart_icon} iconHeight={20} />
        </TouchableOpacity>
      </RowView>

      <SizedBox height={SIZES.h13} />

      {/* Subtitle */}
      <CustomText
        text={subtitle}
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
          text={date}
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
          text={time}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
      </RowView>

      <SizedBox height={SIZES.h10} />

      {/* Venue */}
      <RowView justifyContent="space-between" alignItems="center">
        {/* Left side texts */}
        <RowView>
          <CustomText
            text={'Venue:'}
            size={SIZES.h10}
            weight={TextWeights.medium}
            color={COLORS.white + 80}
          />
          <CustomText
            text={venue}
            size={SIZES.h10}
            weight={TextWeights.semibold}
          />
        </RowView>

        {/* Right side forward button */}
        <TouchableOpacity onPress={onPressForward}>
          <IconComponent name={forward_arrow_icon} />
        </TouchableOpacity>
      </RowView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: SIZES.padding2 * 1.5,
    marginHorizontal: SIZES.padding2,
  },
});
