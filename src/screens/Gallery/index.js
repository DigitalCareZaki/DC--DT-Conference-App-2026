import React, { useState } from 'react';
import { Container, Header, Icons, ImageView, RowView } from '../../components';
import { FlatList, Modal, View } from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import FastImage from 'react-native-fast-image';
import { galleryImgs } from '../../config';
import { close_icon } from '../../assets/icons';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const renderItem = ({ item }) => (
    <ImageView
      onPress={() => setShowModal(true)}
      image={item.img}
      height={SIZES.padding * 8}
      width={SIZES.padding * 8}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
  return (
    <Container>
      <Header title={'Gallery'} color={COLORS.white} />

      <View style={styles.main_view}>
        <FlatList
          keyExtractor={item => item?.id?.toString()}
          renderItem={renderItem}
          data={galleryImgs}
          numColumns={2}
          contentContainerStyle={styles.flatlist}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal transparent visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <RowView onPress={() => setShowModal(false)}>
              <Icons name={close_icon} style={styles.icon} />
            </RowView>

            <ImageView
              image={images.gallery_img_1}
              height={SIZES.padding * 15}
              width={SIZES.padding * 15}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Gallery;
