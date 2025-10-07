import { View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import RowView from '../RowView';
import { Icons, Loader, SizedBox, Text } from '..';
import {
  forward_arrow_icon,
  heart_icon,
  selected_heart_icon,
} from '../../assets/icons';
import { COLORS, SIZES } from '../../constants';
import { dateLocale, datePattern, TextWeights } from '../../config';
import { styles } from './index.styles';
import { common_styles } from '../../utils/common_styles';
import { capitalize } from '../../utils/functions';
import { useSelector } from 'react-redux';

const Cards = ({
  onPressHeart,
  item,
  isDetail = false,
  onPress,
  isFavourite = false,
  isWorkshop = false,
}) => {
  const { favourites } = useSelector(state => state.main);
  return (
    <>
      <TouchableOpacity
        disabled={isDetail}
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.main_view}
      >
        <RowView>
          <Text
            text={isFavourite ? item?.favoriteId?.title : item?.title}
            size={SIZES.h16}
            weight={TextWeights.medium}
            color={COLORS.light_blue_color}
            style={common_styles.flex_1}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            hitSlop={common_styles.hitslop2}
            onPress={onPressHeart}
          >
            <Icons
              name={
                isFavourite ||
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
          text={isFavourite ? item?.favoriteId?.description : item?.description}
          mt={SIZES.padding2}
        />

        <SizedBox height={SIZES.padding2} />

        <RowView>
          <Text text={'Date:'} size={SIZES.h10} color={COLORS.white + 80} />
          <Text
            text={
              isWorkshop || item?.type === 'Workshop'
                ? new Date(
                    isFavourite ? item?.favoriteId?.date : item?.date,
                  ).toLocaleDateString(dateLocale, datePattern)
                : `${new Date(
                    isFavourite ? item?.favoriteId?.startDate : item?.startDate,
                  ).toLocaleDateString(dateLocale, datePattern)} - ${new Date(
                    isFavourite ? item?.favoriteId?.startDate : item?.endDate,
                  ).toLocaleDateString(dateLocale, datePattern)}`
            }
            size={SIZES.h10}
          />
        </RowView>

        <SizedBox height={SIZES.padding2} />

        <RowView gap={1}>
          <Text text={'Time:'} size={SIZES.h10} color={COLORS.white + 80} />
          <Text
            text={isFavourite ? item?.favoriteId?.time : item?.time}
            size={SIZES.h10}
          />
        </RowView>

        <RowView>
          <Text
            text={'Venue:'}
            size={SIZES.h10}
            weight={TextWeights.medium}
            color={COLORS.white + 80}
          />
          <Text
            style={common_styles.flex_1}
            text={isFavourite ? item?.favoriteId?.venue : item?.venue}
            size={SIZES.h10}
            weight={TextWeights.semibold}
          />
          {!isDetail ? (
            <Icons name={forward_arrow_icon} />
          ) : isFavourite ? (
            <View style={styles.type_view}>
              <Text
                color={COLORS.placeholder_text_color}
                text={capitalize(item?.type)}
              />
            </View>
          ) : null}
        </RowView>
      </TouchableOpacity>
    </>
  );
};

export default Cards;
