import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, speakers } = useSelector(state => state.main);

  return {
    main_loading,
    speakers,
  };
};
