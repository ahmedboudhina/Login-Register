import React from 'react';
import './App.css';
import Contact from "./components/contactList"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add_Contact from './components/add_Contact';
import Header  from './components/navbar'
import {BrowserRouter , Route} from 'react-router-dom'
import Login from "./components/login"
import Register from './components/register';
import Home from './components/home'
import Annance from './components/annance'

function App() {
  return (
    <BrowserRouter>
    <div>
      
    <Header/>

    {/* <Route path = '/' exact component={Home}/> */}
    <Route path = '/register' exact component={Register} />
    <Route path = '/login' exact component={Login} />
    <Route path = '/' exact component={Contact}/>
    <Route path = '/add_contact' exact component={Add_Contact}/>
    <Route path = '/annance'exact component={Annance}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
