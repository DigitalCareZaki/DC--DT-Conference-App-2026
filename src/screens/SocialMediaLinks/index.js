import React from 'react';
import { Container, Header, Icons, RowView, Text } from '../../components';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { styles } from './index.styles';
import { edit_icons, facebook_icon } from '../../assets/icons';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { navigate } from '../../navigation/service';

const SocialMediaLinks = () => {
  return (
    <Container>
      <Header rightIcon={null} title={'Social Media Links'} />

      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.link_view}>
            <RowView justifyContent={'space-between'}>
              <RowView gap={SIZES.padding2}>
                <Icons iconHeight={SIZES.padding * 2} name={facebook_icon} />

                <View>
                  <Text
                    size={SIZES.h16}
                    weight={TextWeights.medium}
                    text={'Facebook'}
                  />

                  <Text text={'http://www.facebook.com'} />
                </View>
              </RowView>

              <TouchableOpacity onPress={() => navigate('EditSocialMedia')}>
                <Icons name={edit_icons} />
              </TouchableOpacity>
            </RowView>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default SocialMediaLinks;
