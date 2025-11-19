import React from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import ExhibitionDetailFunctional from './index.function';
import { SingleExhibitorView } from './components';
import { navigate } from '../../navigation/service';
import ImageViewer from 'react-native-image-zoom-viewer';
import { close_icon, zoom_icon } from '../../assets/icons';

const ExhibitorDetail = ({ route }) => {
  const item = route?.params?.item;
  const {
    handleOpenMaps,
    onPressHeart,
    onPressLink,
    showModal,
    setShowModal,
    onPressDownload,
  } = ExhibitionDetailFunctional(item);

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibitor Detail'} />

      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SingleExhibitorView
            item={item}
            onPressHeart={onPressHeart}
            onPressLink={onPressLink}
          />

          {item?.location ? (
            <Text
              mt={SIZES.padding2}
              text={'Hall Map'}
              size={SIZES.h18}
              weight={TextWeights.medium}
            />
          ) : null}

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={
              () => setShowModal(true)
              // item?.location && navigate('ImageView', { image: item?.location })
            }
          >
            <FastImage
              style={styles.map_view}
              resizeMode={FastImage.resizeMode.cover}
              source={{ uri: item?.location }}
            >
              {/* <Text
                weight={TextWeights.medium}
                size={SIZES.h14}
                lineHeight={SIZES.padding}
                ml={SIZES.padding2}
                mr={SIZES.padding2}
                mb={SIZES.padding2}
                text={
                  'Ecommerce Gateway Pakistan (Pvt) Ltd.8, Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, off: Shaheed-e-Millat Road, Karachi-74000 Pakistan'
                }
              /> */}
            </FastImage>
          </TouchableOpacity>

          <SizedBox />
        </ScrollView>
      </View>

      <Modal transparent visible={showModal}>
        <View style={styles.modal_view}>
          <ImageViewer
            imageUrls={[
              {
                url: item?.location,
              },
            ]}
            renderHeader={() => (
              <RowView
                onPress={() => setShowModal(false)}
                style={styles.iconContainer}
              >
                <Icons name={close_icon} style={styles.icon} />
              </RowView>
            )}
            enableSwipeDown
            onSwipeDown={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
            saveToLocalByLongPress={false}
            index={0}
            renderIndicator={() => null}
          />
          <Button
            buttonText={'Pinch to Zoom'}
            style={styles.zoom_btn}
            color={COLORS.text_gray_color}
            weight={TextWeights.regular}
            icon={zoom_icon}
            isDisabled={true}
          />

          <Button
            buttonText={'Download Hall Map'}
            style={styles.btn}
            onPress={() => onPressDownload(item?.location)}
          />
          <SizedBox />
        </View>
      </Modal>
    </Container>
  );
};

export default ExhibitorDetail;
