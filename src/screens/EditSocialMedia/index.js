import React from 'react';
import { Button, Container, Header, InputField } from '../../components';
import { ScrollView, View } from 'react-native';
import { COLORS } from '../../constants';
import { styles } from './index.styles';
import {
  facebook_icon,
  instagram_icon,
  linked_in_icon,
  twitter_icon,
  youtube_icon,
} from '../../assets/icons';
import { navigate } from '../../navigation/service';

const EditSocialMedia = () => {
  return (
    <Container>
      <Header rightIcon={null} title={'Edit Social Media Links'} />
      <ScrollView
        style={styles.main_view}
        contentContainerStyle={styles.scrollViewStyle}
      >
        <View style={styles.scrollViewStyle}>
          <InputField
            label={'Facebook Link'}
            leftIcon={facebook_icon}
            placeholder={'Enter your Social Profile'}
          />

          <InputField
            label={'Instagram Link'}
            leftIcon={instagram_icon}
            placeholder={'Enter your Social Profile'}
          />

          <InputField
            label={'LinkedIn Link'}
            leftIcon={linked_in_icon}
            placeholder={'Enter your Social Profile'}
          />

          <InputField
            label={'YouTube Link'}
            leftIcon={youtube_icon}
            placeholder={'Enter your Social Profile'}
          />

          <InputField
            label={'Twitter Link'}
            leftIcon={twitter_icon}
            placeholder={'Enter your Social Profile'}
          />
        </View>
      </ScrollView>

      <Button
        buttonText={'Save Changes'}
        style={styles.btn}
        onPress={() => navigate('Feedback')}
      />
    </Container>
  );
};

export default EditSocialMedia;
