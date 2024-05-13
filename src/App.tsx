import React, { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales con los datos del formulario
    console.log(formData);
    // Restablecer el formulario después de enviarlo
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="cuerpa " >
      <form onSubmit={handleSubmit}>

        <div className='card'>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
       
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App
