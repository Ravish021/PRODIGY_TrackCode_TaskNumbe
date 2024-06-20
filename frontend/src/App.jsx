import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

  return (
    <>
        <ToastContainer
        position="top-center" /> 
        <main className="min-h-[calc(100vh-120px)] pt-20">
          <Outlet />
        </main>
      
      
      
    </>
  );
}

export default App;
