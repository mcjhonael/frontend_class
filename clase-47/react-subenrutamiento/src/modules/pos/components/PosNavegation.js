import React from 'react'
// import PosContext from '../../../context/pos/posContext';
const PosNavegation = () => {
  // const contextoPOS = useContext(PosContext);
  // const { global_mesa_id, global_saludo } = contextoPOS;
  return (
    <nav className="menu">
      <ul className="menu__lista">
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src="/assets/img/plato_blanco.svg" alt="" />
          <span>Bebidas</span>
        </li>
      </ul>
    </nav>
  );
}

export default PosNavegation
