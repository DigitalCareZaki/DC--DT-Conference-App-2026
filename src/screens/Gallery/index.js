import React, { useState } from 'react';
import { Container, Header, Icons, ImageView, RowView } from '../../components';
import { FlatList, Modal, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import FastImage from 'react-native-fast-image';
import { galleryImgs } from '../../config';
import { close_icon } from '../../assets/icons';
import ImageViewer from 'react-native-image-zoom-viewer';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = index => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const renderItem = ({ item, index }) => (
    <ImageView
      onPress={() => openModal(index)}
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
        <ImageViewer
          imageUrls={galleryImgs.map(item => ({
            props: {
              source: item.img,
              style: {
                width: SIZES.padding * 20,
                height: SIZES.padding * 20,
                resizeMode: 'cover',
              },
            },
          }))}
          renderHeader={() => (
            <RowView
              onPress={() => setShowModal(false)}
              style={styles.iconContainer}
            >
              <Icons name={close_icon} style={styles.icon} />
            </RowView>
          )}
          index={selectedIndex}
          enableSwipeDown
          onSwipeDown={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          saveToLocalByLongPress={false}
        />
      </Modal>
    </Container>
  );
};

export default Gallery;
