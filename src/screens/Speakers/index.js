import React from 'react';
import {
  Container,
  Header,
  ListEmptyText,
  Loader,
  SearchBar,
  SizedBox,
} from '../../components';
import { FlatList, RefreshControl, View } from 'react-native';
import { styles } from './index.styles';
import { SingleSpeakerView } from './components';
import SpeakerFunctional from './index.function';
import { searchArray } from '../../utils/functions';
import { SIZES } from '../../constants';

const Speakers = () => {
  const { list_loading, search, setSearch, onRefresh, refreshing, speakers } =
    SpeakerFunctional();

  return (
    <Container isTab={true}>
      <Header title={'Speakers'} isMenu />

      <View style={styles.main_view}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={'Search by name, specialty, institute'}
        />

        {list_loading ? (
          <Loader />
        ) : (
          <FlatList
            data={search ? searchArray(speakers, search) : speakers}
            ListEmptyComponent={<ListEmptyText text={`No Speaker Found`} />}
            keyExtractor={(item, index) => index?.toString()}
            renderItem={({ item, index }) => <SingleSpeakerView item={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<SizedBox height={SIZES.padding2} />}
            ListFooterComponent={<SizedBox />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </Container>
  );
};

export default Speakers;
