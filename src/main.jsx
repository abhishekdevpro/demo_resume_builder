import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Slider from './Component/Home/Slider.jsx'
import Slider_details from './Component/Home/Slider_details.jsx'
import Login from './Component/Login/Login.jsx'
// import Signup from './Component/Login/Signup.jsx'
import { Toaster } from 'react-hot-toast'
import Layout2 from './Layout2.jsx'
import Dashboard from './Component/Dashboard.jsx'
import AIResume from './Component/Dashboard/AIResume.jsx'
import Skills from './Component/Dashboard/Skill Test/Skills.jsx'
import Testpaper from './Component/Dashboard/Skill Test/Testpaper.jsx'
import Layout3 from './Layout3.jsx'
import Form from "./Component/ResumeBuilder/Forms.jsx"
import Selectionresume from "./Component/ResumeBuilder/Selectionresume.jsx"
import Uploadresume from "./Component/ResumeBuilder/Uploadresume.jsx"
import { ResumeProvider } from './ResumeContext.jsx'

const isAuthenticated = Boolean(localStorage.getItem('token'));
const route =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"slide/:id",
        element:<Slider_details/>
      },
      {
        path:"login",
        element:<Login/>
      },
      
    ]
  },

  {
     element:<Layout2/>,
     children:[
      {
        path:"dashboard",
        element:<Dashboard/>
      
      },
      {
        path:"resume",
    element:<AIResume/>
      },
      {
        path:"skilltest",
    element:<Skills/>
      },
      {
        path:"/testpaper/:skillId/:skillName",
        element:<Testpaper/>

      }
     ],
     
  },
  {
    element:<Layout3/>,
    children:[
      {
        path:"form",
        element:<Form/>
      },
      {
        path:"resumebuilder",
        element:<Selectionresume />
      },
      {
        path:"/",
         element:<Selectionresume />
      },
      {
        path:"/uploadresume",
        element:<Uploadresume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={route}/>
    {/* <App /> */}
    <ResumeProvider>
    <Toaster/>
    
    </ResumeProvider>
  </React.StrictMode>,
)
