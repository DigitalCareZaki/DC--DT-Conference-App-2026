import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, conferences } = useSelector(state => state.main);

  return {
    main_loading,
    conferences,
  };
};
