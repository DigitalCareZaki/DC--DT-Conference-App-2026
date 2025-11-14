import { ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './index.styles';
import {
  AskModal,
  Container,
  Icons,
  ImageView,
  SizedBox,
  Text,
} from '../index';
import DrawerContentFunctional from './index.function';
import { COLORS, images, SIZES } from '../../constants';
import {
  delete_icon,
  drawer_icon,
  drawer_line_icon,
  modal_logout_icon,
} from '../../assets/icons';
import { drawer_array, TextWeights } from '../../config';
import { SingleDrawerView } from './components';
import { navigate } from '../../navigation/service';

const DrawerContent = () => {
  const {
    onPressLogout,
    user,
    setShowModal,
    showModal,
    onPressDeleteAcc,
    auth_loading,
    feedback,
    onDrawerItemPress,
  } = DrawerContentFunctional();

  return (
    <Container isImage={false} background={COLORS.primary}>
      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageView
            image={images.drawer_logo}
            height={SIZES.padding * 2}
            width={'100%'}
            radius={0}
          />

          <Text
            mt={SIZES.padding}
            text={user?.name}
            align={'center'}
            weight={TextWeights.medium}
            size={SIZES.h22}
          />
          <Text
            mt={SIZES.padding2 / 6}
            align={'center'}
            text={user?.email}
            mb={SIZES.padding2}
          />

          <Icons name={drawer_line_icon} />

          {/* <SizedBox height={SIZES.padding2} /> */}

          {drawer_array(user)?.map((item, index) => (
            <SingleDrawerView
              onPress={() => onDrawerItemPress(item)}
              key={item?.id}
              item={item}
            />
          ))}

          <SizedBox />
        </ScrollView>
      </View>
      <AskModal
        description={'See you next time! You can log out here.'}
        onPressClose={() =>
          setShowModal(prev => ({
            ...prev,
            logoutModal: false,
          }))
        }
        onPressYes={onPressLogout}
        title={'Logout'}
        visible={showModal.logoutModal}
        icon={modal_logout_icon}
        btnText={'Logout'}
        isLoading={auth_loading}
      />
      <AskModal
        description={`Are you sure you want to delete your account?${'\n'}This action is permanent and all your data will be lost.`}
        onPressClose={() =>
          setShowModal(prev => ({
            ...prev,
            deleteModal: false,
          }))
        }
        onPressYes={onPressDeleteAcc}
        title={'Delete Account'}
        visible={showModal.deleteModal}
        icon={delete_icon}
        btnText={'Delete Account'}
        isLoading={auth_loading}
      />

      <AskModal
        isEdit={true}
        description={`You’ve already sent your feedback.`}
        onPressClose={() =>
          setShowModal(prev => ({
            ...prev,
            feedbackModal: false,
          }))
        }
        onPressYes={() =>
          setShowModal(prev => ({
            ...prev,
            feedbackModal: false,
          }))
        }
        onPressEdit={() => {
          navigate('Feedback');
          setShowModal(prev => ({
            ...prev,
            feedbackModal: false,
          }));
        }}
        title={'Thanks!'}
        visible={showModal.feedbackModal}
        icon={null}
        btnText={'Ok'}
      />
    </Container>
  );
};

export default DrawerContent;
