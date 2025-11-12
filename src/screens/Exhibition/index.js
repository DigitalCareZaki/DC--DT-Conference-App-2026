import React from 'react';
import {
  Button,
  Container,
  Header,
  ImageView,
  ListEmptyText,
  Loader,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import {
  FlatList,
  Linking,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { signup_steps, TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import ExhibitionCard from './component/ExhibitionCard';
import ExhibitionFunctional from './index.function';
import { searchArray } from '../../utils/functions';
import { isIOS } from '../../constants/theme';

const Exhibition = () => {
  const {
    exhibition,
    onEndReached,
    total_item,
    isMore,
    refeshing,
    list_loading,
    onRefresh,
    search,
    setSearch,
    savePdf,
  } = ExhibitionFunctional();

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibition'} />

      <View style={styles.main_view}>
        <SearchBar
          placeholder={'Search by name, industry category, city...'}
          value={search}
          onChangeText={setSearch}
        />

        <Text
          text={`${4} Exhibitors Participating`}
          size={SIZES.h16}
          weight={TextWeights.medium}
          mt={SIZES.padding2}
          mb={SIZES.padding2}
        />

        {list_loading && !isMore ? (
          <Loader />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ListEmptyText text={'No Exhibition found'} />}
            refreshControl={
              <RefreshControl refreshing={refeshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={
              <>
                {list_loading && isMore ? (
                  <Loader style={styles.loader} />
                ) : (
                  <SizedBox />
                )}

                <SizedBox />
              </>
            }
            renderItem={({ item }) => <ExhibitionCard item={item} />}
            data={search ? searchArray(signup_steps, search) : signup_steps}
            keyExtractor={item => item?._id?.toString()}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>

      <SizedBox height={SIZES.padding2} />

      <Button
        style={styles.btn}
        buttonText={'Download List in PDF'}
        onPress={() => savePdf()}
      />
      <SizedBox />
    </Container>
  );
};

export default Exhibition;
