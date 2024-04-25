
import { Navigate, Route } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element:React.ReactNode;
isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps>=({
path,
element,
isAuthenticated,})=>{
  return isAuthenticated?(
    <Route path={path} element ={element}/>
  ):(
    <Navigate to ="/login"/>

  )
}

export default PrivateRoute