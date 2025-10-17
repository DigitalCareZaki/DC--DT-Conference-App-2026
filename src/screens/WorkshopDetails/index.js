import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import {
  Button,
  Cards,
  Container,
  Header,
  LoaderModal,
  SizedBox,
  Text,
} from '../../components';
import ShopModules from './components/ShopModules';
import { TextWeights } from '../../config';
import { SIZES } from '../../constants';
import { styles } from './index.styles';
import WorkshopDetailFunctional from './index.function';
import { useIsFocused } from '@react-navigation/native';

const WorkshopDetails = ({ route }) => {
  const isFocused = useIsFocused();
  const { data } = route?.params;

  const { detail_loading, workshop_detail, onPressHeart, onPressRegister } =
    WorkshopDetailFunctional({ data });

  return (
    <Container>
      <Header title={'Workshop Detail'} rightIcon={null} />

      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Cards
            index={12}
            isWorkshop
            isDetail={true}
            item={workshop_detail}
            onPressHeart={() => onPressHeart(workshop_detail)}
          />

          <Text
            mt={SIZES.padding2}
            text={'Workshop Modules'}
            size={SIZES.h16}
            weight={TextWeights.medium}
          />

          <FlatList
            data={workshop_detail?.modules}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <ShopModules key={index?.toString()} item={item} />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
          />
        </ScrollView>

        <SizedBox height={SIZES.padding2} />

        {/* <Button
          buttonText={'Download Materials'}
          color={COLORS.white}
          style={styles.transparent_btn}
        /> */}

        <Button
          buttonText={'Register Online'}
          onPress={onPressRegister}
          style={styles.btn}
        />

        {/* <Button
          buttonText={'Ask Workshop Leader'}
          color={COLORS.white}
          style={styles.transparent_btn}
        /> */}

        <SizedBox height={SIZES.padding2} />

        <LoaderModal visible={detail_loading && isFocused} />
      </View>
    </Container>
  );
};

export default WorkshopDetails;
