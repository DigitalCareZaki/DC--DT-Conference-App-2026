import React from 'react';
import { Button, RowView, Text } from '../../../components';
import { TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { TextWeights } from '../../../config';
import { navigate } from '../../../navigation/service';
import { styles } from '../index.styles';
const ExhibitionCard = ({ item, isFav = false }) => {
  return (
    <TouchableOpacity style={styles.grid}>
      <RowView justifyContent={'space-between'}>
        <Text
          size={SIZES.h16}
          weight={TextWeights.medium}
          text={isFav ? item?.favoriteId?.title : item.title}
        />
        <Button
          buttonText={isFav ? item?.favoriteId?.booth : item?.booth}
          style={styles.btn}
          color={COLORS.placeholder_text_color}
          size={SIZES.h12}
          weight={TextWeights.regular}
        />
      </RowView>
      <Text
        mt={SIZES.padding2 + 4}
        text={
          <>
            <Text
              size={SIZES.h12}
              weight={TextWeights.medium}
              color={COLORS.light_blue_color}
              text={isFav ? item?.favoriteId?.address : item.address}
            />
            <Text text={' - '} color={COLORS.keys_color} />
            <Text
              size={SIZES.h12}
              weight={TextWeights.medium}
              color={COLORS.light_blue_color}
              text={isFav ? item?.favoriteId?.industry : item.industry}
            />
          </>
        }
      />

      <Text
        mt={SIZES.padding2 - 4}
        text={
          <>
            <Text text={'Venue:'} color={COLORS.keys_color} />
            <Text text={isFav ? item?.favoriteId?.venue : item.venue} />
          </>
        }
      ></Text>

      <Text
        size={SIZES.h14}
        mt={SIZES.padding2 + 4}
        text={isFav ? item?.favoriteId?.description : item.description}
        lineHeight={SIZES.padding2 + 4}
      />
    </TouchableOpacity>
  );
};

export default ExhibitionCard;
