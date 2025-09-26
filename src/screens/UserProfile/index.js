import React from 'react';
import {
  Card,
  Container,
  Header,
  Icons,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { socialLinks, TextWeights } from '../../config';
import { Linking } from 'react-native';

const UserProfile = () => {
  return (
    <Container>
      <Header title={'User Profile'} color={COLORS.white} />

      <View style={styles.main_view}>
        <Card />

        <Text
          text={'Social Media Profile'}
          weight={TextWeights.medium}
          size={SIZES.h18}
          mt={SIZES.padding + 4}
        />

        <SizedBox />

        <RowView justifyContent={'space-between'}>
          {socialLinks.map(item => (
            <RowView onPress={() => Linking.openURL(item.link)}>
              <Icons iconHeight={54} name={item.icon} />
            </RowView>
          ))}
        </RowView>
      </View>
    </Container>
  );
};

export default UserProfile;
