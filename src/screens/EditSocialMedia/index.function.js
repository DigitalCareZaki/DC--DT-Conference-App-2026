import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/main-action';
import { setUser } from '../../redux/slices/constant-slice';

export default () => {
  const dispatch = useDispatch();

  const { main_loading } = useSelector(state => state.main);
  const { user } = useSelector(state => state.constant);

  const onPressSubmit = values => {
    dispatch(updateUser(values));
  };
  return {
    main_loading,
    onPressSubmit,
    user,
  };
};
