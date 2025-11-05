import { useMemo } from 'react';

export default () => {

  const daysLeft = useMemo(() => {
    const today = new Date();
    const eventDate = new Date(2025, 11, 2);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }, []);

  return {
    daysLeft,
  };
};
