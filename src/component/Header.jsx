import React from 'react'
import { useTheme } from '../context/Themecontext';
import {BsFillSunFill} from '../../node_modules/react-icons/bs'
const Header = () => {
  const {theme,setTheme}=useTheme();

  return (
<header>
ACTIVE :

<span onClick= {()=>setTheme(theme==="dark" ?  "light":"dark"  )}><BsFillSunFill/></span>
</header>
  )
}

export default Header