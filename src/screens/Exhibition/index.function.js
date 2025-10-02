import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, exhibition } = useSelector(state => state.main);

  return {
    main_loading,
    exhibition,
  };
};
