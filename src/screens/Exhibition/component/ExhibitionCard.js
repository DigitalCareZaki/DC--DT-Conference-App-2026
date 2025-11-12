import React from 'react';
import { Button, Icons, RowView, SizedBox, Text } from '../../../components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';
import { heart_icon, selected_heart_icon } from '../../../assets/icons';
import { navigate } from '../../../navigation/service';
import { useSelector } from 'react-redux';

const ExhibitionCard = ({ item, isFav = false, onPressHeart }) => {
  const { favourites } = useSelector(state => state.main);

  return (
    <TouchableOpacity
      style={styles.main_view}
      onPress={() => navigate('ExhibitorDetail', { item })}
    >
      <RowView>
        <Text
          style={common_styles.flex_1}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={item?.title}
          // text={isFav ? item?.favoriteId?.title : item.title}
        />
        <View style={styles.text_view}>
          <Text
            text={`Booth ${item?.booth}`}
            // text={isFav ? item?.favoriteId?.booth : item?.booth}
            color={COLORS.placeholder_text_color}
            size={SIZES.h12}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          hitSlop={common_styles.hitslop2}
          onPress={onPressHeart}
        >
          <Icons
            name={
              favourites?.find(
                favItem => favItem?.favoriteId?._id === item?._id,
              )
                ? selected_heart_icon
                : heart_icon
            }
          />
        </TouchableOpacity>
      </RowView>

      <Text
        text={`${item?.address} - ${item?.industry}`}
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
              text={item?.venue}
              //  text={isFav ? item?.favoriteId?.venue : item.venue}
            />
          </>
        }
      />

      <Text
        mt={SIZES.padding2}
        text={item?.description}
        // text={isFav ? item?.favoriteId?.description : item.description}
        lineHeight={SIZES.padding2 * 1.5}
      />
    </TouchableOpacity>
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
