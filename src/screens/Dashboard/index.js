import React from 'react';
import {
  Container,
  Header,
  ImageView,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { dashboard_array, images_array, TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import { SingleTabView } from './components';
import DashboardFunctional from './index.function';

const Dashboard = () => {
  const { daysLeft, activeIndex, onScroll } = DashboardFunctional();

  return (
    <Container isTab={true}>
      <Header isDashBoard isMenu />

      <View style={styles.main_view}>
        <View style={styles.imageWrapper}>
          <FlatList
            data={images_array}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            onScroll={onScroll}
            scrollEventThrottle={16}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => {
              return (
                <View style={styles.counter_card}>
                  <ImageView
                    image={item?.image}
                    width={SIZES.width * 0.87}
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
                          text={`days left until Pharma${'\n'}Asia begins`}
                          size={SIZES.h18}
                          align={'center'}
                          weight={TextWeights.medium}
                        />
                      </>
                    )}
                  </View>
                </View>
              );
            }}
          />
          <View style={styles.dotsOverlay}>
            {images_array?.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeIndex ? styles.dotActive : styles.dotInactive,
                ]}
              />
            ))}
          </View>
        </View>
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
