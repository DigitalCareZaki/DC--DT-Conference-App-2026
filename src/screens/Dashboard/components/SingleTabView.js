import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icons, Text } from '../../../components';
import { navigate } from '../../../navigation/service';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights, website_url } from '../../../config';
import { useSelector } from 'react-redux';

const SingleTabView = ({ item }) => {

  const { user } = useSelector(state => state.constant);

  const onPressTab = () => {
    if (item?.is_login && user) {
      Linking.openURL(website_url)
      return
    }
    if (item?.is_login && !user) {
      navigate("Login")
      return
    }

    if ((item?.name === 'My Agenda' || item?.name === 'Networking') && !user) {
      navigate("Login")
      return
    }

    if (item?.route) navigate(item?.route)

  }

  return (
    <TouchableOpacity
      style={styles.main_view}
      activeOpacity={0.8}
      onPress={onPressTab}
    >
      <Icons name={item?.icon} />
      <Text
        size={SIZES.h14}
        weight={TextWeights.medium}
        text={item?.name}
        mt={SIZES.padding2}
      />
    </TouchableOpacity>
  );
};

export default SingleTabView;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    height: SIZES.padding * 5.5,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2 * 1.2,
    marginTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
