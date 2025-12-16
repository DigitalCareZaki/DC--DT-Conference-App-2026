import React from 'react';
import { RowView, SizedBox, Text } from '../../../components';
import { View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';

const ContactCard = () => {
  return (
    <View style={styles.detail_view}>
      <Text size={SIZES.h11} text={'Address'} weight={TextWeights.light} />
      <Text
        weight={TextWeights.medium}
        mt={SIZES.padding2 / 2}
        lineHeight={SIZES.padding2 * 1.5}
        text={
          '8-Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, Off Shaheed-e-Millat Road, Karachi, Pakistan'
        }
      />

      <SizedBox height={SIZES.padding2} />

      <RowView alignItems={'flex-start'}>
        <View style={styles.left_view}>
          <Text size={SIZES.h11} text={'Email'} weight={TextWeights.light} />
          <Text
            weight={TextWeights.medium}
            mt={SIZES.padding2 / 2}
            text={'info@ecgateway.net'}
          />
        </View>

        <View style={common_styles.flex_1}>
          <Text size={SIZES.h11} text={'Mobile'} weight={TextWeights.light} />
          <Text
            weight={TextWeights.medium}
            lineHeight={SIZES.padding2 * 1.5}
            mt={SIZES.padding2 / 2}
            text={`(021) 111 222 444
(021) 3870 9970`}
          />
        </View>
      </RowView>

      <Text
        mt={SIZES.padding2}
        size={SIZES.h11}
        text={'Office Hours'}
        weight={TextWeights.light}
      />
      <Text
        weight={TextWeights.medium}
        mt={SIZES.padding2 / 2}
        text={'Monday - Friday: 9:00 AM - 6:00 PM'}
      />
      <Text
        weight={TextWeights.medium}
        mt={SIZES.padding2 / 5}
        text={'Saturday: 10:00 AM - 4:00 PM'}
      />
    </View>
  );
};

export default ContactCard;

export const styles = StyleSheet.create({
  detail_view: {
    marginTop: SIZES.padding2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding,
  },
  left_view: {
    width: '60%',
  },
});
