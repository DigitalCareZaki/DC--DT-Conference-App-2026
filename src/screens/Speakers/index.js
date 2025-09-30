import React from 'react';
import {
  Button,
  Card,
  Container,
  Header,
  ImageView,
  RowView,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, SectionList, View } from 'react-native';
import { styles } from './index.styles';
import { SIZES } from '../../constants';
import { speakers_array, TextWeights } from '../../config';
import { SingleSpeakerView } from "./components"

const Speakers = () => {

  return (
    <Container>
      <Header title={'Speakers'} isMenu />

      <View style={styles.main_view}>

        <SearchBar placeholder={'Search by name, specialty, institute'} />

        <SectionList
          sections={speakers_array}
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
              data={section.data}
              numColumns={2}
              renderItem={({ item, index }) => <SingleSpeakerView item={item} />}
              keyExtractor={(item, index) => index?.toString()}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              scrollEnabled={false}
            />
          )}
          renderItem={() => null}
        />
      </View>
    </Container>
  );
};

export default Speakers;
