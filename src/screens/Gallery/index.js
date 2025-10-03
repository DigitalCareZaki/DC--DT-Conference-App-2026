import React, { useCallback } from 'react';
import {
  Container,
  Header,
  Icons,
  LoaderModal,
  RowView,
  SizedBox,
} from '../../components';
import { FlatList, Image, Modal, View } from 'react-native';
import { SIZES } from '../../constants';
import { styles } from './index.styles';
import { gallery_images } from '../../config';
import { close_icon } from '../../assets/icons';
import ImageViewer from 'react-native-image-zoom-viewer';
import { SingleGalleryView } from './components';
import GalleryFunctional from './index.function';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getGallery } from '../../redux/actions/main-action';

const Gallery = () => {
  const dispatch = useDispatch();
  const {
    main_loading,
    gallery,
    showModal,
    selectedIndex,
    onPressImage,
    setShowModal,
  } = GalleryFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getGallery());
    }, []),
  );
  return (
    <Container>
      <Header title={'Gallery'} rightIcon={null} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            keyExtractor={item => item?.id}
            ListFooterComponent={<SizedBox />}
            data={gallery}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.list}
            renderItem={({ item, index }) => (
              <SingleGalleryView
                onPress={() => onPressImage(index)}
                item={item}
              />
            )}
          />
        </View>
      )}

      <Modal transparent visible={showModal}>
        <ImageViewer
          imageUrls={gallery?.map(item => ({
            url: item.image,
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
