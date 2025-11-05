import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,redirect, RouterProvider } from 'react-router-dom'
import './assets/styles.css'

// Ladning Page
import Landing from './pages/Landing.jsx'

// Plans list
import Plans from './pages/Plans.jsx'
import All from './components/Plans/All.jsx'
import Favorite from './components/Plans/Favorite.jsx'
import Trash from './components/Plans/Trash.jsx'

// Editor 
import FloorPlanEditor from './pages/FloorPlanEditor.jsx'

// Viewier
import FloorPlanViewer from './pages/FloorPlanViewer.jsx'

// Documentation
import Main from './pages/Documentation/Main.jsx'
import Introduction from './pages/Documentation/Introduction.jsx'
import Package from './pages/Documentation/Package.jsx'
import Installation from './pages/Documentation/Installation.jsx'
import Organization from './pages/Documentation/Organization.jsx'
import DocPlans from './pages/Documentation/Plans.jsx'
import NewPlan from './pages/Documentation/NewPlan.jsx'
import DrawingWalls from './pages/Documentation/DrawingWalls.jsx'
import AddingFurnishing from './pages/Documentation/AddingFurnishing.jsx'
import AddingText from './pages/Documentation/AddingText.jsx'
import Sharing from './pages/Documentation/Sharing.jsx'
import Support from './pages/Documentation/Support.jsx'
import ChangeLog from './pages/Documentation/ChangeLog.jsx'

// Error page
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: "/plans",
    element: <Plans />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/plans/all",
        element: <All />
      },
      {
        path: "/plans/favorite",
        element: <Favorite />
      },
      {
        path: "/plans/trash",
        element: <Trash />
      },
      {
        path: "/plans/documentation",
        element: <Main />,
        children: [
          {
            index: true,
            loader: () => redirect('introduction'),
          },
          {
            path: "introduction",
            element: <Introduction />,
          },
          {
            path: "installation",
            element: <Installation />,
          },
          {
            path: "package",
            element: <Package />,
          },
          {
            path: "organization",
            element: <Organization />,
          },
          {
            path: "plans",
            element: <DocPlans />,
          },
          {
            path: "newplan",
            element: <NewPlan />,
          },
          {
            path: "drawingwalls",
            element: <DrawingWalls />,
          },
          {
            path: "addingfurnishing",
            element: <AddingFurnishing />,
          },
          {
            path: "addingtext",
            element: <AddingText />,
          },
          {
            path: "sharing",
            element: <Sharing />,
          },
          {
            path: "support",
            element: <Support />,
          },
          {
            path: "changelog",
            element: <ChangeLog />,
          }
        ]
      }
    ]
  },
  {
    path: "/editor/:planId",
    element: <FloorPlanEditor />,
    errorElement: <ErrorPage />
  },
  {
    path: "/view/:planId",
    element: <FloorPlanViewer />,
    errorElement: <ErrorPage />
  },
  
], {
  // If you upload to subfolder in your server
  // basename: "/floorlite"
  })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
