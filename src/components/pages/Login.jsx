import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"

const Login = () => {

  const navigation = useNavigate()

  const [error, setError] = useState()
  const [cargando, setCargando] = useState()

  const submit = (e) => {
    e.preventDefault()
    setCargando(true)
    setError(null)
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axios.post(`${API_URL}/api/v1/public/login`, user)
    .then(res =>  {setToken(res.data.data.token)
      navigation('/')
    })
    .catch(e => {
      setCargando(false)
      setError(e.response.data.data)
    })
  }
    if (localStorage.getItem('token')) return <Navigate to='/' />

  return (

    
    <div className="w-500 mt-20 my-auto mx-auto border-cyan-500 rounded-lg">
      <form onSubmit={submit}>
        <div className="place-items-center p-8 ">
          <div className="pb-6">
            <img src="https://www.bimpasoapaso.com/wp-content/uploads/2020/05/LOGO-BIMPASOAPASO-01-2048x461.png.webp" alt="logo" />
          </div>
          <div className="flex justify-center">
            {
              error && <span className=" text-white rounded-md bg-red-500 px-2" >{error} </span>
            }
          </div>
          <div className="justify-center py-6">
            <label className="pr-1 font-semibold">Correo Electrónico</label>
            <input className="input-t" type="email" name="email" placeholder="example@email.com" required/>
          </div>
          <div className="justify-center py-2">
            <label className="pr-1 font-semibold">Contraseña</label>
            <input className="input-t" type="password" name="password" placeholder="*******" required/>
          </div>
          <div className="justify-center flex">
            <button className="boton" type="submit" >{cargando ? 'Cargando...' : 'Ingresar'}</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default Login