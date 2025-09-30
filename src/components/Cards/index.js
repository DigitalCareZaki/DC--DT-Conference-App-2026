import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import RowView from '../RowView';
import { Icons, SizedBox, Text } from '..';
import { forward_arrow_icon, heart_icon, selected_heart_icon } from '../../assets/icons';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { styles } from './index.styles'
import { common_styles } from '../../utils/common_styles';
import { capitalize } from '../../utils/functions';

const Cards = ({
  onPressHeart,
  item,
  isDetail = false,
  onPress,
  isFavourite = false
}) => {
  return (
    <TouchableOpacity disabled={isDetail} activeOpacity={0.6} onPress={onPress} style={styles.main_view}>

      <RowView >
        <Text
          text={item?.title}
          size={SIZES.h16}
          weight={TextWeights.medium}
          color={COLORS.light_blue_color}
          style={common_styles.flex_1}
        />
        <TouchableOpacity activeOpacity={0.6} hitSlop={common_styles.hitslop2} onPress={onPressHeart}>
          <Icons name={isFavourite ? selected_heart_icon : heart_icon} />
        </TouchableOpacity>
      </RowView>

      <Text text={item?.description} mt={SIZES.padding2} />

      <SizedBox height={SIZES.padding2} />

      <RowView >
        <Text text={'Date:'} size={SIZES.h10} color={COLORS.white + 80} />
        <Text text={item?.date} size={SIZES.h10} />
      </RowView>

      <SizedBox height={SIZES.padding2} />

      <RowView gap={1}>
        <Text text={'Time:'} size={SIZES.h10} color={COLORS.white + 80} />
        <Text text={item?.time} size={SIZES.h10} />
      </RowView>

      <RowView >
        <Text
          text={'Venue:'}
          size={SIZES.h10}
          weight={TextWeights.medium}
          color={COLORS.white + 80}
        />
        <Text
          style={common_styles.flex_1}
          text={item?.venue}
          size={SIZES.h10}
          weight={TextWeights.semibold}
        />
        {
          !isDetail ? <Icons name={forward_arrow_icon} />
            : isFavourite ?
              <View style={styles.type_view} >
                <Text color={COLORS.placeholder_text_color} text={capitalize(item?.type)} />
              </View>
              : null
        }
      </RowView>


    </TouchableOpacity>
  );
};

export default Cards;


