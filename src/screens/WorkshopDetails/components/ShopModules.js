import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RowView, Text } from '../../../components';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';

const ShopModules = ({ item }) => {
  return (
    <View style={styles.main_view}>
      <RowView >
        <Text
          text={item?.title}
          size={SIZES.h14}
          weight={TextWeights.medium}
          color={COLORS.light_blue_color}
          style={common_styles.flex_1}
        />

        <View style={styles.time_view}>
          <Text text={item?.time}
            color={COLORS.placeholder_text_color}
          />
        </View>

      </RowView>

      <Text text={item?.description} mt={SIZES.padding2 / 2} />
    </View>
  );
};

export default ShopModules;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding2,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.light_blue_color,
    borderRadius: SIZES.padding2 * 1.5,
    padding: SIZES.padding2,
  },
  time_view: {
    borderRadius: SIZES.padding,
    backgroundColor: COLORS.white,
    height: SIZES.padding,
    paddingHorizontal: SIZES.padding2 * 1.5,
    justifyContent: 'center'
  },
});
