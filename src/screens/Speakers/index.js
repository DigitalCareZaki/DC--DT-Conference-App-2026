import React, { useCallback } from 'react';
import {
  Container,
  Header,
  LoaderModal,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, SectionList, View } from 'react-native';
import { styles } from './index.styles';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { SingleSpeakerView } from './components';
import SpeakerFunctional from './index.function';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getSpeakers } from '../../redux/actions/main-action';

const Speakers = () => {
  const dispatch = useDispatch();
  const { main_loading, data } = SpeakerFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getSpeakers());
    }, []),
  );

  return (
    <Container>
      <Header title={'Speakers'} isMenu />
      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <SearchBar placeholder={'Search by name, specialty, institute'} />

          <SectionList
            sections={data}
            keyExtractor={(item, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                text={title}
                size={SIZES.h16}
                weight={TextWeights.medium}
                mt={SIZES.padding2}
              />
            )}
            renderSectionFooter={({ section }) => (
              <FlatList
                data={section?.data}
                numColumns={2}
                renderItem={({ item, index }) => (
                  <SingleSpeakerView item={item} />
                )}
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
