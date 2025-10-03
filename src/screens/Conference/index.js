import { View, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import Container from '../../components/Container';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { Cards, Header, LoaderModal, SizedBox, Text } from '../../components';
import { styles } from './index.styles';
import { navigate } from '../../navigation/service';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addRemoveFav, getConferences } from '../../redux/actions/main-action';
import ConferenceFunctional from './index.function';

const Conference = () => {
  const { main_loading, conferences, onPressHeart, dispatch } =
    ConferenceFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getConferences());
    }, []),
  );

  return (
    <Container>
      <Header isMenu title={'Conferences'} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <Text
            text={`${conferences?.length} Conferences Available`}
            size={SIZES.h16}
            weight={TextWeights.medium}
            mt={SIZES.padding2}
          />

          <SizedBox height={SIZES.padding2} />

          <FlatList
            data={conferences}
            keyExtractor={item => item?.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            renderItem={({ item }) => (
              <Cards
                item={item}
                onPressHeart={() => onPressHeart(item)}
                onPress={() => navigate('ConferenceDetails', { id: item?._id })}
              />
            )}
          />
        </View>
      )}
    </Container>
  );
};

export default Conference;
