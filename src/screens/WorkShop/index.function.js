import { useDispatch, useSelector } from 'react-redux';
import {
  addRemoveFav,
  getFavourites,
  getWorkshops,
} from '../../redux/actions/main-action';
import { useState } from 'react';

export default () => {
  const { main_loading, workshops, favourites } = useSelector(
    state => state.main,
  );

  console.log('favourites', favourites);
  const { user } = useSelector(state => state.auth);
  const [workShopPage, setWorkShopPage] = useState(1);
  const [favPage, setFavPage] = useState(1);
  const [hasMoreWorkshops, setHasMoreWorkshop] = useState(true);
  const [favHasMore, setFavHasMore] = useState(true);
  const [workshopLoading, setWorkshopLoading] = useState(false);

  const dispatch = useDispatch();

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }
    const apiData = {
      favoriteId: item?._id,
      type: 'workshop',
    };
    const favpayload = {
      limit: 10,
      page: favPage,
    };

    dispatch(
      addRemoveFav(apiData, () => {
        dispatch(getFavourites(favpayload, favourites, () => {}));
      }),
    );
  };

  const onEndReached = () => {
    if (workshopLoading) return;

    setWorkshopLoading(true);

    // WorkShop pagination
    if (hasMoreWorkshops && workshops?.length > 0) {
      const nextPage = workShopPage + 1;
      const payload = {
        limit: 10,
        page: nextPage,
      };

      dispatch(
        getWorkshops(payload, workshops, hasMore => {
          setHasMoreWorkshop(hasMore);
          setWorkShopPage(nextPage);
          setWorkshopLoading(false);
        }),
      );
    }

    // Favourites pagination
    if (favHasMore && favourites.length > 0) {
      const nextPage = favPage + 1;
      const favPayload = {
        limit: 10,
        page: nextPage,
      };

      dispatch(
        getFavourites(favPayload, favourites, hasMore => {
          setFavHasMore(hasMore);
          setFavPage(nextPage);
        }),
      );
    }
  };

  return {
    main_loading,
    workshops,
    dispatch,
    onPressHeart,
    onEndReached,
    setHasMoreWorkshop,
    setFavHasMore,
    hasMoreWorkshops,
    workshopLoading,
    favourites,
  };
};
