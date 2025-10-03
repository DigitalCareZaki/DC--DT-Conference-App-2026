import { useDispatch, useSelector } from 'react-redux';
import { updateLinks } from '../../redux/actions/main-action';
import { setUser } from '../../redux/slices/auth-slice';

export default () => {
  const { main_loading } = useSelector(state => state.main);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onPressSubmit = values => {
    dispatch(
      updateLinks(values, res => {
        dispatch(setUser(res?.data));
      }),
    );
  };
  return {
    main_loading,
    onPressSubmit,
    user,
  };
};
