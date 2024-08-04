import { Navigate, useLocation,Outlet} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Service/firebase/firebaseConfig';
import Loading from '../components/shared/Loading/Loading';

const ProtectedRoutes =  () => {
    const [user,loading] =  useAuthState(auth);
    const location = useLocation();

    if (loading) {
      return <Loading/>
    }

      if (!user) {
        return  <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return <Outlet />;
}

export default ProtectedRoutes
