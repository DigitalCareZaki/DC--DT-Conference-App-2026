import React, { useState } from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  InputField,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { grey_star_icon, yellow_star_icon } from '../../assets/icons';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';

const Feedback = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <Header title={'Feedback'} rightIcon={null} />
      <KeyboardAvoidingView style={common_styles.flex_1} behavior={keyboardAvoidingBehaviour}  >

        <View style={styles.main_view} >
          <ScrollView showsVerticalScrollIndicator={false}   >

            <View
              style={styles.grid}
              gap={SIZES.padding}
            >
              <Text align={'center'} text={'Overall Experience'} size={SIZES.h18} />
              <RowView>
                {Array.from({ length: 5 }, (_, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.6}
                    onPress={() => setSelectedIndex(index + 1)}
                  >
                    <Icons
                      name={
                        index < selectedIndex ? yellow_star_icon : grey_star_icon
                      }
                    />
                  </TouchableOpacity>
                ))}
              </RowView>
            </View>

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


            <SizedBox />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <Button buttonText={'Submit'} style={styles.btn} />
    </Container>
  );
};

export default Feedback;
