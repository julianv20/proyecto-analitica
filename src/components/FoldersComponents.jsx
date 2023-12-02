import { useNavigate } from 'react-router-dom';
import imageFolder from '../assets/folder-cloud-svgrepo-com.svg';

export const FoldersComponents = ({ folder }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center " key={folder.id}>
      <img
        src={imageFolder}
        alt={folder.name}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => navigate('/analitica')}
      />
      <p className="text-neutral-100 text-xl font-light">{folder.name}</p>
    </div>
  );
};

// nameCustomer, phoneNumber, email, city, startDate
