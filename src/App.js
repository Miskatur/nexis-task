import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Router';
function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={routes}>
      </RouterProvider>

    </div>
  );
}

export default App;
