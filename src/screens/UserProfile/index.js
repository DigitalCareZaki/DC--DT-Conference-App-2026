import React from 'react';
import {
  Container,
  Header,
  Icons,
  Loader,
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
import UserProfileFunctional from './index.function';
import { url_regix } from '../../utils/functions';

const UserProfile = ({ route }) => {
  const { participants } = route?.params;
  const { main_loading, single_user } = UserProfileFunctional({ participants });

  return (
    <Container>
      <Header title={'User Profile'} rightIcon={null} />
      {main_loading ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <View style={styles.detail_view}>
            <RowView>
              <View style={styles.left_view}>
                <Text
                  size={SIZES.h11}
                  text={'Name'}
                  weight={TextWeights.light}
                />
                <Text
                  weight={TextWeights.medium}
                  mt={SIZES.padding2 / 2}
                  text={single_user?.name}
                />
              </View>

              <View style={common_styles.flex_1}>
                <Text
                  size={SIZES.h11}
                  text={'Role'}
                  weight={TextWeights.light}
                />
                <Text
                  weight={TextWeights.medium}
                  mt={SIZES.padding2 / 2}
                  text={single_user?.role}
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
            {social_links(single_user).map((item, index) => (
              <RowView
                key={index}
                onPress={() => {
                  if (item?.link && url_regix.test(item.link)) {
                    const formattedLink = item.link.startsWith('http')
                      ? item.link
                      : `https://${item.link}`;

                    Linking.openURL(formattedLink);
                  }
                }}
              >
                <Icons iconHeight={SIZES.padding * 2.7} name={item.icon} />
              </RowView>
            ))}
          </RowView>
        </View>
      )}
    </Container>
  );
};

export default UserProfile;
