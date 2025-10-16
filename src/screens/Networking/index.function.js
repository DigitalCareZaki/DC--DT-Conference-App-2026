import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/actions/auth-action';
import { setAuthLoading } from '../../redux/slices/auth-slice';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.constant);

  const [search, setSearch] = useState(null);
  const [allUsers, setAllUsers] = useState(null);

  return {
    dispatch,
    search,
    setSearch,
    auth_loading,
    user,
    setAllUsers,
    allUsers,
  };
};
