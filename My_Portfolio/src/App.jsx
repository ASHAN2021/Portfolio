import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

const App=()=> {
  

  return (
    <div className="bg-black w-full h-screen fixed overflow-auto">
      <Navbar />
      <Home />
      
    </div>
  )
}

export default App;
