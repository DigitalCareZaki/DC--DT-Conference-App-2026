import React from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  RowView,
  SizedBox,
} from '../../components';
import { Modal, View } from 'react-native';
import { styles } from './index.styles';
import FloorPlanFunctional from './index.function';
import { COLORS, SIZES } from '../../constants';
import { hallMapList, TextWeights } from '../../config';
import ImageViewer from 'react-native-image-zoom-viewer';
import { close_icon, zoom_icon } from '../../assets/icons';

const FloorPlan = () => {
  const { showModal, setShowModal, setHallImg, hallImg, onPressDownload } =
    FloorPlanFunctional();

  return (
    <Container>
      <Header title={'Floor Plan'} rightIcon={null} />

      <View style={styles.main_view}>
        {hallMapList?.map(item => (
          <>
            <Button
              buttonText={item.title}
              onPress={() => {
                setShowModal(true);
                setHallImg(item);
              }}
            />
            <SizedBox height={SIZES.normal} />
          </>
        ))}
      </View>

      <Modal transparent visible={showModal}>
        <View style={styles.modal_view}>
          <ImageViewer
            imageUrls={[
              {
                url: hallImg?.url,
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
            onPress={() => onPressDownload(hallImg?.url)}
          />
          <SizedBox />
        </View>
      </Modal>
    </Container>
  );
};

export default FloorPlan;
