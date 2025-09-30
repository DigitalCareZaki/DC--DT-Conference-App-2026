import React, { useState } from 'react';
import {
  AskModal,
  Container,
  Header,
  ImageView,
  SizedBox,
} from '../../components';
import { FlatList, View } from 'react-native';
import { images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { menu_icon, notification_icon } from '../../assets/icons';
import { dashboard_array } from '../../config';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { SingleTabView } from "./components"

const Dashboard = () => {
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Header
        onPressBack={() => navigation.openDrawer()}
        isDashBoard
        leftIcon={menu_icon}
        rightIcon={notification_icon}
      />
      <View style={styles.main_view}>
        <FlatList
          data={dashboard_array}
          columnWrapperStyle={styles.list}
          ListHeaderComponent={<ImageView
            image={images.counter_background}
            width={"100%"}
            height={SIZES.padding * 8}
            resizeMode={FastImage.resizeMode.cover}
            radius={SIZES.padding2}
          />}
          numColumns={2}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }) => <SingleTabView item={item} />}
          ListFooterComponent={<SizedBox />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <AskModal visible={showModal} onPressClose={() => setShowModal(false)} />
    </Container>
  );
};

export default Dashboard;
