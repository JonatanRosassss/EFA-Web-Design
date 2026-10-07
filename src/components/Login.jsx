import { useState } from 'react';

function Login() {
  // Hook para alternar si se ve o no la contraseña
  const [mostrarPassword, setMostrarPassword] = useState(false);

  //para guardar el texto de los campos
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [recordarme, setRecordarme] = useState(false);

  // Hook para mostrar el cartelito ficticio
  // Puede ser 'success', 'construccion' o null si no hay nada
  const [cartelito, setCartelito] = useState(null);

  // Función al hacer click en el botón de Iniciar Sesión (Submit)
  const handleLogin = (e) => {
    e.preventDefault();
    //directamente se muestra el cartel de success
    setCartelito({
      tipo: 'success',
      texto: '¡Success! Has iniciado sesión exitosamente.'
    });
  };

  //para los otros botones que no tienen logica
  const handleOtrosBotones = (e) => {
    e.preventDefault();
    setCartelito({
      tipo: 'construccion',
      texto: 'Esta función está en construcción.'
    });
  };

  // se  alterna el ojito de la contraseña
  const toggleVisibilidadPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <div className="content">
      {}
      {cartelito && (
        <div className={`cartelito cartelito-${cartelito.tipo}`}>
          <span>{cartelito.texto}</span>
          <button
            type="button"
            className="btn-cerrar-cartelito"
            onClick={() => setCartelito(null)}
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleLogin} autoComplete="off">
        <h2>Iniciar Sesión</h2>

        {}
        <div className="input-box">
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
          <i className="ri-user-fill"></i>
        </div>

        {}
        <div className="input-box">
          <input
            type={mostrarPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <i
            className={mostrarPassword ? 'ri-eye-fill toggle-password' : 'ri-eye-off-fill toggle-password'}
            onClick={toggleVisibilidadPassword}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>

        {}
        <div className="remember">
          <label>
            <input
              type="checkbox"
              checked={recordarme}
              onChange={(e) => setRecordarme(e.target.checked)}
            />
            Recordarme
          </label>
          <a href="#" onClick={handleOtrosBotones}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {}
        <button type="submit" className="btnn">
          Iniciar Sesión
        </button>

        {}
        <div className="button">
          <a href="#" onClick={handleOtrosBotones}>
            <i className="ri-google-fill"></i> Google
            <span className="label-construccion"> (En construcción)</span>
          </a>
          <span className="separador">--</span>
          <a href="#" onClick={handleOtrosBotones}>
            <i className="ri-facebook-fill"></i> Facebook
            <span className="label-construccion"> (En construcción)</span>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
