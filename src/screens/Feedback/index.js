import React, { useState } from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  InputField,
  RowView,
  Text,
} from '../../components';
import { ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { grey_star_icon, yellow_star_icon } from '../../assets/icons';

const Feedback = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <Header color={COLORS.white} title={'Feedback'} />
      <ScrollView
        style={styles.main_view}
        contentContainerStyle={styles.scrollViewStyle}
      >
        <View style={styles.scrollViewStyle}>
          <RowView
            direction={'column'}
            justifyContent={'center'}
            style={styles.grid}
            gap={SIZES.padding}
          >
            <Text text={'Overall Experience'} size={SIZES.h18} />
            <RowView>
              {Array.from({ length: 5 }, (_, index) => (
                <RowView
                  key={index}
                  onPress={() => setSelectedIndex(index + 1)}
                >
                  <Icons
                    name={
                      index < selectedIndex ? yellow_star_icon : grey_star_icon
                    }
                  />
                </RowView>
              ))}
            </RowView>
          </RowView>

          <InputField
            label={'What did you like most?'}
            placeholder={'Such a Informative.'}
            style={styles.input}
            inputStyle={{ textAlignVertical: 'top' }}
          />

          <InputField
            label={'What could we improve?'}
            placeholder={'Scale down the duration.'}
            style={styles.input}
            inputStyle={{ textAlignVertical: 'top' }}
          />
        </View>
      </ScrollView>
      <Button buttonText={'Submit'} style={styles.btn} />
    </Container>
  );
};

export default Feedback;
