import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
  return (

      <div className=" justify-between shadow-md" >
        <div className="container mx-auto flex justify-between items-center lg:max-w-140">
          <Logo />
          <MainMenu />
        </div>
      </div>

  )
}

export default MainHeader
