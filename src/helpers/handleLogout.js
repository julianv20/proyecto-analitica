import { useQueryClient } from 'react-query';

export const handleLogout = () => {
  localStorage.removeItem('authToken');
  const queryClient = useQueryClient;
  queryClient.clear();
};
