import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getGallery } from '../../redux/actions/main-action';

export default () => {
  const { main_loading, gallery } = useSelector(state => state.main);

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPressImage = index => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const onEndReached = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const nextPage = page + 1;
    if (hasMore && gallery?.length > 0) {
      const payload = {
        limit: 10,
        page: nextPage,
      };
      dispatch(
        getGallery(payload, gallery, hasMore => {
          setHasMore(hasMore);
          setPage(nextPage);
          setIsLoading(false);
        }),
      );
    } else {
      setIsLoading(true);
    }
  };

  return {
    showModal,
    selectedIndex,
    onPressImage,
    main_loading,
    gallery,
    setShowModal,
    page,
    setPage,
    hasMore,
    setHasMore,
    onEndReached,
    isLoading,
  };
};
