import { ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './index.styles';
import { AskModal, Container, Icons, SizedBox, Text } from '../index';
import DrawerContentFunctional from './index.function';
import { COLORS, SIZES } from '../../constants';
import { drawer_icon, drawer_line_icon } from '../../assets/icons';
import { drawer_array, TextWeights } from '../../config';
import { SingleDrawerView } from './components';
import { navigate } from '../../navigation/service';

const DrawerContent = () => {

  const {
    onPressLogout,
    user,
    setShowModal,
    showModal
  } = DrawerContentFunctional();

  return (
    <Container isImage={false} background={COLORS.primary}>
      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Icons name={drawer_icon} />

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
            mb={SIZES.padding * 1.5}
          />

          <Icons name={drawer_line_icon} />

          <SizedBox height={SIZES.padding2} />

          {drawer_array?.map((item, index) => (
            <SingleDrawerView
              onPress={() => {
                if (item?.isLogout) setShowModal(true);
                else
                  navigate(
                    item?.name === 'My Agenda' && !user ? 'Login' : item?.route,
                  );
              }}
              key={item?.id}
              item={item}
            />
          ))}

          <SizedBox />
        </ScrollView>
        <AskModal
          description={'See you next time! You can log out here.'}
          onPressClose={() => setShowModal(false)}
          onPressYes={onPressLogout}
          title={'Logout'}
          visible={showModal}
        />
      </View>
    </Container>
  );
};

export default DrawerContent;
