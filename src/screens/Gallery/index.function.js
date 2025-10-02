import { useState } from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const { main_loading, gallery } = useSelector(state => state.main);

  const [showModal, setShowModal] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPressImage = index => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  return {
    showModal,
    selectedIndex,
    onPressImage,
    main_loading,
    gallery,
    setShowModal,
  };
};
