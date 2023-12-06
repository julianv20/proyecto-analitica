import { useState } from 'react';
import api from '../lib/axios';
import { alertSuccess } from '../helpers/alert';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const authRegister = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await api.post('/auth/register/agente', userData);
      setData(response.data);
      if (response.status === 200) {
        alertSuccess('Usuario creado correctamente');
      }
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    authRegister,
  };
};
