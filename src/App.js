import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Route';


function App() {
  return (
    <div className="w-11/12 lg:max-w-[1280px] mx-auto">
     <RouterProvider router={router}>
    
    </RouterProvider>
    </div>
  );
}

export default App;
