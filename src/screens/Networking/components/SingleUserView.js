import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Icons, RowView, Text } from '../../../components';
import { COLORS, SIZES } from '../../../constants';
import { chat_icon } from '../../../assets/icons';
import { TextWeights } from '../../../config';
import { navigate } from '../../../navigation/service';
import { common_styles } from '../../../utils/common_styles';

const SingleUserView = ({ item }) => {
  return (
    <RowView onPress={() => navigate('UserProfile', { user: item })} style={styles.main_view}>
      <View style={common_styles.flex_1}>
        <Text
          numberOfLines={2}
          text={item?.name}
          size={SIZES.h14}
          weight={TextWeights.medium}
        />
        <Text text={item?.role} mt={SIZES.padding2 / 2} />
      </View>

      <RowView
        onPress={() => navigate('Chat', { user: item })}
        style={styles.chat_btn}
      >
        <Icons name={chat_icon} />
        <Text
          color={COLORS.primary}
          weight={TextWeights.medium}
          text={'Chat'}
        />

        {item?.unreadCount > 0 && (
          <View style={styles?.unread_count_view}>
            <Text
              color={COLORS.primary}
              weight={TextWeights.medium}
              text={item?.unreadCount}
            />
          </View>
        )}
      </RowView>
    </RowView>
  );
};

export default SingleUserView;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding2,
    padding: SIZES.padding2,
  },
  text_view: {
    flex: 1,
  },
  chat_btn: {
    height: SIZES.padding * 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.padding * 2,
    backgroundColor: COLORS.white,
  },
  unread_count_view: {
    borderRadius: SIZES.padding * 2,
    borderColor: COLORS.primary,
    borderWidth: 1,
    height: SIZES.padding2 * 1.5,
    width: SIZES.padding2 * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
