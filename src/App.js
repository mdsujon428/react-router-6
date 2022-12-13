import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import PrivateOutlet from './components/PrivateOutlet';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Navigate to = "/home"/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/*" element = { <PrivateOutlet/>} >
          <Route path= "dashboard" element = { <Dashboard/>} />
          <Route path= "services" element = { <Services/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
