import { FaCode } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { TbWindowMaximize } from "react-icons/tb";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <section>
    <div className="ml-25">
        <div className="flex  mt-50">
            <FaCode className="text-4xl text-blue-600 " />
            <VscVscodeInsiders className="text-4xl text-blue-600 ml-5" />
            <CgProfile className="text-4xl text-blue-600 ml-5" />
            <BsGithub className="text-4xl text-blue-600 ml-5" />
        </div>
        <h1 className="text-5xl text-white font-bold mt-5">FULL STACK</h1> 
        <h1 className="text-5xl text-blue-600 font-bold mt-3">DEVELOPER</h1>
        <h1 className="text-3xl text-white font-semibold mt-3">Computer Science Student</h1> 
        <p className="text-xl text-gray-500 ">I merge creativity with technology,<br/>
        crafting immersive and captivating digital experiences.</p>  
        <div className="flex ">
            <button className="flex bg-transparent text-white px-5 py-2 shadow-lg  shadow-blue-600 mt-5 mr-8">Project<TbWindowMaximize className="text-2xl text-blue-600 ml-5"/></button>
            <button className="flex bg-transparent text-white px-5 py-2 shadow-lg  shadow-blue-600 mt-5">Contact<MdOutlineMarkAsUnread className="text-2xl text-blue-600 ml-5"/></button> 
        </div>
        <div className="flex mt-15">
            <BsInstagram className="text-4xl text-blue-600 "/>
            <FaFacebookSquare className="text-4xl text-blue-600 ml-5 "/>
            <FaLinkedin className="text-4xl text-blue-600 ml-5 "/>
            <FaGithub className="text-4xl text-blue-600 ml-5 "/>
        </div>
        

    </div>
    </section>
    <section className=" h-screen ">
        <div className="flex flex-col  items-center bg-black">
            <h1 className="text-3xl text-blue-600 font-bold mt-35">ABOUT ME</h1>
            <p className="text-xl text-gray-500 mt-3">Redefining tomorrow through digital creativity and innovation.</p>
        </div>
        <div>
            <h1 className="text-5xl text-blue-600 font-semibold">Hello I&apos;m</h1>
        </div>
            
    </section>

    </>
  )
}

export default Home