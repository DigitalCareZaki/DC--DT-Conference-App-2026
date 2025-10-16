import React, { useEffect } from 'react';
import { Linking, View } from 'react-native';
import { Container, Icons, ImageView, RowView, SizedBox, Text } from '../../components';
import { styles } from './index.styles';
import { COLORS, images, SIZES } from '../../constants';
import { splash_logo, website_icon } from '../../assets/icons';
import { TextWeights, website_url } from '../../config';
import { isIOS } from '../../constants/theme';
import { resetNavigationStack } from '../../navigation/service';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      resetNavigationStack('DrawerNavigation');
    }, 2000);
  }, []);

  return (
    <Container>
      <View style={styles.main_view}>
        <SizedBox />

        <ImageView image={images.drawer_logo} height={SIZES.padding * 2} width={'100%'} radius={0} />

        <View>
          <RowView onPress={() => Linking.openURL(website_url)}>
            <Icons name={website_icon} />
            <Text
              color={COLORS.white}
              text={'health-asia.com'}
              textDecorationLine={'underline'}
              weight={TextWeights.medium}
              size={SIZES.h14}
            />
          </RowView>
          {!isIOS && <SizedBox height={SIZES.padding2} />}
        </View>
      </View>
    </Container>
  );
};

export default Splash;
