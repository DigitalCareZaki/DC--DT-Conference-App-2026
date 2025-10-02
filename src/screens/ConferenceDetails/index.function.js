import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, single_conference } = useSelector(state => state.main);

  return {
    main_loading,
    single_conference,
  };
};
