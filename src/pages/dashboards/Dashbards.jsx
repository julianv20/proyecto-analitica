import { useQueryClient } from 'react-query';
import { GraphsComponents } from '../../components/analitica/GraphsComponents';

const dashboards = [
  {
    name: 'Servicios',
    id: '123123',
  },
  {
    name: 'Ventas',
    id: '8879s98dfhkjs',
  },
  {
    name: 'Empleados',
    id: 'sfsdfs8d0f980',
  },
  {
    name: 'Clintes',
    id: '8sdf566s5df4',
  },
];

export const Dashbards = () => {
  const queryClient = useQueryClient();
  const customer = queryClient.getQueriesData(['customers']);
  const dashboards = customer[0][1]?.companies || [];
  return (
    <section className="grid w-full p-5 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
      {dashboards.map((folder) => (
        <GraphsComponents graph={folder} key={folder.id} />
      ))}
    </section>
  );
};
