import {lazy, Suspense, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/authOperations';
import {getIsFetchingCurrentUser} from './redux/auth/authSelectors'
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import AppBar from 'components/Navigation/AppBar'
import Loader from 'components/Loader'


const Homepage = lazy(() =>
  import('./pages/Homepage' /* webpackChunkName: 'Homepage' */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'LoginPage' */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: 'RegisterPage' */),
);
const DragonPage = lazy(() =>
  import('./pages/DragonPage' /* webpackChunkName: 'DragonPage' */),
);
const FavouritesDragonsListPage = lazy(() =>
  import('./pages/FavouritesDragonsListPage' /* webpackChunkName: 'FavouritesDragonsListPage' */),
);
const FavouriteDragonPage = lazy(() =>
import('./pages/FavouriteDragonPage' /* webpackChunkName: 'FavouriteDragonPage' */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */),
);

function App() {
  const dispatch = useDispatch()
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser)

  useEffect(() => {
      dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  return (
    !isFetchingCurrentUser && (
      <>
    <AppBar/>

    <Suspense fallback={<Loader />}>
      <Routes>
      <Route
          path='/register'
          element={
            <PublicRoute restricted>
              <RegisterPage/>
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute restricted redirectTo='/'>
              <LoginPage/>
            </PublicRoute>
          }
        />
        <Route
          path='/'
          element={
            <PrivateRoute redirectTo='/login'>
              <Homepage/>
            </PrivateRoute>
          }
        />
        <Route
          path='/:id'
          element={
            <PrivateRoute redirectTo='/login'>
              <DragonPage/>
            </PrivateRoute>
          }
        />
        <Route
          path='/favourites'
          element={
            <PrivateRoute redirectTo='/login'>
              <FavouritesDragonsListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path='/favourites/:id'
          element={
            <PrivateRoute redirectTo='/login'>
              <FavouriteDragonPage/>
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={
            <PublicRoute>
              <NotFoundPage/>
            </PublicRoute>
          }
        />
      </Routes>
      </Suspense>
    </>
  )
  )
}

export default App;
