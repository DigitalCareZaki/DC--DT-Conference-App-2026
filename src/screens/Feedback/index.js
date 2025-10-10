import React from 'react';
import {
  Button,
  Container,
  ErrorText,
  Header,
  Icons,
  InputField,
  Loader,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { SIZES } from '../../constants';
import { styles } from './index.styles';
import { grey_star_icon, yellow_star_icon } from '../../assets/icons';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import FeedbackFunctional from './index.function';
import { Formik } from 'formik';
import {
  feedback_schema,
  feedback_validation_schema,
} from '../../validations_schemas/feedback_validation_schema';
const Feedback = () => {
  const { main_loading, feedback, onPressSubmit, main_post_loading } =
    FeedbackFunctional();

  return (
    <Container>
      <Header title={'Feedback'} rightIcon={null} />
      {main_loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={feedback_schema(feedback)}
          validationSchema={feedback_validation_schema}
          validateOnChange={true}
          validateOnMount={false}
          validateOnBlur={false}
          onSubmit={values => onPressSubmit(values)}
        >
          {({ handleChange, values, errors, handleSubmit, setFieldValue }) => {
            return (
              <>
                <KeyboardAvoidingView
                  style={common_styles.flex_1}
                  behavior={keyboardAvoidingBehaviour}
                >
                  <View style={styles.main_view}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View style={styles.grid} gap={SIZES.padding2}>
                        <Text
                          align={'center'}
                          text={'Overall Experience'}
                          size={SIZES.h18}
                        />
                        <RowView>
                          {Array.from({ length: 5 }, (_, index) => (
                            <TouchableOpacity
                              key={index}
                              activeOpacity={0.6}
                              onPress={() => setFieldValue('rating', index + 1)}
                            >
                              <Icons
                                iconHeight={SIZES.padding * 1.5}
                                name={
                                  index < values?.rating
                                    ? yellow_star_icon
                                    : grey_star_icon
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
                        inputStyle={{
                          textAlignVertical: 'top',
                        }}
                        value={values.likedMost}
                        onChangeText={handleChange('likedMost')}
                      />
                      <ErrorText error={errors.likedMost} />

                      <InputField
                        label={'What could we improve?'}
                        placeholder={'Scale down the duration.'}
                        style={styles.input}
                        inputStyle={{ textAlignVertical: 'top' }}
                        value={values.suggestions}
                        onChangeText={handleChange('suggestions')}
                      />
                      <ErrorText error={errors.suggestions} />

                      <SizedBox />
                    </ScrollView>

                    {main_post_loading ? (
                      <Loader mt={0} />
                    ) : (
                      <Button
                        buttonText={'Submit'}
                        style={styles.btn}
                        onPress={handleSubmit}
                      />
                    )}
                    <SizedBox />
                  </View>
                </KeyboardAvoidingView>
              </>
            );
          }}
        </Formik>
      )}
    </Container>
  );
};

export default Feedback;
