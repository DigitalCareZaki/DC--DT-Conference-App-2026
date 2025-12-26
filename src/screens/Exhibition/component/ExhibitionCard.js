import React from 'react';
import {
  Button,
  Icons,
  Loader,
  RowView,
  SizedBox,
  Text,
} from '../../../components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';
import { heart_icon, selected_heart_icon } from '../../../assets/icons';
import { navigate } from '../../../navigation/service';
import { useSelector } from 'react-redux';

const ExhibitionCard = ({
  isDescription = true,
  index,
  item,
  isFav = false,
  onPressHeart,
}) => {
  const { favourites, selected_item_index, favourite_loading } = useSelector(
    state => state.main,
  );
  return (
    <TouchableOpacity
      style={styles.main_view}
      onPress={() =>
        navigate('ExhibitorDetail', { item: isFav ? item.favoriteId : item })
      }
      activeOpacity={0.8}
    >
      <RowView>
        <Text
          style={common_styles.flex_1}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={isFav ? item?.favoriteId?.title : item?.title}
          lineHeight={16}
        />
        <View style={styles.booth_view}>
          <Text
            text={`Booth ${isFav ? item?.favoriteId?.booth : item?.booth}`}
            color={COLORS.placeholder_text_color}
            size={SIZES.h12}
            numberOfLines={2}
          />
        </View>
        {selected_item_index === index && favourite_loading ? (
          <Loader mt={0} size={'small'} />
        ) : (
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
        )}
      </RowView>

      <Text
        text={`${isFav ? item?.favoriteId?.address : item?.address} - ${
          isFav ? item?.favoriteId?.industry : item?.industry
        }`}
        color={COLORS.light_blue_color}
        mt={SIZES.padding2}
      />
      <Text
        mt={SIZES.normal / 2}
        text={
          <>
            <Text text={'Venue:'} color={COLORS.keys_color} />
            <Text text={isFav ? item?.favoriteId?.venue : item?.venue} />
          </>
        }
      />
      {!item.category === 'none' && (
        <Text
          mt={SIZES.normal / 2}
          text={
            <>
              <Text text={'Exhibitor Category:'} color={COLORS.keys_color} />
              <Text
                color={COLORS.gold}
                text={item.category}
                weight={TextWeights.heavy}
              />
            </>
          }
        />
      )}
      {item?.description || item?.favoriteId?.description ? (
        <Text
          mt={SIZES.padding2}
          text={isFav ? item?.favoriteId?.description : item?.description}
          lineHeight={SIZES.padding2 * 1.5}
          numberOfLines={2}
        />
      ) : null}

      {!isFav && (
        <>
          <SizedBox />
          <Button
            buttonText={'Chat'}
            onPress={() => navigate('Chat', { user: item })}
          />
        </>
      )}
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
  booth_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    width: 101,
    paddingHorizontal: SIZES.normal,
    justifyContent: 'center',
    marginRight: SIZES.padding2,
    paddingVertical: SIZES.padding2 / 3,
  },
});
