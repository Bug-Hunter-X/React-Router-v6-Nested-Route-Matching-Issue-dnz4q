import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: 'about',
          element: <About/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;