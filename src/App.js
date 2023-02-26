import logo from './logo.svg';
import './App.css';
import { MainContainer } from './Global.Style';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {MainCont, MainBody} from './Global.Style'
import Stories from './components/Stories'
import RightSidebar from './components/RightSidebar'
import  AddPost  from './components/AddPost';
function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <MainCont>
          <Sidebar />
          <MainBody>
            <Stories />
            <AddPost />
          </MainBody>
          <RightSidebar />
        </MainCont>

      </MainContainer>
    </div>
  );
}

export default App;
