import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, workshops } = useSelector(state => state.main);

  return {
    main_loading,
    workshops,
  };
};
