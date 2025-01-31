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
import { GrDocument } from "react-icons/gr";
import { IoCode } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";

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
                <div className="flex justify-between mt-10">
                    <div>
                        <div className="ml-25 mt-10">
                            <h1 className="text-5xl text-blue-600 font-semibold ">Hello I&apos;m</h1>
                            <h1 className="text-6xl text-white font-bold mt-3">Ashan Kavinda</h1>
                            <p className="text-xl text-gray-500 mt-3">
                            I&apos;m an enthusiastic undergraduate at UCSC, passionate about<br/> software engineering. I love building innovative solutions and<br/> continuously honing my skills. Eager to take on new challenges<br/> and contribute to impactful projects, I&apos;m always ready to<br/> collaborate and grow in the tech world.
                            </p>
                            <div className="flex">
                                <button className="flex  text-white px-5 py-2 bg-blue-600 mt-5 mr-8"><GrDocument className="text-2xl text-white mr-3"/>Download CV</button>
                                <button className="flex  text-white px-5 py-2 border-2 border-blue-600 mt-5 mr-8">view Projects <IoCode className="text-2xl text-white ml-3"/> </button>
                            </div>
                        </div>
                    </div> 
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" className="mr-50 mt-20" />
                </div>
            </div> 
            <div className="flex justify-between mt-10 m-25">
                <div className="w-[400px] h-[120px] bg-[#1F1F1F]">
                    <div className="flex justify-between mt-5 ">
                        <div>
                            <div className="w-[35px] h-[35px] bg-[#343560] rounded-full flex items-center justify-center ml-5">
                                <IoCode className="text-2xl text-white" />
                            </div> 
                        </div> 
                        <h1 className="text-2xl text-white font-bold mr-10">10</h1>    
                    </div>
                    <h1 className="text-xl text-gray-500 ml-5">Total Projects</h1> 
                    <p className="text-xs text-gray-600 ml-5">Innovative web solutions crafted</p>   
                </div>
                <div className="w-[400px] h-[120px] bg-[#1F1F1F]">
                <div className="flex justify-between mt-5 ">
                        <div>
                            <div className="w-[35px] h-[35px] bg-[#343560] rounded-full flex items-center justify-center ml-5">
                                <GrCertificate className="text-xl text-white" />
                            </div> 
                        </div> 
                        <h1 className="text-2xl text-white font-bold mr-10">7</h1>    
                    </div>
                    <h1 className="text-xl text-gray-500 ml-5">Certificates</h1> 
                    <p className="text-xs text-gray-600 ml-5">Professional skills validated</p>
                </div>
                <div className="w-[400px] h-[120px] bg-[#1F1F1F]">
                <div className="flex justify-between mt-5 ">
                        <div>
                            <div className="w-[35px] h-[35px] bg-[#343560] rounded-full flex items-center justify-center ml-5">
                                <GrTechnology className="text-2xl text-white" />
                            </div> 
                        </div> 
                           
                    </div>
                    <h1 className="text-xl text-gray-500 ml-5">Technologies</h1> 
                    <p className="text-xs text-gray-600 ml-5">Technologies mastered and applied.</p>
                </div>
            </div>
    </section>
    <section className=" h-screen">

    </section>

    </>
  )
}

export default Home