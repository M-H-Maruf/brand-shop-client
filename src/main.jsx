import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/AuthProvider'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import routes from './router/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
