
import './App.css';
import Header from './common/Header';
import Main from './Home/Main';
import MainDash from './Dashboard/MainDash'
import Collectionmain from './Home/Collectionmain'

import { BrowserRouter as Switch, Route } from "react-router-dom";
import Footer from './common/Footer';
function App() {
  return (
    <Switch>
    <Route path="/" exact>
        <Header />
      <Main />
      <Footer />
    </Route>
    <Route path="/collections/:id" exact>
        <Header />
        <Collectionmain />
        <Footer />
    </Route>
    <Route path="/adminn" >
    <MainDash />
    </Route>

    <Route path="/products" >
    <MainDash />
    </Route>
    
  </Switch>

    // <section>
    //   <Header />
    //   <Main />
    // </section>

  
  );
}

export default App;
