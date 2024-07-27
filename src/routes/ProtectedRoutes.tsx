import { Navigate, useLocation,Outlet} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Service/firebase/firebaseConfig';

const ProtectedRoutes = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();

      if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return <Outlet />;
}

export default ProtectedRoutes
