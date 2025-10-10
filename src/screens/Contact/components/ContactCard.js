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
        text={'123 Conference Center Drive Tech City, TC 12345'}
      />

      <SizedBox height={SIZES.padding2} />

      <RowView>
        <View style={styles.left_view}>
          <Text size={SIZES.h11} text={'Email'} weight={TextWeights.light} />
          <Text
            weight={TextWeights.medium}
            mt={SIZES.padding2 / 2}
            text={'info@globaltechconf.com'}
          />
        </View>

        <View style={common_styles.flex_1}>
          <Text size={SIZES.h11} text={'Mobile'} weight={TextWeights.light} />
          <Text
            weight={TextWeights.medium}
            mt={SIZES.padding2 / 2}
            text={'+1 (555) 123-4567'}
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
