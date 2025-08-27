import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    firstName: '',
    lastName: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const regexPatterns = {
    phone: /^(\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}$/, // Telefone brasileiro
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email
    name: /^[A-Za-zÀ-ÿ\s]{2,30}$/, // Nome (aceita acentos)
    message: /^.{10,500}$/ // Mensagem (10-500 caracteres)
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!regexPatterns.phone.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }
    if (!regexPatterns.email.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!regexPatterns.name.test(formData.firstName)) {
      newErrors.firstName = 'Nome inválido';
    }
    if (!regexPatterns.name.test(formData.lastName)) {
      newErrors.lastName = 'Nome inválido';
    }
    if (!regexPatterns.message.test(formData.message)) {
      newErrors.message = 'Mensagem deve ter 10-500 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Dados enviados:', formData);
      alert('Formulário enviado com sucesso!');
      
      setFormData({
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-md mx-auto my-5" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-6 my-5">
        <FormInput
          type="tel"
          name="phone"
          label="Telefone"
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
          error={errors.phone}
        />
        <FormInput
          type="email"
          name="email"
          label="E-mail"
          value={formData.email}
          onChange={(value) => handleInputChange('email', value)}
          error={errors.email}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <FormInput
          type="text"
          name="firstName"
          label="Primeiro Nome"
          value={formData.firstName}
          onChange={(value) => handleInputChange('firstName', value)}
          error={errors.firstName}
        />
        <FormInput
          type="text"
          name="lastName"
          label="Último Nome"
          value={formData.lastName}
          onChange={(value) => handleInputChange('lastName', value)}
          error={errors.lastName}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block mb-2 text-sm font-light text-gray-900">
          Sua mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Escreva seu comentário..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
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

const FormInput = ({ type, name, label, value, onChange, error }) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      name={name}
      id={`floating_${name}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      placeholder=" "
      required
    />
    <label
      htmlFor={`floating_${name}`}
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      {label}
    </label>
    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);