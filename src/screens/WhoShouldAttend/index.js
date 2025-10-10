import React from 'react';
import { View } from 'react-native';
import { Container, Header, Icons, SizedBox, Text } from '../../components';
import { styles } from './index.styles';
import { who_attend_icon } from '../../assets/icons';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';

const WhoShouldAttend = () => {
  return (
    <Container>
      <Header title={'Who Should Attend'} rightIcon={null} />
      <View style={styles.main_view}>
        <SizedBox height={SIZES.padding + 4} />

        <View style={styles.grid}>
          <Icons name={who_attend_icon} />

          <Text
            size={SIZES.h14}
            weight={TextWeights.medium}
            lineHeight={SIZES.padding}
            align={'center'}
            text={
              'This event is for anyone passionate about healthcare, including medical professionals, researchers, students, and businesses in the medical, pharma, and diagnostics sectors.'
            }
          />
        </View>
      </View>
    </Container>
  );
};

export default WhoShouldAttend;
