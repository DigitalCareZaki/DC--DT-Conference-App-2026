import React from 'react';
import {
  Container,
  Header,
  Icons,
  Loader,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, RefreshControl, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import { notification_list_icon } from '../../assets/icons';
import NotificationFunctional from './index.function';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Notification = () => {
  const {
    onRefresh,
    onEndReached,
    refreshing,
    isMore,
    notifications,
    list_loading,
  } = NotificationFunctional();
  const renderItem = ({ item }) => {
    const timeAgo = item?.createdAt ? dayjs(item.createdAt).fromNow() : '';
    return (
      <RowView alignItems={'flex-end'} direction={'column'} style={styles.grid}>
        <RowView gap={SIZES.padding2 + 2} alignItems={'flex-start'}>
          <Icons name={notification_list_icon} />
          <RowView
            alignItems={'flex-start'}
            style={styles.flex}
            direction={'column'}
          >
            <Text
              text={item.title}
              size={SIZES.h16}
              weight={TextWeights.medium}
              lineHeight={SIZES.padding}
              style={styles.txt}
            />

            <Text
              size={SIZES.h14}
              lineHeight={SIZES.padding}
              text={item.message}
            />
          </RowView>
        </RowView>

        {/* ✅ show relative time here */}
        <Text
          color={COLORS.keys_color}
          weight={TextWeights.medium}
          text={timeAgo}
        />
      </RowView>
    );
  };
  return (
    <Container>
      <Header color={COLORS.white} title={'Notifications'} rightIcon={null} />
      {list_loading && !isMore ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            contentContainerStyle={{ gap: SIZES.normal }}
            renderItem={renderItem}
            data={notifications}
            showsVerticalScrollIndicator={false}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={
              list_loading && isMore ? <Loader /> : <SizedBox />
            }
          />
        </View>
      )}
    </Container>
  );
};

export default Notification;
