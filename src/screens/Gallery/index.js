import React, { useRef, useState } from 'react';
import { Container, Header, Icons, ImageView, RowView } from '../../components';
import { FlatList, Modal, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import FastImage from 'react-native-fast-image';
import { galleryImgs } from '../../config';
import { close_icon } from '../../assets/icons';
import Zoom from 'react-native-zoom-reanimated';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef(null);

  const openModal = index => {
    setSelectedIndex(index);
    setShowModal(true);

    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index, animated: false });
    }, 0);
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

  const renderModalItem = ({ item }) => (
    <View style={styles.modalImageContainer}>
      <Zoom>
        <ImageView
          image={item.img}
          height={SIZES.padding * 15}
          width={SIZES.padding * 15}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Zoom>
    </View>
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
          <RowView
            onPress={() => setShowModal(false)}
            style={styles.iconContainer}
          >
            <Icons name={close_icon} style={styles.icon} />
          </RowView>

          <FlatList
            ref={flatListRef}
            data={galleryImgs}
            renderItem={renderModalItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            initialScrollIndex={selectedIndex}
            getItemLayout={(data, index) => ({
              length: SIZES.width,
              offset: index * SIZES.width,
              index,
            })}
          />
        </View>
      </Modal>
    </Container>
  );
};

export default Gallery;
