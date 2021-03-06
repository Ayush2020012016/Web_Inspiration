import Header from './MyComponents/Header'
import './MyComponents/header.css'
import Intro from './MyComponents/Intro'
import './MyComponents/Intro.css'
import Webdesigns from './MyComponents/Webdesigns'
import './MyComponents/Webdesigns.css'
import Last from './MyComponents/Lastpart'
import './MyComponents/Lastpart.css'
import Footer from './MyComponents/Footer'
import './MyComponents/Footer.css'
import Blog from './MyComponents/Blog'
import './MyComponents/Blog.css'
import Login from './MyComponents/Login'
import './MyComponents/Login.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <Header/>
          <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} render={()=>{
              
                  return(
                    <>
                    <Intro/>
                    <Webdesigns/>
                    </>
                  )
                }}>
              </Route>
              <Route exact path="/Blog">
                <Blog/>
              </Route>
              <Route exact path="/Login">
                <Login/>
              </Route>
          </Switch>
        <Footer/>
    </Router>
    </>
  )}
  export default App;

