import React, { useState } from 'react';
import {
  AskModal,
  Container,
  Header,
  Icons,
  ImageView,
  RowView,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { counter_icon, menu_icon, notification_icon } from '../../assets/icons';
import { dashboardArr, TextWeights } from '../../config';
import { navigate } from '../../navigation/service';
import FastImage from 'react-native-fast-image';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const renderItem = ({ item }) => (
    <RowView
      onPress={() => navigate(item?.navigation)}
      direction={'column'}
      justifyContent={'center'}
      style={styles.itemContainer}
    >
      <Icons name={item?.icon} />
      <Text text={item?.name} size={SIZES.h16} weight={TextWeights.medium} />
    </RowView>
  );
  return (
    <Container>
      <Header
        title={null}
        isDashBoard
        leftIcon={menu_icon}
        rightIcon={notification_icon}
        onPressRightIcon={() => navigate('Notification')}
      />
      <View style={styles.main_view}>
        <ImageView
          image={images.counter_background}
          width={330}
          height={180}
          radius={12}
          style={styles.banner}
        />
        <FlatList
          keyExtractor={item => item?.id?.toString()}
          renderItem={renderItem}
          data={dashboardArr}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginTop: 12,
          }}
        />
      </View>
      <AskModal visible={showModal} onPressClose={() => setShowModal(false)} />
    </Container>
  );
};

export default Dashboard;
