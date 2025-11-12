import React from 'react';
import { Button, Icons, RowView, SizedBox, Text } from '../../../components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';
import { heart_icon, website_icon } from '../../../assets/icons';

const SingleExhibitorView = () => {
  return (
    <View style={styles.main_view}>
      <RowView>
        <Text
          style={common_styles.flex_1}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={'TechCorp Solutions'}
        />

        <TouchableOpacity activeOpacity={0.6} hitSlop={common_styles.hitslop2}>
          <Icons name={heart_icon} />
        </TouchableOpacity>
      </RowView>

      <SizedBox height={SIZES.padding2} />

      <View style={styles.booth_view}>
        <Text
          text={'Booth A-101'}
          color={COLORS.placeholder_text_color}
          size={SIZES.h12}
        />
      </View>

      <Text
        text={'Seattle,USA - Software Development'}
        color={COLORS.light_blue_color}
        mt={SIZES.padding2}
      />

      <Text
        mt={SIZES.padding2 + 4}
        weight={TextWeights.medium}
        size={SIZES.h14}
        lineHeight={SIZES.padding}
        text={
          'As a leading provider of enterprise software solutions and cloud services, we deliver innovative technologies that help organizations optimize performance, scale efficiently, and stay ahead in an ever-evolving digital world.'
        }
      />

      <SizedBox height={SIZES.padding2} />

      <View>
        <Text text={'Venue'} color={COLORS.keys_color} />
        <Text
          mt={SIZES.padding2 / 2}
          size={SIZES.h14}
          weight={TextWeights.medium}
          text={'Venue: Main Exhibition Hall'}
        />
      </View>

      <SizedBox height={SIZES.padding2 + 4} />

      <View>
        <Text
          text={'Contact Link'}
          color={COLORS.keys_color}
          mb={SIZES.padding2 / 2}
        />
        <RowView>
          <Icons name={website_icon} />
          <Text
            size={SIZES.h14}
            text={'techcorpsolutions.com'}
            textDecorationLine={'underline'}
          />
        </RowView>
      </View>
    </View>
  );
};

export default SingleExhibitorView;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding2,
  },
  booth_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    height: SIZES.padding * 1.2,
    width: 102,
    paddingHorizontal: SIZES.padding2,
    justifyContent: 'center',
    marginRight: SIZES.padding2,
  },
});
