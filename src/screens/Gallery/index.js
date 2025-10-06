import React, { useCallback } from 'react';
import {
  Container,
  Header,
  Icons,
  Loader,
  LoaderModal,
  RowView,
  SizedBox,
} from '../../components';
import { FlatList, Modal, View } from 'react-native';
import { styles } from './index.styles';
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
    page,
    setHasMore,
    onEndReached,
    isLoading,
    hasMore,
  } = GalleryFunctional();

  useFocusEffect(
    useCallback(() => {
      const payload = {
        limit: 10,
        page: page,
      };
      dispatch(
        getGallery(payload, gallery, hasMore => {
          setHasMore(hasMore);
        }),
      );
    }, []),
  );

  return (
    <Container>
      <Header title={'Gallery'} rightIcon={null} />

      {main_loading && !isLoading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            keyExtractor={item => item?.id}
            ListFooterComponent={
              isLoading && hasMore ? (
                <Loader style={styles.loader} />
              ) : (
                <SizedBox />
              )
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
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
