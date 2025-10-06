import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Icons, RowView, Text } from '../../../components';
import { COLORS, SIZES } from '../../../constants';
import { chat_icon } from '../../../assets/icons';
import { TextWeights } from '../../../config';
import { navigate } from '../../../navigation/service';

const SingleUserView = ({ item }) => {
  return (
    <RowView onPress={() => navigate('UserProfile')} style={styles.main_view}>
      <View style={styles.text_view}>
        <Text text={item?.name} size={SIZES.h14} weight={TextWeights.medium} />
        <Text text={item?.email} mt={SIZES.padding2 / 2} />
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
});
