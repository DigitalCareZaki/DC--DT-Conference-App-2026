import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default () => {
  const { auth_loading } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.constant);

  const [search, setSearch] = useState(null);
  const [allUsers, setAllUsers] = useState(null);

  return {
    search,
    setSearch,
    auth_loading,
    user,
    setAllUsers,
    allUsers,
  };
};
