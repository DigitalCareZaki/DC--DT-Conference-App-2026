import { useEffect, useMemo, useState } from 'react';
import { SIZES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../redux/actions/main-action';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, banners } = useSelector(state => state.main);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(getBanners());
  }, []);

  const onScroll = e => {
    const x = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(x / (SIZES.width * 0.87));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return {
    activeIndex,
    onScroll,
    banners,
  };
};
