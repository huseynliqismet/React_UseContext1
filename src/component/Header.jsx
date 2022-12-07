import React from 'react'
import { useTheme } from '../context/Themecontext';
const Header = () => {
  const {theme,setTheme}=useTheme();

  return (
<header>
Active Theme : {theme};

<button onClick= {()=>setTheme(theme==="dark" ?  "light":"dark"  )}>Mode</button>
</header>
  )
}

export default Header