import React from 'react';
import { Container, Header, ImageView, RowView, Text } from '../../components';
import { FlatList, View } from 'react-native';
import { images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { dashboard_array, TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import { SingleTabView } from './components';
import DashboardFunctional from './index.function';

const Dashboard = () => {
  const { daysLeft } = DashboardFunctional();
  return (
    <Container>
      <Header isDashBoard isMenu />

      <View style={styles.main_view}>
        <FlatList
          data={dashboard_array}
          columnWrapperStyle={styles.list}
          ListHeaderComponent={() => (
            <View style={styles.counter_card}>
              <ImageView
                image={images.counter_backgorund}
                width={'100%'}
                height={SIZES.padding * 8}
                resizeMode={FastImage.resizeMode.cover}
                radius={SIZES.padding2}
              />

              <View style={styles.text_view}>
                {daysLeft === 0 ? (
                  <Text
                    text={`The biggest health${'\n'}sector event of${'\n'}pakistan has started${'\n'}Join today at the Expo${'\n'}Center`}
                    size={SIZES.h16}
                    weight={TextWeights.medium}
                    lineHeight={SIZES.padding + 4}
                  />
                ) : (
                  <>
                    <Text
                      text={'The countdown is on!'}
                      size={SIZES.h18}
                      weight={TextWeights.medium}
                    />

                    <RowView justifyContent={'center'}>
                      <Text
                        text={'Only '}
                        size={SIZES.h18}
                        weight={TextWeights.medium}
                      />
                      <Text
                        text={String(daysLeft)}
                        size={SIZES.h35}
                        weight={TextWeights.medium}
                      />
                    </RowView>

                    <Text
                      text={`days left until Health${'\n'}Asia begins`}
                      size={SIZES.h18}
                      align={'center'}
                      weight={TextWeights.medium}
                    />
                  </>
                )}
              </View>
            </View>
          )}
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
