import {lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import Loader from './components/Loader'
import LoginPage from './pages/LoginPage'
import RegisterPage from 'pages/RegisterPage';

const Homepage = lazy(() =>
  import('./pages/Homepage' /* webpackChunkName: 'Homepage' */),
);
const DragonPage = lazy(() =>
  import('./pages/DragonPage' /* webpackChunkName: 'DragonPage' */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */),
);

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/:id' element={<DragonPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
