import './App.css';
import Navbar from './components/Navbar/Navbar';
import AvatarImg from "./components/AvatarImg/Avatar"
import MainContent from './components/MainContent/MainContent';
// function App with the components
function App() {
//return the JSX that will be rendered to the page.
  return (
    <>
    <div className='container'>
    <div className='first_part'>
    <AvatarImg />
    </div>
    <div className='second_part'>
      <div className='second_part_navbar'>
     <Navbar/>
     </div>
    <MainContent/>
    </div>
  

  </div>
    </>
  );
}

export default App;
