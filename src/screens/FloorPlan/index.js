import React from 'react';
import { Button, Container, Header, SizedBox } from '../../components';
import { View } from 'react-native';
import { styles } from './index.styles';
import FloorPlanFunctional from './index.function';
import { images, SIZES } from '../../constants';
import { maps } from '../../config';
import ImageView from '../ImageView';
import { navigate } from '../../navigation/service';

const FloorPlan = () => {
  const {} = FloorPlanFunctional();

  return (
    <Container>
      <Header title={'Floor Plan'} rightIcon={null} />

      <View style={styles.main_view}>
        {maps?.map(item => (
          <>
            <Button
              buttonText={item.title}
              onPress={() => navigate('ImageView', { image: images.hall_1 })}
            />
            <SizedBox height={SIZES.normal} />
          </>
        ))}
      </View>
    </Container>
  );
};

export default FloorPlan;
