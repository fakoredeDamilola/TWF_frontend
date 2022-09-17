import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppRoutes, authenticatedRoutes, routes } from './constants/routes'
import PrivateRoute from './Layout/PrivateRoute'
import Layout from './Layout/Layout'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import Fonts from './theme/components/fonts'



function App() {
  const user = useSelector((state: RootState) => state.user.user)
  const [authenticated,setAuthenticated] = useState(true)
  useEffect(()=>{
    localStorage.getItem("authToken") ? setAuthenticated(true) : setAuthenticated(false)
    
  },[user])
  return (
    <Suspense fallback={null}>
      
      <Fonts />
      <Router>
                
            
             <Layout>
             <Routes>
          {authenticatedRoutes.map((route:AppRoutes,index:number) => {
        const { component: Component,path, exact} = route
          
        return (
          <Route
            key={"auth"+ index}
            path={path}
            element = {
              <PrivateRoute authenticated={authenticated}>
                <Component />
              </PrivateRoute>
            }
            />
        )
       })

       }
          {routes.map((route:AppRoutes,index:number) => {
        const { component: Component,path, exact} = route

        return (
          <Route
            key={ index}
            path={path}
            element = {
                <Component />
            }
            />
        )
       })

       }
              </Routes>
              </Layout>
          
        
       
      </Router>
      
    </Suspense>
    
  )
}

export default App
