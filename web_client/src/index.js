import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import UserProvider from './store/provider/UserProvider'
import MessageProvider from './store/provider/MessageProvider';
import ActiveChatProvider from './store/provider/ActiveChatProvider';
import NavbarContext from './Context/Navbar.context';

ReactDOM.render(
  <React.StrictMode>
   
      <UserProvider>
        <ActiveChatProvider>
        <NavbarContext>
          <MessageProvider>
            <App />
          </MessageProvider> 
          </NavbarContext>
        </ActiveChatProvider>     
      </UserProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
