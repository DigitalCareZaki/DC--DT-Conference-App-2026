import React from 'react';
import {
  Container,
  Header,
  ListEmptyText,
  Loader,
  LoaderModal,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, RefreshControl, SectionList, View } from 'react-native';
import { styles } from './index.styles';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { SingleSpeakerView } from './components';
import SpeakerFunctional from './index.function';
import { searchArray } from '../../utils/functions';

const Speakers = () => {
  const {
    list_loading,
    data,
    search,
    setSearch,
    onRefresh,
    refreshing
  } = SpeakerFunctional();

  return (
    <Container>
      <Header title={'Speakers'} isMenu />

      <View style={styles.main_view}>

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={'Search by name, specialty, institute'} />

        {list_loading ? (
          <Loader />
        ) : (
          <SectionList
            sections={data}
            keyExtractor={(item, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderSectionFooter={({ section }) => (
              <FlatList
                data={search ? searchArray(section?.data, search) : section?.data}
                numColumns={2}
                ListEmptyComponent={<ListEmptyText text={`No Speaker Found`} />}
                keyExtractor={(item, index) => index?.toString()}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                scrollEnabled={false}
                ListHeaderComponent={
                  <Text
                    text={section?.title}
                    size={SIZES.h16}
                    weight={TextWeights.medium}
                    mt={SIZES.padding2}
                  />
                }
                renderItem={({ item, index }) => (
                  <SingleSpeakerView item={item} />
                )}
              />
            )}
            renderItem={() => null}
          />
        )}
      </View>
    </Container>
  );
};

export default Speakers;
