import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, speakers } = useSelector(state => state.main);

  const nationalSpeakers = speakers?.filter(
    item => item?.speakerType === 'National',
  );

  const internationalSpeakers = speakers?.filter(
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
