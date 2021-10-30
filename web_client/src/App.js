import './App.css';
import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import  { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useMessages } from './store/provider/MessageProvider';
import ChatList from './pages/ChatList';
import Profile from './pages/Profile';

function App() {
  const [messagesState] = useMessages()
  useEffect(()=>{
    console.log(messagesState)
  }, [messagesState])

  
  return (
    <div className="App">
          <Router>
              <Switch>
                <Route path="/" component ={Home} exact/>
                <Route path="/chat" component ={ChatList}/>
                <Route path="/profile" component ={Profile}/>
                <Route path="/login">
                  <Container style={{height:"100vh", display:'flex'}}>
                    <Login />
                  </Container>
                </Route>
                <Route path="/sign-up">
                  <Container style={{height:"100vh", display:'flex'}}>
                    <SignUp />
                  </Container>
                </Route>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
