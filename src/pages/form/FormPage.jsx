import React from 'react';
import { CardFormComponent } from '../../components/forms/CardFormComponent';
import { useCustomer } from '../../hooks/useCustomers';
import { LoadingComponent } from '../../components/LoadingComponent';

export const FormPage = () => {
  const token = localStorage.getItem('authToken');

  const { data, error, isLoading, isFetching } = useCustomer(token);
  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <section className="grid w-full p-5 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
          {data.companies?.map((form) => (
            <CardFormComponent form={form} key={form.idCompany} />
          ))}
        </section>
      )}
    </div>
  );
};
