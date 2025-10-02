import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, single_workshop } = useSelector(state => state.main);

  return {
    main_loading,
    single_workshop,
  };
};
