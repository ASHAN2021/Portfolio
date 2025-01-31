

const Navbar = () => {
  return (
    <div className="ml-[400px]  w-[50vw] h-[8vh] rounded-4xl m-10 bg-gray-950 border-2 border- backdrop-blur-md shadow-lg fixed" >
        <div className="flex justify-around items-center h-full">
            <h1 className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border">Home</h1>
            <h1 className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border">About</h1>
            <h1 className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border">Contact</h1>
            <h1 className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border">Portfolio</h1>       
        </div>
    </div>
  )
}

export default Navbar