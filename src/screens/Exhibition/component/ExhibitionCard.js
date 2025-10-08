import React from 'react';
import { Button, RowView, Text } from '../../../components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';

const ExhibitionCard = ({ item, isFav = false }) => {

  return (
    <View style={styles.main_view} disabled>

      <RowView >
        <Text
          style={common_styles.flex_1}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={isFav ? item?.favoriteId?.title : item.title}
        />
        <View style={styles.text_view} >
          <Text text={isFav ? item?.favoriteId?.booth : item?.booth}
            color={COLORS.placeholder_text_color}
            size={SIZES.h12}
          />
        </View>
      </RowView>

      <Text
        text={`${isFav ? item?.favoriteId?.address : item.address} - ${isFav ? item?.favoriteId?.industry : item.industry}`}
        color={COLORS.light_blue_color}
        mt={SIZES.padding2}
      />
      <Text
        mt={SIZES.padding2 / 2}
        text={
          <>
            <Text text={'Venue:'} color={COLORS.keys_color} />
            <Text text={isFav ? item?.favoriteId?.venue : item.venue} />
          </>
        }
      />

      <Text
        mt={SIZES.padding2}
        text={isFav ? item?.favoriteId?.description : item.description}
        lineHeight={SIZES.padding2 * 1.5}
      />
    </View>
  );
};

export default ExhibitionCard;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding2
  },
  text_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    height: SIZES.padding * 1.2,
    paddingHorizontal: SIZES.padding2,
    justifyContent: "center"
  },
})
