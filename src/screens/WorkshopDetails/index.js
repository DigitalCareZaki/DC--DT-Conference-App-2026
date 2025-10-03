import { FlatList, ScrollView, View } from 'react-native';
import React, { useCallback } from 'react';
import {
  Button,
  Cards,
  Container,
  Header,
  LoaderModal,
  SizedBox,
  Text,
} from '../../components';
import ShopModules from './components/ShopModules';
import { TextWeights } from '../../config';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import WorkshopDetailFunctional from './index.function';
import { useFocusEffect } from '@react-navigation/native';
import { getWorkshopById } from '../../redux/actions/main-action';

const WorkshopDetails = ({ route }) => {
  const { id } = route?.params;
  const { main_loading, single_workshop, dispatch, onPressHeart } =
    WorkshopDetailFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getWorkshopById(id));
    }, []),
  );
  return (
    <Container>
      <Header title={'Workshop Detail'} rightIcon={null} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Cards
              isWorkshop
              isDetail={true}
              item={single_workshop}
              onPressHeart={() => onPressHeart(single_workshop)}
            />

            <Text
              mt={SIZES.padding2}
              text={'Workshop Modules'}
              size={SIZES.h16}
              weight={TextWeights.medium}
            />

            <FlatList
              data={single_workshop?.modules}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => <ShopModules item={item} />}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<SizedBox />}
            />
          </ScrollView>

          <SizedBox height={SIZES.padding2} />

          <Button
            buttonText={'Download Materials'}
            color={COLORS.white}
            style={styles.transparent_btn}
          />

          <Button buttonText={'Register Online'} style={styles.btn} />

          <Button
            buttonText={'Ask Workshop Leader'}
            color={COLORS.white}
            style={styles.transparent_btn}
          />

          <SizedBox height={SIZES.padding2} />
        </View>
      )}
    </Container>
  );
};

export default WorkshopDetails;
