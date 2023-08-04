import CartWidget from './cartWidget';
import './maquetado.css';
const NavBar = () => {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Productos</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        
      </ul>
      <CartWidget/>
    </nav>
    </header>

  );
};
export default NavBar;