import imageGraph from '../../assets/graph-up-svgrepo-com.svg';

export const GraphsComponents = ({ graph }) => {
  return (
    <div className="flex flex-col items-center " key={graph.idReport}>
      <img
        src={imageGraph}
        alt={graph.nameReport}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-neutral-100 text-xl font-light">{graph.nameReport}</p>
    </div>
  );
};
