import { useQuery } from 'react-query';
import api from '../lib/axios';

const getReport = async (idReport, formattedDates) => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await api.post(
      `/report/get/data/${idReport}`,
      {
        formattedDates,
      },
      {
        headers: {
          token: token,
        },
      },
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const useReport = (idReport, formattedDates) => {
  const { data, error, isLoading, isFetching, refetch } = useQuery(
    ['report', idReport],
    () => getReport(idReport, formattedDates),
    {
      staleTime: 60000,
      refetchInterval: 120000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  };
};
