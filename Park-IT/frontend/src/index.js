import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './components/user/global/ScrollToTop.js'
import { Provider } from "react-redux";
import rootReducer from './reducer/index.js'
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from 'react-hot-toast'

const store = configureStore({
  reducer:rootReducer,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
        <App />
        <Toaster />
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
