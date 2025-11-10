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
    showDeleteAccModal,
    setShowDeleteAccModal,
    onPressDeleteAcc,
    auth_loading,
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
              onPress={() => {
                if (item?.isLogout) {
                  if (user) setShowModal(true);
                  else navigate('Login');
                } else if (item?.isDeleteAccount) setShowDeleteAccModal(true);
                else
                  navigate(
                    (item?.name === 'My Favourites' ||
                      item?.name === 'Ask A Question') &&
                      !user
                      ? 'Login'
                      : item?.route,
                  );
              }}
              key={item?.id}
              item={item}
            />
          ))}

          <SizedBox />
        </ScrollView>
      </View>
      <AskModal
        description={'See you next time! You can log out here.'}
        onPressClose={() => setShowModal(false)}
        onPressYes={onPressLogout}
        title={'Logout'}
        visible={showModal}
        icon={modal_logout_icon}
        btnText={'Logout'}
        isLoading={auth_loading}
      />
      <AskModal
        description={`Are you sure you want to delete your account?${'\n'}This action is permanent and all your data will be lost.`}
        onPressClose={() => setShowDeleteAccModal(false)}
        onPressYes={onPressDeleteAcc}
        title={'Delete Account'}
        visible={showDeleteAccModal}
        icon={delete_icon}
        btnText={'Delete Account'}
        isLoading={auth_loading}
      />
    </Container>
  );
};

export default DrawerContent;
