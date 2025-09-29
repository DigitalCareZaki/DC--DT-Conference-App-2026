import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RowView, SizedBox, Text } from '../../../components';

import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';

const SessionCard = ({ title, time, speaker, description }) => {
  return (
    <View style={styles.backcard}>
      <View style={styles.card}>
        {/* Title + Time */}
        <RowView style={styles.wrap}>
          <Text
            text={title}
            size={SIZES.h16}
            lineHeight={18}
            weight={TextWeights.medium}
            style={{ flex: 1, flexShrink: 1 }}
          />
          <View style={styles.time}>
            <Text text={time} color={COLORS.placeholder_text_color} />
          </View>
        </RowView>

        <SizedBox />

        {/* Speaker */}
        <Text
          text={`Speaker: ${speaker}`}
          size={SIZES.h12}
          color={COLORS.card_heading_color}
        />

        <SizedBox height={SIZES.h14} />

        {/* Description */}
        <Text
          text={description}
          size={SIZES.h14}
          lineHeight={15}
          style={{ flex: 1, flexShrink: 1 }}
        />
      </View>
    </View>
  );
};

export default SessionCard;

const styles = StyleSheet.create({
  backcard: {
    backgroundColor: COLORS.card_heading_color,
    height: SIZES.height * 0.17,
    width: '95%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.17,
    width: '98%',
    paddingVertical:SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
    alignSelf: 'flex-end',
    borderRadius: 15,
  },
  time: {
    width: '40%',
    paddingVertical: 6,
    paddingHorizontal: 7,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  wrap: {
    flexWrap: 'wrap',
  },
});
