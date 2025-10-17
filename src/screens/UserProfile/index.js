import React from 'react';
import {
  Container,
  Header,
  Icons,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { View } from 'react-native';
import { SIZES } from '../../constants';
import { styles } from './index.styles';
import { social_links, TextWeights } from '../../config';
import { Linking } from 'react-native';
import { common_styles } from '../../utils/common_styles';

const UserProfile = ({ route }) => {
  const { user } = route?.params;
  console.log('user ', user);

  return (
    <Container>
      <Header title={'User Profile'} rightIcon={null} />

      <View style={styles.main_view}>
        <View style={styles.detail_view}>
          <RowView>
            <View style={styles.left_view}>
              <Text size={SIZES.h11} text={'Name'} weight={TextWeights.light} />
              <Text
                weight={TextWeights.medium}
                mt={SIZES.padding2 / 2}
                text={user?.name}
              />
            </View>

            <View style={common_styles.flex_1}>
              <Text size={SIZES.h11} text={'Role'} weight={TextWeights.light} />
              <Text
                weight={TextWeights.medium}
                mt={SIZES.padding2 / 2}
                text={user?.role}
              />
            </View>
          </RowView>
        </View>

        <Text
          text={'Social Media Profile'}
          weight={TextWeights.medium}
          size={SIZES.h16}
          mt={SIZES.padding}
        />

        <SizedBox />

        <RowView justifyContent={'space-between'}>
          {social_links.map(item => (
            <RowView onPress={() => Linking.openURL(item.link)}>
              <Icons iconHeight={SIZES.padding * 2.7} name={item.icon} />
            </RowView>
          ))}
        </RowView>
      </View>
    </Container>
  );
};

export default UserProfile;
