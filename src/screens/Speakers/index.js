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
import { COLORS, images, SIZES } from '../../constants';
import { SpeakerArr, TextWeights } from '../../config';
import { menu_icon, notification_icon } from '../../assets/icons';
import FastImage from 'react-native-fast-image';

const Speakers = () => {
  const renderItem = ({ item }) => (
    <RowView style={styles.grid} direction={'column'}>
      <ImageView
        width={SIZES.padding * 6}
        height={SIZES.padding * 6}
        image={item?.img}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text
        text={item.name}
        weight={TextWeights.medium}
        size={SIZES.h16}
        mt={SIZES.padding2 + 4}
        align={'center'}
      />
      <Button
        buttonText={item.occupation}
        style={styles.btn}
        color={COLORS.placeholder_text_color}
        size={SIZES.h12}
        weight={TextWeights.regular}
      />

      <Text
        mt={12}
        text={item.university}
        weight={TextWeights.medium}
        size={SIZES.h12}
        color={COLORS.text_aqua_color}
      />

      <Text
        mt={SIZES.padding2}
        align={'center'}
        lineHeight={SIZES.padding2 + 4}
        text={item.about}
        numberOfLines={3}
      />
    </RowView>
  );

  return (
    <Container>
      <Header
        title={'Speakers'}
        color={COLORS.white}
        leftIcon={menu_icon}
        rightIcon={notification_icon}
      />
      <View style={styles.main_view}>
        <SearchBar
          placeholder={'Search by name, specialty, institute'}
          isLeft={false}
          isRight
        />

        <SizedBox />
        <SectionList
          sections={SpeakerArr}
          keyExtractor={(item, index) => item.name + index}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              text={title}
              size={SIZES.h18}
              weight={TextWeights.medium}
              mt={SIZES.padding}
              mb={SIZES.padding}
            />
          )}
          renderSectionFooter={({ section }) => (
            <FlatList
              data={section.data}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.name + index}
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
