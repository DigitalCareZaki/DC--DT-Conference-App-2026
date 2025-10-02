import React from 'react';
import { Container, Header, Icons, RowView, Text } from '../../components';
import { FlatList, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { notification_array, TextWeights } from '../../config';
import { notification_list_icon } from '../../assets/icons';

const Notification = () => {
  const renderItem = ({ item }) => (
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
            text={item.description}
          />
        </RowView>
      </RowView>

      <Text
        color={COLORS.keys_color}
        weight={TextWeights.medium}
        text={item.time}
      />
    </RowView>
  );
  return (
    <Container>
      <Header color={COLORS.white} title={'Notifications'} />
      <View style={styles.main_view}>
        <FlatList
          contentContainerStyle={{ gap: SIZES.padding2 + 4 }}
          renderItem={renderItem}
          data={notification_array}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default Notification;
