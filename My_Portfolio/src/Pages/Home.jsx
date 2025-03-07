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
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

    const [activeTab, setActiveTab] = useState("projects");
  return (
    <>
     <div className="ml-[400px]  w-[50vw] h-[8vh] rounded-4xl m-10 bg-gray-950 border-2 border- backdrop-blur-md shadow-lg fixed" >
        <div className="flex justify-around items-center h-full">
            <button className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border" onClick={() => scrollToSection(homeRef)}>Home</button>
            <button className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border" onClick={() => scrollToSection(aboutRef)}>About</button>
            <button className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border" onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>       
            <button className="text-xl font-bold text-white px-4 py-2 rounded-3xl flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-black box-border" onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
    </div>


    <section ref={homeRef}>
        <div className="flex justify-between items-center bg-black h-screen">
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
            <button className="flex bg-transparent text-white px-5 py-2 shadow-lg  shadow-blue-600 mt-5 mr-8" onClick={() => { setActiveTab("projects"); scrollToSection(portfolioRef); }}>Project<TbWindowMaximize className="text-2xl text-blue-600 ml-5"/></button>
            <button className="flex bg-transparent text-white px-5 py-2 shadow-lg  shadow-blue-600 mt-5"onClick={()=>scrollToSection(contactRef)}>Contact<MdOutlineMarkAsUnread className="text-2xl text-blue-600 ml-5"/></button> 
        </div>
        <div className="flex mt-15">
            <BsInstagram className="text-4xl text-blue-600 "/>
            <FaFacebookSquare className="text-4xl text-blue-600 ml-5 "/>
            <FaLinkedin className="text-4xl text-blue-600 ml-5 "/>
            <FaGithub className="text-4xl text-blue-600 ml-5 "/>
        </div>
        

    </div>
        <div className="mr-25 mt-25 ">
                <video src="../../src/assets/first.mp4" autoPlay loop muted className="w-full h-auto"></video>
        </div>
    </div>
    </section>
    <section className=" h-screen " ref={aboutRef}>
        
            
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
                            I&apos;m an enthusiastic undergraduate at University of Colombo School of Computing,<br/> passionate about software engineering. I love building innovative solutions and<br/> continuously honing my skills. Eager to take on new challenges<br/> and contribute to impactful projects, I&apos;m always ready to<br/> collaborate and grow in the tech world.
                            </p>
                            <div className="flex">
                                <button className="flex  text-white px-5 py-2 bg-blue-600 mt-5 mr-8"><GrDocument className="text-2xl text-white mr-3"/>Download CV</button>
                                <button className="flex  text-white px-5 py-2 border-2 border-blue-600 mt-5 mr-8"onClick={() => { setActiveTab("projects"); scrollToSection(portfolioRef); }}>view Projects <IoCode className="text-2xl text-white ml-3"/> </button>
                            </div>
                        </div>
                    </div> 
                <div>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" className="mr-50 mt-20" /> */}
                    <video src="../../src/assets/prof.mp4" autoPlay loop muted className="mr-50 mt-5 w-[300px] h-[300px]"></video>
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
    <section className=" h-screen" ref={portfolioRef}>
                <div className="flex flex-col  items-center bg-black">
                    <h1 className="text-3xl text-blue-600 font-bold mt-35">PORTFOLIO</h1>
                    <p className="text-xl text-gray-500 mt-3">Explore my projects, certifications, and tech stack—each showcasing a milestone in<br/> my continuous journey of learning and innovation.</p>
                </div>
<div className="flex flex-col justify-center items-center mt-10">
      {/* Outer container */}
        <div className="w-[900px] h-[120px] bg-[#1F1F1F] flex justify-evenly items-center rounded-3xl overflow-hidden relative transition-all duration-300">
                        
                        {/* First Section - Projects */}
                        <div
                            className={`w-1/3 h-full flex flex-col justify-center items-center relative transition-all duration-300 cursor-pointer ${
                                activeTab === "projects" ? "bg-[#2D2D49] text-white" : ""
                            }`}
                            onClick={() => setActiveTab("projects")}
                            >
                            <IoCode className="text-4xl text-blue-600 relative z-10" />
                            <h1 className="text-2xl relative z-10 mt-2">Projects</h1>
                        </div>

                        {/* Second Section - Certificates */}
                        <div
                            className={`w-1/3 h-full flex flex-col justify-center items-center relative transition-all duration-300 cursor-pointer ${
                                activeTab === "certificates" ? "bg-[#2D2D49] text-white" : ""
                            }`}
                            onClick={() => setActiveTab("certificates")}
                            >
                            <GrCertificate className="text-4xl text-blue-600 relative z-10" />
                            <h1 className="text-2xl relative z-10 mt-2">Certificates</h1>
                        </div>

                        {/* Third Section - Technologies */}
                    <div
                        className={`w-1/3 h-full flex flex-col justify-center items-center relative transition-all duration-300 cursor-pointer ${
                            activeTab === "technologies" ? "bg-[#2D2D49] text-white" : ""
                        }`}
                        onClick={() => setActiveTab("technologies")}
                        >
                        <GrTechnology className="text-4xl text-blue-600 relative z-10" />
                        <h1 className="text-2xl relative z-10 mt-2">Technologies</h1>
                    </div>
      </div>

      {/* Active Content Section */}
      <div className="flex  mt-5 p-5 bg-[#2D2D49] rounded-3xl text-white transition-all duration-300 ">
        {activeTab === "projects" && 
        <>
        
            <div className="w-[300px] h-[450px] bg-[#1F1F1F] rounded-3xl flex flex-col justify-center items-center">
                    <img src="../../src/assets/car_rental.jpg" alt=""  className="w-[300px] h-[250px]  rounded-3xl"/>
                    <h1 className="text-xl text-white font-bold mb-5">SIMAS Car Rental System</h1>
                    <p>A comprehensive platform designed to<br/> simplify the car rental process for users,<br/> enhancing convenience and efficiency.</p>
                    <div className="flex mb-5 justify-center items-center ml-2 "> 
                        <button className="flex bg-transparent  text-blue-900 px-5 py-2  mt-5 mr-5" >Live Demo<TbWindowMaximize className="text-xl text-blue-600 ml-2"/></button>
                        <button className="flex bg-[#302838] text-white px-5 py-2  mt-5 " >details<FaArrowRight className="text-lg text-white ml-2 mt-1" /></button>
                    </div>
             </div>   
            <div className="w-[300px] h-[450px] bg-[#1F1F1F] rounded-3xl flex flex-col justify-center items-center ml-10">
                    <img src="https://images.wuzzuf-data.net/files/company_logo/Health-Hub-for-Public-Health-Egypt-72669-1641675135-og.png" alt=""  className="w-[300px] h-[250px] rounded-3xl"/>
                    <h1 className="text-xl text-white font-bold mb-3">Health-HUB System</h1>
                    <p className="ml-5">A comprehensive platform designed to streamline hospital management, enhancing efficiency and improving patient care.</p>
                    <div className="flex mb-5 justify-center items-center ml-2 "> 
                        <button className="flex bg-transparent  text-blue-900 px-5 py-2  mt-5 mr-5" >Live Demo<TbWindowMaximize className="text-xl text-blue-600 ml-2"/></button>
                        <button className="flex bg-[#302838] text-white px-5 py-2  mt-5 " >details<FaArrowRight className="text-lg text-white ml-2 mt-1" /></button>
                    </div>
             </div>   
            <div className="w-[300px] h-[450px] bg-[#1F1F1F] rounded-3xl flex flex-col justify-center items-center ml-10">
                    <img src="../../src/assets/blog.jpeg" alt=""  className="w-[300px] h-[250px] rounded-3xl"/>
                    <h1 className="text-xl text-white font-bold mb-3">MERN Blog</h1>
                    <p className="ml-5">A comprehensive platform designed to<br/> simplify content creation and sharing,enhancing  user engagement and storytelling.</p>
                    <div className="flex mb-5 justify-center items-center ml-2 "> 
                        <button className="flex bg-transparent  text-blue-900 px-5 py-2  mt-5 mr-5" >Live Demo<TbWindowMaximize className="text-xl text-blue-600 ml-2"/></button>
                        <button className="flex bg-[#302838] text-white px-5 py-2  mt-5 " >details<FaArrowRight className="text-lg text-white ml-2 mt-1" /></button>
                    </div>
             </div>   
        </>
        }
        {activeTab === "certificates" && 
        <>
            <div className="w-[300px] bg-[#1F1F1F] rounded-3xl flex flex-col justify-center items-center ml-10">
                    <img src="../../src/assets/aws.png" alt=""  className="w-[300px] h-[250px] rounded-3xl"/>
                    <h1 className="text-xl text-white font-bold mb-5">certificates 1 </h1>
                    
             </div> 
            <div className="w-[300px]  bg-[#1F1F1F] rounded-3xl flex flex-col justify-center items-center ml-10">
                    <img src="https://media.licdn.com/dms/image/v2/D4E22AQHlHBz3s13p2Q/feedshare-shrink_800/feedshare-shrink_800/0/1689182467719?e=2147483647&v=beta&t=ziqcRHWCTxlKPKbpsumAHCzuZG7Fzfw3PhE995XeBlE" alt=""  className="w-[300px] h-[250px] rounded-3xl"/>
                    <h1 className="text-xl text-white font-bold mb-5">certificates 2</h1>
                      
             </div> 
        </>
        }
      </div>
        {activeTab === "technologies" && 
        <>
        <h1 className="text-white text-3xl font-bold mb-5">Languages</h1>
        <div className="flex justify-center items-center">
            <img src="../../src/assets/C.svg" alt="" className="w-[50px] h-[50px] "/>
            <img src="../../src/assets/CSS.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/ExpressJS-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Flutter-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/HTML.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Java-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/JavaScript.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/MongoDB.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/MySQL-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/NodeJS-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/PHP-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/React-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Scala-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Spring-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Python-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            
        </div>
        <h1 className="text-white text-3xl font-bold mt-5 mb-5">Tools</h1>
        <div className="flex justify-center items-center">
            <img src="../../src/assets/AndroidStudio-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Arduino.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/AutoCAD-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Discord.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Docker.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Eclipse-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Figma-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Git.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Idea-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Linux-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Photoshop.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Postman.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Powershell-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Premiere.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/R-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Selenium.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/VisualStudio-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/VSCode-Light.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            <img src="../../src/assets/Wordpress.svg" alt="" className="w-[50px] h-[50px] ml-5 "/>
            


        </div>
        </>
        }
</div>

    </section>
    <section className=" h-screen" ref={contactRef}>
                <div className="flex flex-col  items-center bg-black mt-30">
                    <h1 className="text-3xl text-blue-600 font-bold mt-35">CONTACT</h1>
                    <p className="text-xl text-gray-500 mt-3">Want to get in touch? Send me a message, and I&apos;ll get back to you as soon as possible.</p>
                </div> 
                <div className="flex justify-center ">
                    <div className="bg-[#0C0C1D] w-[600px] h-[400px] m-25 rounded-3xl flex flex-col justify-center items-center">
                        <input type="text" placeholder="Enter Your name" className="text-xl text-gray-600 w-[500px] border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 "/> <br/>   
                        <input type="text" placeholder="Enter Your Email" className="text-xl text-gray-600 w-[500px] border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-10"/> <br/>   
                        <input type="text" placeholder="Enter Your Message" className="text-xl text-gray-600 w-[500px] border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 mt-10"/> <br/>   
                        <input type="submit" value={"Send Message"} className="bg-blue-600 w-[500px] h-[40px]"/> <br/>   
                    </div>
                    <div className="mt-25">    
                        <div className="bg-[#0C0C1D] w-[400px] h-[75px] ">
                            <div className="flex justify-start pt-5" onClick={() => window.open("https://www.linkedin.com/in/ashan-kavinda-3031a3286", "_blank")}
                            >
                                <FaLinkedin className="text-4xl text-blue-600 ml-5"/> 
                                <div>
                                    <h1 className="text-xl text-white font-bold ml-5 ">Let&apos;s Connect</h1>
                                    <p className="text-gray-500 ml-5">ASHAN KAVINDA</p> 
                                </div> 
                            </div>
                        </div>
                        <div className="bg-[#0C0C1D] w-[400px] h-[75px] mt-5">
                            <div className="flex justify-start pt-5 " onClick={() => window.open("https://www.facebook.com/profile.php?id=100079513034972&mibextid=ZbWKwL", "_blank")}>
                                <FaFacebookSquare className="text-4xl text-blue-600 ml-5"/> 
                                <div>
                                    <h1 className="text-xl text-white font-bold ml-5 ">Facebook</h1>
                                    <p className="text-gray-500 ml-5">Ashan Kavinda</p> 
                                </div> 
                            </div>
                        </div>
                        <div className="bg-[#0C0C1D] w-[400px] h-[75px] mt-5">
                            <div className="flex justify-start pt-5" onClick={() => window.open("https://www.instagram.com/ashan_kavinda_21?igsh=ODB0YWpmM292ZWRx", "_blank")}>
                                <BsInstagram className="text-4xl text-red-500 ml-5"/> 
                                <div>
                                    <h1 className="text-xl text-white font-bold ml-5 ">Instagram</h1>
                                    <p className="text-gray-500 ml-5">kavinda_1020</p> 
                                </div> 
                            </div>
                        </div>
                        <div className="bg-[#0C0C1D] w-[400px] h-[75px] mt-5">
                            <div className="flex justify-start pt-5" onClick={() => window.open("https://github.com/ASHAN2021", "_blank")}>
                                <FaGithub className="text-4xl text-gray-600 ml-5"/> 
                                <div>
                                    <h1 className="text-xl text-white font-bold ml-5 ">Github</h1>
                                    <p className="text-gray-500 ml-5">ASHAN2021</p> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>  
    </section>
    </>
  )
}

export default Home