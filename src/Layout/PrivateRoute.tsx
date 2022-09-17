
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({
    children,
    authenticated
}: {
    children: JSX.Element;
    authenticated: boolean
}) => {
    let location = useLocation()
    useEffect(()=>{
    console.log({authenticated})
    },[authenticated])
  if(!authenticated){
    return <Navigate to="/login" state={{from:location}} replace />
  }   
  return children
  
}

export default PrivateRoute