import logo from './logo.svg';
import './App.css';
import { MainContainer } from './Global.Style';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {MainCont} from './Global.Style'
function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <MainCont>
          <Sidebar />
        </MainCont>
       
      </MainContainer>
    </div>
  );
}

export default App;
