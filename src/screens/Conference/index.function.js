import { useDispatch, useSelector } from 'react-redux';
import {
  addRemoveFav,
  getConferences,
  getFavourites,
} from '../../redux/actions/main-action';
import { useState } from 'react';
import { navigate } from '../../navigation/service';

export default () => {
  const { main_loading, conferences, favourites } = useSelector(
    state => state.main,
  );
  const { user, total_item } = useSelector(state => state.auth);
  const [confPage, setConfPage] = useState(1);
  const [favPage, setFavPage] = useState(1);
  const [confHasMore, setConfHasMore] = useState(true);
  const [favHasMore, setFavHasMore] = useState(true);
  const [confLoading, setConfLoading] = useState(false);

  const dispatch = useDispatch();

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }
    const favpayload = {
      limit: 10,
      page: favPage,
    };
    const apiData = {
      favoriteId: item?._id,
      type: 'conference',
    };
    dispatch(
      addRemoveFav(apiData, () => {
        dispatch(getFavourites(favpayload, favourites, () => {}));
      }),
    );
  };

  const onEndReached = () => {
    if (confLoading) return;

    setConfLoading(true);

    // Conferences pagination
    if (confHasMore && conferences.length > 0) {
      const nextPage = confPage + 1;
      const payload = {
        limit: 10,
        page: nextPage,
      };

      dispatch(
        getConferences(payload, conferences, hasMore => {
          setConfHasMore(hasMore);
          setConfPage(nextPage);
          setConfLoading(false);
        }),
      );
    }

    // Favourites pagination
    if (favHasMore && favourites?.length > 0) {
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
    conferences,
    onPressHeart,
    dispatch,
    onEndReached,
    // isLoading,
    total_item,
    favourites,
    setConfHasMore,
    setFavHasMore,
    confHasMore,
    confLoading,
  };
};
