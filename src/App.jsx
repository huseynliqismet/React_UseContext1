import './App.css';
import Conatiner from './component/Conatiner';
import { ThemeProvider } from './context/Themecontext';


function App() {
  return (
 <>
 <ThemeProvider>
 
<Conatiner/>
 </ThemeProvider>


 </>
  );
}

export default App;
