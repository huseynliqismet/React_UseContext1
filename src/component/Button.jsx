import React from 'react'
import { useTheme } from '../context/Themecontext';
const Button = () => {
  const {theme,setTheme}=useTheme();

  return (
    <div>
      Active Theme : {theme};

<button onClick= {()=>setTheme(theme==="dark" ?  "light":"dark"  )}>Mode</button>
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