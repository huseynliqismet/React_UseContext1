import React from 'react'
import { useTheme } from '../context/Themecontext';
import {BsFillSunFill} from '../../node_modules/react-icons/bs'
import "../component/button.scss"
const Button = () => {
  const {theme,setTheme}=useTheme();

  return (
    <div>
    ACTIVE:

<span onClick= {()=>setTheme(theme==="dark" ?   "light":"dark"  )}><BsFillSunFill/></span>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>
<h1>Lorem, ipsum dolor.</h1>



    </div>
  )
}

export default Button