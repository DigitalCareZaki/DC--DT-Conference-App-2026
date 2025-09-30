import React, { useState } from 'react';
import { Container, Header, Icons, ImageView, RowView, SizedBox } from '../../components';
import { FlatList, Modal, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import FastImage from 'react-native-fast-image';
import { gallery_images } from '../../config';
import { close_icon } from '../../assets/icons';
import ImageViewer from 'react-native-image-zoom-viewer';
import { SingleGalleryView } from "./components"

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPressImage = index => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  return (
    <Container>
      <Header title={'Gallery'} rightIcon={null} />

      <View style={styles.main_view}>
        <FlatList
          keyExtractor={item => item?.id}
          ListFooterComponent={<SizedBox />}
          data={gallery_images}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.list}
          renderItem={({ item, index }) => <SingleGalleryView onPress={() => onPressImage(index)} item={item} />}
        />
      </View>

      <Modal transparent visible={showModal}>
        <ImageViewer
          imageUrls={gallery_images.map(item => ({
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
