import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getFavourites } from '../../redux/actions/main-action';

export default () => {
  const { auth_loading, all_users } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  return {
    dispatch,
    auth_loading,
    all_users,
  };
};
