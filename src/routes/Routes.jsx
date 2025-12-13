import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import Contact from '../pages/Contact.jsx'
import Content from '../pages/Content.jsx'
import App from '../App.jsx'

// Definición de rutas de la aplicación
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'content',
        element: <Content />
      }
    ]
  }
], {
  basename: '/CCprograma'
})

export default router
