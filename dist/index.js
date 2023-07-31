import { validarFormulario } from './validaciones';

// Aquí puedes agregar la inicialización de Firebase y el código relacionado con la autenticación.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', validarFormulario);
});
