import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route} from "react-router-dom";
import Cats from "./pages/Cats";
import Vote from "./pages/Vote";
import ImageUpload from "./pages/ImageUpload";

function App() {
  return (
    <div className="App">


        <div className="container-fluid">
            <div className="row">
               <BrowserRouter>
                   <Menu />
                   <Route path={'/'} exact component={Dashboard} />
                   <Route path={'/cats'} exact component={Cats} />
                   <Route path={'/vote'} exact component={Vote} />
                   <Route path={'/upload'} exact component={ImageUpload} />
               </BrowserRouter>
            </div>
        </div>
    </div>
  );
}

export default App;
