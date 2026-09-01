import { View, FlatList, ScrollView, Modal } from 'react-native';
import React from 'react';
import {
  Button,
  Cards,
  Container,
  Header,
  Icons,
  ImageView,
  Loader,
  LoaderModal,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import SessionCard from './components/SessionCard';
import { styles } from './index.styles';
import ConferenceFunctional from './index.function';
import { useIsFocused } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { close_icon } from '../../assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ConferenceDetails = ({ route }) => {
  const id = route?.params?.id;
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const {
    detail_loading,
    conference_detail,
    onPressHeart,
    onPressRegister,
    saveImage,
    showImageModal,
    setShowImageModal,
  } = ConferenceFunctional({ id });

  return (
    <Container>
      <Header title={'Session Detail'} rightIcon={null} />
      {detail_loading && isFocused ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Cards
              isDetail={true}
              item={conference_detail}
              onPressHeart={() => onPressHeart(conference_detail)}
            />
            
            <SizedBox height={SIZES.padding2} />

            <ImageView
              url={conference_detail?.brochure}
              width={'100%'}
              height={200}
              radius={SIZES.padding2}
              resizeMode={FastImage.resizeMode.cover}
              onPress={() => setShowImageModal(true)}
            />

            {/* <Text
              text={'Program Sessions'}
              size={SIZES.h16}
              weight={TextWeights.medium}
              mt={SIZES.padding2}
            /> */}

            {/* <FlatList
              data={conference_detail?.sessions}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              ListFooterComponent={<SizedBox />}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <SessionCard item={item} />}
            /> */}
          </ScrollView>

          <SizedBox height={SIZES.padding2} />
          <Button buttonText={'Register Online'} onPress={onPressRegister} />

          <Button
            style={styles.download_btn}
            buttonText={'Download Brochure'}
            color={COLORS.white}
            onPress={() => saveImage(conference_detail?.brochure)}
          />
        </View>
      )}

      <Modal
        transparent
        visible={showImageModal}
        onRequestClose={() => setShowImageModal(false)}
      >
        <View
          style={[
            styles.image_modal_container,
            { paddingTop: insets.top, paddingBottom: insets.bottom },
          ]}
        >
          <RowView
            onPress={() => setShowImageModal(false)}
            style={styles.image_modal_icon_container}
          >
            <Icons name={close_icon} style={styles.image_modal_icon} />
          </RowView>

          <FastImage
            source={{ uri: conference_detail?.brochure }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image_modal_image}
          />
        </View>
      </Modal>
    </Container>
  );
};

export default ConferenceDetails;
