import React from 'react';
import { Button, Icons, RowView, SizedBox, Text } from '../../../components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';
import { heart_icon } from '../../../assets/icons';
import { navigate } from '../../../navigation/service';

const ExhibitionCard = ({ item, isFav = false }) => {
  return (
    <View style={styles.main_view} disabled>
      <RowView>
        <Text
          style={common_styles.flex_1}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={'TechCorp Solutions'}
          // text={isFav ? item?.favoriteId?.title : item.title}
        />
        <View style={styles.text_view}>
          <Text
            text={'Booth A-101'}
            // text={isFav ? item?.favoriteId?.booth : item?.booth}
            color={COLORS.placeholder_text_color}
            size={SIZES.h12}
          />
        </View>
        <TouchableOpacity activeOpacity={0.6} hitSlop={common_styles.hitslop2}>
          <Icons name={heart_icon} />
        </TouchableOpacity>
      </RowView>

      <Text
        text={'Seattle,USA - Software Development'}
        // text={`${isFav ? item?.favoriteId?.address : item.address} - ${
        //   isFav ? item?.favoriteId?.industry : item.industry
        // }`}
        color={COLORS.light_blue_color}
        mt={SIZES.padding2}
      />
      <Text
        mt={SIZES.padding2 / 2}
        text={
          <>
            <Text text={'Venue:'} color={COLORS.keys_color} />
            <Text
              text={'Main Exhibition Hall'}
              //  text={isFav ? item?.favoriteId?.venue : item.venue}
            />
          </>
        }
      />

      <Text
        mt={SIZES.padding2 / 2}
        text={
          <>
            <Text text={'Exhibitor category:'} color={COLORS.keys_color} />
            <Text text={'Gold'} color={COLORS.gold} weight={TextWeights.bold} />
          </>
        }
      />

      <Text
        mt={SIZES.padding2}
        text={
          'Leading provider Of enterprise software solutions and cloud services.'
        }
        // text={isFav ? item?.favoriteId?.description : item.description}
        lineHeight={SIZES.padding2 * 1.5}
      />

      <SizedBox />

      <Button buttonText={'Chat'} />
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
    marginTop: SIZES.padding2,
  },
  text_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    height: SIZES.padding * 1.2,
    paddingHorizontal: SIZES.padding2,
    justifyContent: 'center',
    marginRight: SIZES.padding2,
  },
});
