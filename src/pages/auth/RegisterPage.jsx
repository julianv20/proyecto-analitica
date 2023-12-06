import React from 'react';
import imageAnalisis from '../../assets/13316494_5215755.svg';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../hooks/useRegister';
import { useCustomer } from '../../hooks/useCustomers';
import { LoadingSmallComponent } from '../../components/LoadingSmallComponent';
import { useQueryClient } from 'react-query';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const token = localStorage.getItem('authToken');

  const {
    data: customers,
    error: isError,
    isLoading,
    isFetching,
  } = useCustomer(token);

  const { loading, error, data, authRegister } = useRegister();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    authRegister(data);
    reset();
  });

  const useQuery = useQueryClient();

  const customer = useQuery.getQueriesData(['customers']);
  const role = customer[0][1]?.role || 'admin';

  return (
    <section className="h-screen grid justify-center items-center">
      {role === 'admin' || role === 'customer' ? (
        <div className="grid sm:grid-cols-[1fr_2fr] gap-x-5 bg-neutral-100/75 p-5 rounded-lg">
          <div className="overflow-hidden relative">
            {/* <GiBull className="text-[rgb(26,118,104)] w-12 h-12 absolute" /> */}
            <img
              src={imageAnalisis}
              alt=""
              className="w-full h-full object-cover cursor-pointer hover:scale-105 hover:saturate-200 transition-all duration-300"
            />
          </div>

          <div>
            <form
              className="grid lg:grid-cols-2 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-light mt-5 text-2xl text-neutral-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className={`rounded-lg px-3 py-2 text-neutral-900 focus:outline-none ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  {...register('name', {
                    required: 'El nombre es requerido',
                  })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}

                <label
                  htmlFor="lastname"
                  className="font-light mt-5 text-2xl text-neutral-900"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastname"
                  className={`rounded-lg px-3 py-2 text-neutral-900 focus:outline-none ${
                    errors.lastname ? 'border-red-500' : ''
                  }`}
                  {...register('lastName', {
                    required: 'El apellido es requerido',
                  })}
                />
                {errors.lastname && (
                  <span className="text-sm text-red-500">
                    {errors.lastname.message}
                  </span>
                )}

                <label
                  htmlFor="email"
                  className="font-light mt-5 text-2xl text-neutral-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`rounded-lg px-3 py-2 text-neutral-900 focus:outline-none ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  {...register('email', {
                    required: 'El email es requerido',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'El email no es válido',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}

                {isLoading ? (
                  <LoadingSmallComponent />
                ) : (
                  <select
                    name="empresa"
                    id="empresa"
                    className={`px-3 py-2 rounded-lg mt-5 bg-neutral-100 focus:outline-none ${
                      errors.empresa ? 'border-red-500' : ''
                    }`}
                    {...register('idCompany', {
                      required: 'Por favor, elige la empresa',
                    })}
                  >
                    <option value="">Seleccione su empresa</option>
                    {customers.companies?.map((customer) => (
                      <option
                        value={customer.idCompany}
                        key={customer.idCompany}
                      >
                        {customer.companyName}
                      </option>
                    ))}
                  </select>
                )}
                {errors.empresa && (
                  <span className="text-sm text-red-500">
                    {errors.empresa.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumberAgente"
                  className="font-light mt-5 text-2xl text-neutral-900"
                >
                  Numero telefónico
                </label>
                <input
                  type="text"
                  id="phoneNumberAgente"
                  className={`rounded-lg px-3 py-2 text-neutral-900 focus:outline-none ${
                    errors.phoneNumberAgente ? 'border-red-500' : ''
                  }`}
                  {...register('phoneNumberAgente', {
                    required: 'El número telefónico es requerido',
                    pattern: {
                      value: /^[0-9]{10}$/, // Asegura que tenga exactamente 10 dígitos
                      message: 'El número telefónico debe tener 10 dígitos',
                    },
                  })}
                />
                {errors.phoneNumberAgente && (
                  <span className="text-sm text-red-500">
                    {errors.phoneNumberAgente.message}
                  </span>
                )}

                <label
                  htmlFor="password"
                  className="font-light mt-5 text-2xl text-neutral-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`rounded-lg px-3 py-2 text-neutral-900 focus:outline-none ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  {...register('password', {
                    required: 'La contraseña es requerida',
                    minLength: {
                      value: 8,
                      message: 'La contraseña debe tener al menos 8 caracteres',
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}

                <label
                  htmlFor="confirmPassword"
                  className="font-light mt-5 text-2xl text-neutral-900"
                >
                  Confirma la contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`rounded-lg px-3 py-2 text-neutral-900 focus:outline-none ${
                    errors.confirmPassword ? 'border-red-500' : ''
                  }`}
                  {...register('confirmPassword', {
                    required: 'Confirma la contraseña',
                    validate: (value) =>
                      value === watch('password') ||
                      'Las contraseñas no coinciden',
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}

                {loading ? (
                  <button
                    disabled
                    type="button"
                    className="text-white bg-[rgb(26,118,104)] cursor-pointer hover:bg-[rgb(63,138,125)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-sm text-center me-2  dark:focus:ring-blue-800 inline-flex items-center mt-5 w-full"
                  >
                    Loading...
                  </button>
                ) : (
                  <button className="bg-[rgb(26,118,104)] rounded-lg px-3 py-2 mt-5 text-neutral-100 font-semibold text-sm hover:bg-[rgb(63,138,125)] transition-colors duration-300">
                    Crear
                  </button>
                )}
                {error && (
                  <div className="text-center mt-2 font-semibold text-red-500">
                    {error}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-4xl font-black text-neutral-100">
            No tienes permisos
          </h3>
        </div>
      )}
    </section>
  );
};
