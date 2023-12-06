import { QueryClient, useQueryClient } from 'react-query';
import { FoldersComponents } from '../../components/FoldersComponents';
import { useCustomer } from '../../hooks/useCustomers';
import { LoadingComponent } from '../../components/LoadingComponent';

export const HomePage = () => {
  const token = localStorage.getItem('authToken');

  const { data, error, isLoading, isFetching } = useCustomer(token);
  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <main className="grid w-full p-5 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
          {data.companies?.map((customer, index) => (
            <FoldersComponents customer={customer} key={customer.idCompany} />
          ))}
        </main>
      )}
    </div>
  );
};
{
}
