import React from 'react';
import { Button, Icons, RowView, SizedBox, Text } from '../../../components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { common_styles } from '../../../utils/common_styles';
import {
  heart_icon,
  selected_heart_icon,
  website_icon,
} from '../../../assets/icons';
import { useSelector } from 'react-redux';
import { navigate } from '../../../navigation/service';

const SingleExhibitorView = ({ item, onPressHeart, onPressLink }) => {
  const { favourites } = useSelector(state => state.main);
  const { user } = useSelector(state => state.constant);

  return (
    <View style={styles.main_view}>
      <RowView>
        <Text
          style={common_styles.flex_1}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={item?.title}
        />

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

      <SizedBox height={SIZES.padding2} />

      <View style={styles.booth_view}>
        <Text
          text={`Booth ${item?.booth ?? ''}`}
          color={COLORS.placeholder_text_color}
          size={SIZES.h12}
        />
      </View>

      <Text
        text={item?.address ?? ''}
        color={COLORS.light_blue_color}
        mt={SIZES.padding2}
      />

      {item?.industry && (
        <Text
          mt={SIZES.normal / 2}
          text={
            <>
              <Text text={'Exhibitor category:'} color={COLORS.keys_color} />
              <Text text={item?.industry} />
            </>
          }
        />
      )}

      {item?.description ? (
        <Text
          mt={SIZES.normal}
          weight={TextWeights.medium}
          size={SIZES.h14}
          lineHeight={SIZES.padding}
          text={item?.description}
        />
      ) : null}

      <SizedBox height={SIZES.padding2} />

      <RowView>
        <View style={common_styles.flex_1}>
          <Text text={'Venue'} color={COLORS.keys_color} />
          <Text
            mt={SIZES.normal / 2}
            size={SIZES.h14}
            weight={TextWeights.medium}
            text={item?.venue}
          />
        </View>

        {!item.category === 'none' && (
          <View>
            <Text text={'Exhibitor Category'} color={COLORS.keys_color} />
            <Text
              mt={SIZES.normal / 2}
              size={SIZES.h14}
              weight={TextWeights.heavy}
              text={item.category}
              color={COLORS.gold}
            />
          </View>
        )}
      </RowView>

      <SizedBox height={SIZES.normal} />

      {item?.contactLink && (
        <View>
          <Text
            text={'Contact Link'}
            color={COLORS.keys_color}
            mb={SIZES.normal / 2}
          />
          <RowView onPress={onPressLink}>
            <Icons name={website_icon} />
            <Text
              size={SIZES.h14}
              text={item?.contactLink}
              textDecorationLine={'underline'}
            />
          </RowView>
        </View>
      )}

      <SizedBox />

      {item?.chatId && (
        <Button
          buttonText={'Chat'}
          onPress={() =>
            navigate('Chat', {
              user: {
                name: item?.exhibitor?.name,
                exhibitor: item?.exhibitor,
                id: item?.chatId,
                participants: [item?.exhibitor?._id, user?._id],
              },
            })
          }
        />
      )}
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
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  booth_view: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
    justifyContent: 'center',
    paddingVertical: SIZES.padding * 0.3,
  },
});
