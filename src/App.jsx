import './App.css';
import Conatiner from './component/Conatiner';
import Header from './component/Header';
import { ThemeProvider } from './context/Themecontext';


function App() {
  return (
 <>
 <ThemeProvider>
 <Header/>
<Conatiner/>
 </ThemeProvider>


 </>
  );
}

export default App;
