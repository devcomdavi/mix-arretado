import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setIsSubmitting(false);
  };

  return (
    <form className="max-w-md mx-auto my-5" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-6 my-5">
        <FormInput
          type="tel"
          name="phone"
          label="Telefone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <FormInput
          type="email"
          name="email"
          label="E-mail"
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <FormInput
          type="text"
          name="firstName"
          label="Primeiro Nome"
        />
        <FormInput
          type="text"
          name="lastName"
          label="Último Nome"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block mb-2 text-sm font-light text-gray-900">
          Sua mensagem
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Escreva seu comentário..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 text-center"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

const FormInput = ({ type, name, label, pattern }) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      name={name}
      id={`floating_${name}`}
      pattern={pattern}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor={`floating_${name}`}
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      {label}
    </label>
  </div>
);