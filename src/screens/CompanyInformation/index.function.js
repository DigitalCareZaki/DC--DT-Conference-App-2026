import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/main-action';
import { resetNavigationStack } from '../../navigation/service';

export default () => {
  const dispatch = useDispatch();

  const { main_post_loading } = useSelector(state => state.main);

  const onSubmit = val => {
    const apiData = {
      companyName: val?.companyName,
      designation: val?.designation,
      displayName: val?.displayName,
    };

    dispatch(
      updateUser(apiData, () => {
        resetNavigationStack('DrawerNavigation');
      }),
    );
  };

  return {
    onSubmit,
    main_post_loading,
  };
};
