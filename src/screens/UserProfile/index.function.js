import { useDispatch, useSelector } from 'react-redux';
import { getSingleUserDetails } from '../../redux/actions/main-action';
import { useEffect } from 'react';

export default ({ participants }) => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.constant);
  const { single_user, main_loading } = useSelector(state => state.main);
  const userID = participants?.filter(item => item !== user?._id)?.[0];

  useEffect(() => {
    dispatch(getSingleUserDetails(userID));
  }, []);

  return {
    user,
    main_loading,
    single_user,
  };
};
