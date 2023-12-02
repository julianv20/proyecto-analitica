import { FoldersComponents } from '../../components/FoldersComponents';

const data = [
  { id: 1, name: 'ABC Corporation', url: '/abc-corporation' },
  { id: 2, name: 'XYZ Ltd.', url: '/xyz-ltd' },
  { id: 3, name: 'Sunshine Enterprises', url: '/sunshine-enterprises' },
  { id: 4, name: 'Pinnacle Innovations', url: '/pinnacle-innovations' },
  { id: 5, name: 'Silver Solutions', url: '/silver-solutions' },
  { id: 6, name: 'Quantum Systems', url: '/quantum-systems' },
  { id: 7, name: 'Dynamic Technologies', url: '/dynamic-technologies' },
  { id: 8, name: 'Infinite Innovations', url: '/infinite-innovations' },
  { id: 9, name: 'Galactic Enterprises', url: '/galactic-enterprises' },
  { id: 10, name: 'Tech Nexus', url: '/tech-nexus' },
  { id: 11, name: 'Stratosphere Solutions', url: '/stratosphere-solutions' },
  { id: 12, name: 'Futuristic Designs', url: '/futuristic-designs' },
  { id: 13, name: 'Eagle Eye Corporation', url: '/eagle-eye-corporation' },
  { id: 14, name: 'Nova Innovations', url: '/nova-innovations' },
  { id: 15, name: 'Blue Sky Technologies', url: '/blue-sky-technologies' },
  { id: 16, name: 'Visionary Ventures', url: '/visionary-ventures' },
  { id: 17, name: 'Evergreen Enterprises', url: '/evergreen-enterprises' },
  { id: 18, name: 'Zenith Solutions', url: '/zenith-solutions' },
  { id: 19, name: 'Dynamic Innovations', url: '/dynamic-innovations' },
  { id: 20, name: 'Synergy Systems', url: '/synergy-systems' },
];

export const HomePage = () => {
  return (
    <main className="grid w-full p-5 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
      {data.map((folder) => (
        <FoldersComponents folder={folder} key={folder.id} />
      ))}
    </main>
  );
};
