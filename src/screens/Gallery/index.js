import React from 'react';
import {
  Container,
  Header,
  Icons,
  ListEmptyText,
  Loader,
  RowView,
  SizedBox,
} from '../../components';
import { FlatList, Modal, RefreshControl, View } from 'react-native';
import { styles } from './index.styles';
import { close_icon } from '../../assets/icons';
import ImageViewer from 'react-native-image-zoom-viewer';
import { SingleGalleryView } from './components';
import GalleryFunctional from './index.function';

const Gallery = () => {
  const {
    gallery,
    showModal,
    selectedIndex,
    onPressImage,
    setShowModal,
    onEndReached,
    hasMore,
    list_loading,
    refreshing,
    onRefresh,
  } = GalleryFunctional();

  return (
    <Container>
      <Header title={'Gallery'} rightIcon={null} />

      {list_loading && !hasMore ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            keyExtractor={item => item?.id}
            ListEmptyComponent={<ListEmptyText text={'No Images found'} />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={
              list_loading && hasMore ? (
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
            url: item.media || item?.image,
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
