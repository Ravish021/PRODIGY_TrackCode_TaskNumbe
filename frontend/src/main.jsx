import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import router from './router/index.js'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter,} from "react-router-dom";
import Login from './pages/login.jsx'
import ForgetPassword from './pages/forgetpassword.jsx'
import Signup from './pages/signup.jsx'
import Home from './pages/home.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"/login/forgetPassword",
          element:<ForgetPassword/>
        },
        {
          path:"/Signup",
          element:<Signup/>
        },
        
      ]
    },
   
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
