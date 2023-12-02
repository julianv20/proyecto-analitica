import imageGraph from '../../assets/graph-up-svgrepo-com.svg';

export const GraphsComponents = ({ graph }) => {
  return (
    <div className="flex flex-col items-center " key={graph.id}>
      <img
        src={imageGraph}
        alt={graph.name}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-neutral-100 text-xl font-light">{graph.name}</p>
    </div>
  );
};
