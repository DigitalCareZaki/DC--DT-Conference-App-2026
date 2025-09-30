import React from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  RowView,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import { COLORS, SIZES } from '../../constants';
import { agendaArr, TextWeights } from '../../config';
import { heart_icon } from '../../assets/icons';

const MyAgenda = () => {
  const renderItem = ({ item }) => (
    <RowView alignItems={'flex-start'} direction={'column'} style={styles.grid}>
      <RowView style={styles.width} justifyContent={'space-between'}>
        <Text
          style={styles.flex}
          color={COLORS.text_aqua_color}
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={item.title}
          lineHeight={SIZES.padding}
        />
        <Icons name={heart_icon} />
      </RowView>

      <Text
        mt={SIZES.padding2 + 4}
        lineHeight={SIZES.padding2 + 4}
        text={item.description}
      />
      <Text
        text={
          <>
            <Text text={'Date:'} color={COLORS.keys_color} />
            <Text text={item.date} lineHeight={20} />
          </>
        }
      />

      <Text
        text={
          <>
            <Text text={'Time:'} color={COLORS.keys_color} />
            <Text text={item.time} lineHeight={20} />
          </>
        }
      />

      <RowView justifyContent={'space-between'} style={styles.width}>
        <Text
          style={styles.flex}
          text={
            <>
              <Text text={'Venue:'} color={COLORS.keys_color} />
              <Text text={item.venue} lineHeight={20} />
            </>
          }
        />
        <Button
          buttonText={item.btnTxt}
          style={styles.btn}
          size={SIZES.h12}
          color={COLORS.placeholder_text_color}
          weight={TextWeights.regular}
        />
      </RowView>
    </RowView>
  );
  return (
    <Container>
      <Header title={'My Agenda'} color={COLORS.white} />
      <View style={styles.main_view}>
        <FlatList
          renderItem={renderItem}
          data={agendaArr}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default MyAgenda;
