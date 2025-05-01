import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogAndSig.css';
import Logo from '../../images/IMG_8507.webp';

const LogAndSig = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    nomPila: '',
    PrimerApell: '',
    SegunApell: '',
    NumTel: '',
    Correo: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/vendedores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        localStorage.setItem('auth', 'true'); // guardamos que está logueado
        navigate('/init'); // redirige
      } else {
        alert('Error al crear vendedor');
      }
    } catch (err) {
      alert('Error al conectarse al servidor');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/vendedores/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nomPila: formData.nomPila,
            Correo: formData.Correo
        })
      });

      if (response.ok) {
        localStorage.setItem('auth', 'true');
        navigate('/init');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (err) {
      alert('Error al conectarse al servidor');
    }
  };

  return (
    <div className={`container ${isRegistering ? 'register-mode' : ''}`}>
      <div className="form-box login-box">
        <h2 className='h2'>Iniciar Sesión</h2>
        <input className='input' type="text" placeholder="Nombre de pila" name="nomPila" onChange={handleChange} />
        <input className='input' type="text" placeholder="Correo electrónico" name="Correo" onChange={handleChange} />
        <button className='b' onClick={handleLogin}>Iniciar Sesión</button>
        <p className='p'>¿No tienes cuenta? <span onClick={() => setIsRegistering(true)}>Crear cuenta</span></p>      </div>

      <div className="slider-box">
        <div className="content">
          <img src={Logo} alt="logo" />
          <h1 >Bienvenido a Ébano Mueblería</h1>
          <p>Tu mejor elección.</p>
        </div>
      </div>

      <div className="form-box register-box">
        <h2 className='h2'>Crear Cuenta</h2>
        <input className='input' type="text" placeholder="Nombre de pila" name="nomPila" onChange={handleChange} />
        <input className='input' type="text" placeholder="Apellido materno" name="PrimerApell" onChange={handleChange} />
        <input className='input' type="text" placeholder="Apellido paterno" name="SegunApell" onChange={handleChange} />
        <input className='input' type="text" placeholder="Número de teléfono" name="NumTel" onChange={handleChange} />
        <input className='input' type="email" placeholder="Correo electrónico" name="Correo" onChange={handleChange} />
        <button className='b' onClick={handleRegister}>Registrarse</button>
        <p className='p' >¿Ya tienes cuenta? <span onClick={() => setIsRegistering(false)}>Iniciar sesión</span></p>
      </div>
    </div>
  );
};

export default LogAndSig;