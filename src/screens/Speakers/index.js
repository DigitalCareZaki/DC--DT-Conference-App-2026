import React from 'react';
import {
  Container,
  Header,
  ListEmptyText,
  Loader,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, SectionList, View } from 'react-native';
import { styles } from './index.styles';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { SingleSpeakerView } from './components';
import SpeakerFunctional from './index.function';
import { useDispatch } from 'react-redux';

const Speakers = () => {
  const { main_loading, data } = SpeakerFunctional();

  return (
    <Container>
      <Header title={'Speakers'} isMenu />
      {main_loading ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <SearchBar placeholder={'Search by name, specialty, institute'} />

          <SectionList
            sections={data}
            keyExtractor={(item, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            renderSectionFooter={({ section }) => (
              <FlatList
                data={section?.data}
                numColumns={2}
                renderItem={({ item, index }) => (
                  <SingleSpeakerView item={item} />
                )}
                ListEmptyComponent={
                  <ListEmptyText text={`No ${section.title} Found`} />
                }
                ListHeaderComponent={
                  <>
                    <Text
                      text={section?.title}
                      size={SIZES.h16}
                      weight={TextWeights.medium}
                      mt={SIZES.padding2}
                    />
                  </>
                }
                keyExtractor={(item, index) => index?.toString()}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                scrollEnabled={false}
              />
            )}
            renderItem={() => null}
          />
        </View>
      )}
    </Container>
  );
};

export default Speakers;
