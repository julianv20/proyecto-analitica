import { useNavigate } from 'react-router-dom';
import formImage from '../../assets/folder-svgrepo-com.svg';

export const CardFormComponent = ({ form }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(form.idCOmpany)}
      className="flex flex-col items-center"
    >
      <img
        src={formImage}
        alt={form.companyName}
        className="cursor-pointer hover:scale-105  transition-transform duration-300"
      />

      <p className="text-neutral-100 text-xl font-light">{form.companyName}</p>
    </div>
  );
};
