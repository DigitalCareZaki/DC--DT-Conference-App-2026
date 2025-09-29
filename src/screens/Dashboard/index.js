import React, { useState } from 'react';
import {
  AskModal,
  Container,
  Header,
  Icons,
  RowView,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { SIZES } from '../../constants';
import { styles } from './index.styles';
import { counter_icon, menu_icon, notification_icon } from '../../assets/icons';
import { dashboardArr, TextWeights } from '../../config';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const renderItem = ({ item }) => (
    <RowView
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
      />
      <View style={styles.main_view}>
        {/* <ImageView
          image={images.counter_background}
          width={361}
          height={180}
          resizeMode={FastImage.resizeMode.cover}
        /> */}
        <Icons name={counter_icon} />
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
