import { FlatList, View } from 'react-native';
import React, { useCallback } from 'react';
import {
  Cards,
  Container,
  Header,
  LoaderModal,
  SizedBox,
} from '../../components';
import { navigate } from '../../navigation/service';
import { styles } from './index.styles';
import { useFocusEffect } from '@react-navigation/native';
import { getWorkshops } from '../../redux/actions/main-action';
import WorkFunctional from './index.function';

const WorkSop = () => {
  const { main_loading, workshops, dispatch, onPressHeart } = WorkFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getWorkshops());
    }, []),
  );

  return (
    <Container>
      <Header title={'Workshop'} rightIcon={null} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            data={workshops}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Cards
                isWorkshop
                item={item}
                onPressHeart={() => onPressHeart(item)}
                onPress={() => navigate('WorkShopDetails', { id: item?._id })}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
          />
        </View>
      )}
    </Container>
  );
};

export default WorkSop;
