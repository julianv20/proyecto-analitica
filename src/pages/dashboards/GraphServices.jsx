import { useNavigate } from 'react-router-dom';
import { GraphServiceComponent } from '../../components/analitica/GraphServiceComponent';
import { IoArrowBackCircle } from 'react-icons/io5';

export const GraphServices = () => {
  const navigate = useNavigate();

  const data = [
    { name: 'Limpieza dental', amount: 25 },
    { name: 'Extracción de muelas', amount: 23 },
    { name: 'Blanqueamiento dental', amount: 15 },
    { name: 'Ortodoncia', amount: 10 },
  ];

  return (
    <section className="relative flex justify-center items-center w-full h-full">
      <div className="absolute  mt-5 w-full h-full">
        <IoArrowBackCircle
          onClick={() => navigate('/analitica')}
          className="text-white w-12 h-12 cursor-pointer hover:scale-125 transition-transform duration-300"
        />
      </div>
      <div className="w-full md:w-5/6  xs:w-1/2">
        <h1 className="text-center text-neutral-100 font-black text-3xl">
          Servicios mas vendidos
        </h1>
        <GraphServiceComponent data={data} />
      </div>
    </section>
  );
};
