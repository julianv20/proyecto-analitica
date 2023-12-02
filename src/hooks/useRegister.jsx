import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/axios';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const authRegister = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await api.post('/auth/register/agente', userData);
      setData(response.data);
      console.log(response);
      localStorage.setItem('authToken', JSON.stringify(response.data.token));
      navigate('/');
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
