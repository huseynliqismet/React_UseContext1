import Button from './Button';
import React from 'react'
import { useTheme } from '../context/Themecontext'
import Header from './Header';

const Conatiner = () => {
  const {theme}=useTheme();
  return (
    <div className={`app ${theme === "dark" ? theme : "light" } ` }>
      <Header/>
      <hr/>
      <Button/>
    </div>
  )
}

export default Conatiner