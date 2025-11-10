import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  const { main_loading } = useSelector(state => state.main);

  return {
    main_loading,
  };
};
