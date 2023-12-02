import React from 'react';
import { CardFormComponent } from '../../components/forms/CardFormComponent';

const idForms = [
  {
    name: 'Formulario de servicios',
    id: '1',
  },
  {
    name: 'Formulario de ventas en el mes',
    id: '2',
  },
  {
    name: 'Formulario de clientes',
    id: '3',
  },
];

export const FormPage = () => {
  return (
    <section className="grid w-full p-5 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
      {idForms.map((form) => (
        <CardFormComponent form={form} key={form.id} />
      ))}
    </section>
  );
};
