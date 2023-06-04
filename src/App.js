import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Home } from './components/home';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} /> 
        <Route path='/about' Component={About} /> 
        <Route path='/register' Component={Register} /> 
        <Route path='/login' Component={Login} /> 
        <Route path='/contact' Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
