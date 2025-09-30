import {  View, TouchableOpacity } from 'react-native';
import React from 'react';
import RowView from '../RowView';
import { Icons, SizedBox, Text } from '..';
import { forward_arrow_icon, heart_icon } from '../../assets/icons';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import {styles} from './index.styles'

const Cards = ({
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
        <Text
          text={title}
          size={SIZES.h16}
          lineHeight={17}
          weight={TextWeights.medium}
          color={COLORS.card_heading_color}
          style={{ flex: 1, flexShrink: 1, marginRight: SIZES.padding2 }}
        />
        <TouchableOpacity onPress={onPressHeart}>
          <Icons name={heart_icon} iconHeight={20} />
        </TouchableOpacity>
      </RowView>

      <SizedBox/>

      {/* Subtitle */}
      <Text
        text={subtitle}
        size={SIZES.h12}
        lineHeight={13}
        weight={TextWeights.regular}
      />

      <SizedBox height={SIZES.padding} />

      {/* Date */}
      <RowView >
        <Text
          text={'Date:'}
          size={SIZES.h10}
          weight={TextWeights.medium}
          color={COLORS.white + 80}
        />
        <Text
          text={date}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
      </RowView>

      <SizedBox height={SIZES.h10} />

      {/* Time */}
      <RowView gap={1}>
        <Text
          text={'Time:'}
          size={SIZES.h10}
          weight={TextWeights.medium}
          color={COLORS.white + 80}
        />
        <Text
          text={time}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
      </RowView>


      {/* Venue */}
      {/* Venue */}
<RowView justifyContent="space-between">
  {/* Left side texts */}
  <RowView gap={1}>
    <Text
      text={'Venue:'}
      size={SIZES.h10}
      weight={TextWeights.medium}
      color={COLORS.white + 80}
    />
    <Text
      text={venue}
      size={SIZES.h10}
      weight={TextWeights.semibold}
    />
  </RowView>

  {/* Right side forward button (sirf tab jab onPressForward ho) */}
  {onPressForward && (
    <TouchableOpacity onPress={onPressForward}>
      <Icons name={forward_arrow_icon} />
    </TouchableOpacity>
  )}
</RowView>

    </View>
  );
};

export default Cards;


