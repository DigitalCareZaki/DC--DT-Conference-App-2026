import { useDispatch, useSelector } from 'react-redux';
import { updateLinks } from '../../redux/actions/main-action';
import { setUser } from '../../redux/slices/constant-slice';

export default () => {

  const { main_loading } = useSelector(state => state.main);
  const { user } = useSelector(state => state.constant);

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
