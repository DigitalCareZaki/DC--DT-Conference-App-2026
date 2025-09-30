import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RowView, SizedBox, Text } from '../../../components';

import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';

const SessionCard = ({ item }) => {
  return (
    <View style={styles.main_view}>

      <RowView>

        <Text
          text={item?.title}
          size={SIZES.h14}
          weight={TextWeights.medium}
          style={common_styles.flex_1}
          lineHeight={SIZES.padding2 * 1.5}
        />

        <View style={styles.time_view}>
          <Text size={SIZES.h10} text={item?.time} color={COLORS.placeholder_text_color} />
        </View>

      </RowView>

      <Text
        mt={SIZES.padding2 / 2}
        text={`Speaker: ${item?.speaker}`}
        color={COLORS.light_blue_color}
      />

      <Text
        text={item?.description}
        mt={SIZES.padding2 / 2}
        lineHeight={SIZES.padding2 * 1.3}

      />
    </View>
  );
};

export default SessionCard;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding2,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.light_blue_color,
    borderRadius: SIZES.padding2 * 1.5,
    padding: SIZES.padding2
  },
  time_view: {
    borderRadius: 40,
    backgroundColor: COLORS.white,
    height: SIZES.padding * 1.2,
    paddingHorizontal: SIZES.padding2,
    justifyContent: 'center'
  },
});
