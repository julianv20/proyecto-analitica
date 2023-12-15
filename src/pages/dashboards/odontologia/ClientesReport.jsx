import React from 'react';
import { UseGetDate } from '../../../hooks/UseGetDate';
import { useReport } from '../../../hooks/useReport';
import { useParams } from 'react-router-dom';

export const ClientesReport = () => {
  const { id: idReport } = useParams();
  console.log(idReport);
  const { dateRange, formattedDates, handleDateChange } = UseGetDate();

  const { data, error, isLoading, isFetching, refetch } = useReport(
    idReport,
    formattedDates,
  );
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
    console.log(formattedDates);
  };

  return <div>ClientesReport</div>;
};
