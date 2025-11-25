import React from 'react';
import { Container, Header, SizedBox } from '../../components';
import { FlatList, View } from 'react-native';
import { SIZES } from '../../constants';
import { styles } from './index.styles';
import { dashboard_array } from '../../config';
import { BannerView, SingleTabView } from './components';

const Dashboard = () => {
  return (
    <Container isTab={true}>
      <Header isDashBoard isMenu />

      <View style={styles.main_view}>
        
        <BannerView />

        <SizedBox height={SIZES.padding2} />

        <FlatList
          data={dashboard_array}
          columnWrapperStyle={styles.list}
          ListFooterComponent={<SizedBox />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }) => <SingleTabView item={item} />}
        />
      </View>
    </Container>
  );
};

export default Dashboard;
