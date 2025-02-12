import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import { router } from './routes/Routes'
import { RouterProvider} from 'react-router-dom'
import { store } from './Service/store/store';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
