import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState } from 'react';
import { Alert } from '../src/componentes/Alert';
import { Login } from '../src/componentes/Login';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');

  const handleLogin = (email, password) => {
    if (email === 'correo@example.com' && password === 'contraseña') {
      setAlertMessage('Inicio de sesión exitoso');
      setAlertColor('success');
    } else {
      setAlertMessage('Los datos ingresados no son correctos');
      setAlertColor('danger');
    }
  };

  const resetAlert = () => {
    setAlertMessage('');
    setAlertColor('');
  };
  return (
    <div className="App">
     <div>
      
      <Login onLogin={handleLogin} />
      <Alert message={alertMessage} color={alertColor} onClose={resetAlert} />
    </div>
    </div>
  );
}

export default App;
