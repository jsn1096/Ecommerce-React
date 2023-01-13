import { Link, useNavigate } from "react-router-dom"
import { deleteToken } from "../../../helpers/auth"

const MainMenu = () => {

  const navigation = useNavigate()

  return (
    <nav className="">
      <div>
        <ul className="flex">
          <li className="menu-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu-item">
            <Link to="/productos" >Productos</Link>
          </li>
          <li className="menu-item">
            <a onClick={() => {
              deleteToken()
              navigation('/login')
            }}>Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MainMenu