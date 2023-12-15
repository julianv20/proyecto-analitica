import { handleLogout } from '../helpers/handleLogout';
import api from '../lib/axios';
import { useQuery } from 'react-query';

const getHome = async (token) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await api.get(`/home/get/customer`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.data.error === 'Token no válido') {
      handleLogout();
    }
    throw error.response.data.error;
  }
};

export const useCustomer = (HomeData) => {
  const { data, error, isLoading, isFetching } = useQuery(
    'customers',
    () => getHome(HomeData),
    {
      staleTime: 60000,
      refetchInterval: 300000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return {
    data,
    error,
    isLoading,
    isFetching,
  };
};
