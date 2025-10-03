import React from 'react';
import { Container, Header, ImageView, SizedBox } from '../../components';
import { FlatList, View } from 'react-native';
import { images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { dashboard_array } from '../../config';
import FastImage from 'react-native-fast-image';
import { SingleTabView } from './components';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  return (
    <Container>
      <Header isDashBoard isMenu />

      <View style={styles.main_view}>
        <FlatList
          data={dashboard_array}
          columnWrapperStyle={styles.list}
          ListHeaderComponent={
            <ImageView
              image={images.counter_background}
              width={'100%'}
              height={SIZES.padding * 8}
              resizeMode={FastImage.resizeMode.cover}
              radius={SIZES.padding2}
            />
          }
          numColumns={2}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }) => <SingleTabView item={item} />}
          ListFooterComponent={<SizedBox />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default Dashboard;
