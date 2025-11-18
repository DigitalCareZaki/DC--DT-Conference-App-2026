import { useMemo, useState } from 'react';
import { SIZES } from '../../constants';

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const daysLeft = useMemo(() => {
    const today = new Date();
    const eventDate = new Date(2025, 11, 2);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }, []);

  const onScroll = e => {
    const x = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(x / (SIZES.width * 0.87));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return {
    daysLeft,
    setActiveIndex,
    activeIndex,
    onScroll,
  };
};
