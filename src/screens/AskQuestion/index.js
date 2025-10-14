import React from 'react';
import {
  Button,
  Container,
  DropDown,
  ErrorText,
  Header,
  InputField,
  Loader,
  SizedBox,
} from '../../components';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { COLORS } from '../../constants';
import { styles } from './index.styles';
import AskQuestionFunctional from './index.function';
import { Formik } from 'formik';
import {
  ask_question_validation,
  ask_question_validation_schema,
} from '../../validations_schemas/ask_question_validation_schema';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';

const AskQuestion = () => {
  const { onSubmit, speakers, list_loading, main_post_loading } =
    AskQuestionFunctional();

  return (
    <Container>
      <Header title={'Ask a Question'} color={COLORS.white} rightIcon={null} />

      {list_loading ? (
        <Loader />
      ) : (
        <>
          <KeyboardAvoidingView
            style={common_styles.flex_1}
            behavior={keyboardAvoidingBehaviour}
          >
            <Formik
              initialValues={ask_question_validation}
              validationSchema={ask_question_validation_schema}
              validateOnChange={false}
              validateOnMount={false}
              validateOnBlur={false}
              onSubmit={values => onSubmit(values)}
            >
              {({
                handleSubmit,
                setFieldValue,
                values,
                errors,
                handleChange,
              }) => {
                return (
                  <>
                    <View style={styles.main_view}>
                      <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps={'handled'}
                      >
                        <DropDown
                          placeholder={'Select Speaker'}
                          array={speakers}
                          onPressValue={val => {
                            setFieldValue('speaker', val?._id);
                          }}
                          value={
                            speakers?.find(
                              item => item?._id === values?.speaker,
                            )?.name
                          }
                          value_key={'name'}
                        />
                        <ErrorText error={errors.speaker} />

                        <InputField
                          placeholder={'Tell us about your inquiry...'}
                          label={'Write down your question here.'}
                          style={styles.input}
                          inputStyle={{
                            textAlignVertical: 'top',
                          }}
                          value={values?.question}
                          onChangeText={handleChange('question')}
                        />
                        <ErrorText error={errors.question} />
                      </ScrollView>

                      {main_post_loading ? (
                        <Loader />
                      ) : (
                        <Button
                          buttonText={'Send Message'}
                          style={styles.btn}
                          onPress={handleSubmit}
                        />
                      )}
                      <SizedBox />
                    </View>
                  </>
                );
              }}
            </Formik>
          </KeyboardAvoidingView>
        </>
      )}
    </Container>
  );
};

export default AskQuestion;
