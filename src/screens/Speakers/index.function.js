import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/actions/main-action';

export default () => {
  const dispatch = useDispatch();
  const { main_loading, speakers } = useSelector(state => state.main);

  useEffect(() => {
    dispatch(getSpeakers());
  }, []);

  const nationalSpeakers = (speakers ?? []).filter(
    item => item?.speakerType === 'National',
  );

  const internationalSpeakers = (speakers ?? []).filter(
    item => item?.speakerType === 'International',
  );
  const data = [
    {
      title: 'International Speakers',
      data: internationalSpeakers,
    },
    {
      title: 'National Speakers',
      data: nationalSpeakers,
    },
  ];
  return {
    data,
    main_loading,
    speakers,
  };
};
