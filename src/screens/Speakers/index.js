import React from 'react';
import {
  Container,
  Header,
  ListEmptyText,
  Loader,
  RowView,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { styles } from './index.styles';
import { COLORS, SIZES } from '../../constants';
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
    refreshing,
    handleTabChange,
    activeTab,
  } = SpeakerFunctional();

  return (
    <Container>
      <Header title={'Speakers'} isMenu />

      <View style={styles.main_view}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={'Search by name, specialty, institute'}
        />

        <SizedBox />
        <RowView
          alignItems={'center'}
          justifyContent={'space-between'}
          style={styles.tabContainer}
        >
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  activeTab === 'internationals'
                    ? COLORS.primary
                    : COLORS.white,
              },
            ]}
            onPress={() => handleTabChange('internationals')}
          >
            <Text
              size={SIZES.h14}
              weight={TextWeights.medium}
              text={'Internationals'}
              color={
                activeTab === 'internationals' ? COLORS.white : COLORS.primary
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  activeTab === 'nationals' ? COLORS.primary : COLORS.white,
              },
            ]}
            onPress={() => handleTabChange('nationals')}
          >
            <Text
              size={SIZES.h14}
              weight={TextWeights.medium}
              text={'Nationals'}
              color={activeTab === 'nationals' ? COLORS.white : COLORS.primary}
            />
          </TouchableOpacity>
        </RowView>

        {list_loading ? (
          <Loader />
        ) : (
          <FlatList
            data={search ? searchArray(data, search) : data}
            ListEmptyComponent={<ListEmptyText text={`No Speaker Found`} />}
            keyExtractor={(item, index) => index?.toString()}
            renderItem={({ item, index }) => <SingleSpeakerView item={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<SizedBox />}
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
