import React from "react";
import { Link } from "react-router-dom";
import { topImage,
          Men,
          ManonSuit,
          africa,
          get,
          arrow,
          people,
          main2,
          apple,
          play
        } from "../costants/images";

const Home = () => {
  return (
    <div className="relative h-screen w-full font-sans text-white overflow-x-hidden">
      {/* Background Image */}
      <div className="relative inset-0">
        <img
          src={topImage}
          alt="Hero"
          className="w-full mt-[-45px] object-cover"
        />
        
      </div>

      {/* Mobile Navbar */}
      <div className="fixed z-[9999]  top-[0%] w-full bg-white bg-opacity-10 backdrop-blur-md z-10 flex items-center justify-between  p-2">
        <i className="fas fa-bars text-black text-lg ml-[20px] "></i>
        <Link to="/signup">
        <button className="text-[10px] font-semibold bg-blue-600 px-4 py-2 rounded-full">
          SIGN UP
        </button>
        </Link>
      </div>

      {/* Hero Content */}
      <div className="absolute z-10 flex flex-col  px-4 top-[270px] ml-[30px]">
        <h1 className="text-3xl font-inter font-bold leading-snug uppercase mb-6">
          Growing <br />
          the <br />
          African Dream
        </h1>
        
        <button className="w-[50%] p-2 border bg-white bg-opacity-10 backdrop-blur-md border-white rounded-full text-xs font-medium mt-[-10px] ml-[20%]">
          SIGN UP
        </button>
       
      </div>










      <div className="relative h-[580px]">
  {/* Floating Circles */}
  <div className="absolute inset-0 z-10">
    {/* Top-left dark blue */}
    <span className="absolute top-[30px] left-[20px] w-[50px] h-[50px] bg-[#0D47A1] rounded-full"></span>

    {/* Left mid-light blue */}
    <span className="absolute top-[120px] left-[35px] w-[35px] h-[35px] bg-[#90CAF9] rounded-full"></span>

    {/* Bottom-left coral pink */}
    <span className="absolute bottom-[190px] left-[55px] w-[55px] h-[55px] bg-[#F28B82] rounded-full"></span>

    {/* Mid-left small light blue */}
    <span className="absolute top-[190px] left-[10px] w-[20px] h-[20px] bg-[#42A5F5] rounded-full"></span>

    {/* Top-right dark blue */}
    <span className="absolute top-[50px] right-[35px] w-[45px] h-[45px] bg-[#0D47A1] rounded-full"></span>

    {/* Upper-right small red */}
    <span className="absolute top-[110px] right-[60px] w-[12px] h-[12px] bg-[#E53935] rounded-full"></span>

    {/* Center tiny dark red */}
    <span className="absolute top-[165px] left-[50%] transform -translate-x-1/2 w-[10px] h-[10px] bg-[#B71C1C] rounded-full"></span>

    {/* Right middle grey blue */}
    <span className="absolute top-[220px] right-[20px] w-[20px] h-[20px] bg-[#B0BEC5] rounded-full"></span>

    {/* Bottom-right cyan */}
    <span className="absolute bottom-[180px] right-[30px] w-[60px] h-[60px] bg-[#03A9F4] rounded-full"></span>
  </div>

  {/* Image */}
  <div className="relative w-full p-4 flex justify-center mt-[90px] z-20">
    <img
      src={Men}
      alt="Men"
      className="w-[80%] mt-[-45px] object-cover"
    />
  </div>

  {/* Text Box */}
  <div className="absolute w-full p-5 pb-[100px] pl-[40px] top-[290px] bg-white bg-opacity-10 backdrop-blur-md z-30">
    <h2 className="text-blue-900 font-montserrat text-black text-2xl font-bold">
      We connect<br />
      <span className="text-blue-600 font-montserrat text-3xl text-black font-bold">
        Zealous Freelancers
      </span><br />
      to <span className="text-blue-600 font-montserrat text-3xl text-black font-bold">
        Companies
      </span><br />
      around the globe
    </h2>
  </div>
</div>

      <div className="relative  w-full h-[300px]">
        <div className=" absolute bg-blue-900 aspect-square rounded-full  w-[60%] left-[10%]">
        </div>
        <div className=" absolute bg-blue-800 bg-opacity-10 backdrop-blur-lg aspect-square rounded-full   w-[45%] left-[30%] top-[130px] ">
        </div>
        <div className=" absolute bg-blue-700 bg-opacity-10 backdrop-blur-lg aspect-square rounded-full   w-[45%] left-[45%] top-[20px] ">
        </div>
        <img
          src={africa}
          alt="Hero"
          className="absolute w-[65%] left-[21%] top-[27px] "
        />
        <img
          src={ManonSuit}
          alt="Hero"
          className="absolute w-[70%] left-[32%] top-[30px] "
        />

        <div className="absolute  w-[40%] ml-[18%] mt-[55px]">
        <p className=" text-3xl  text-white font-bold leading-[1.1]">
          AFRICAN <br />DREAM </p> <br /><p className=" text-[6px] font-montserrat text-none leading-[1.0] mt-[-18px]">
          Aspire is a web-based platform connecting youths
          and service providers (businesses, NGOs, and organizations)
          through a smart, structured system for job opportunities, 
          volunteering, and professional development. It combines 
          features of a freelance marketplace,  volunteer 
          coordination system, and bootcamp/workshop 
          management tool.</p>
        
        </div>
        <img
          src={get}
          alt="Hero"
          className="absolute w-[26%] left-[18%] top-[200px]"
        />
      </div>

    <div className="leading-[0.1] ml-[9%] mt-[40px]" >
      <h1 className="text-blue-900 font-montserrat font-bold text-4xl">ASPIRE </h1><br /><p className="text-xs text-blue-900 ">Offers a web platform with:</p>
    </div>

    <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[30%] h-[56px] ml-[9%] rounded-md mt-[10px] flex items-center justify-center h-screen">
      <p className="text-[6px] font-montserrat text-white leading-[1.3] pl-3">
      Role-based dashboards for  companies, job seekers, and volunteers. 
      </p>
    </div>

    <img
          src={arrow}
          alt="Hero"
          className="relative w-[19%] ml-[39%]"
        />

    <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[30%] h-[56px] ml-[59%] rounded-md mt-[5px]">
    <p className="text-[6px] font-montserrat text-white leading-[1.3] p-2 pt-4">
    Secure wallets for escrow-based <br />job payments.
    </p>
    </div>
    <img
          src={arrow}
          alt="Hero"
          className="relative w-[19%] ml-[39%] transform scale-x-[-1]"
        />
        <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[30%] h-[56px] ml-[9%] rounded-md mt-[5px]">
        <p className="text-[6px] font-montserrat text-white leading-[1.3] p-4 ">
        Verified user profiles with <br /> portfolio, credentials, and <br /> past work. 
    </p>
    </div>
    <img
          src={arrow}
          alt="Hero"
          className="relative w-[19%] ml-[39%]"
        />
        <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[30%] h-[56px] ml-[59%] rounded-md mt-[5px] flex items-center justify-center h-screen">
        <p className="text-[6px] font-montserrat text-white leading-[1.3] p-3 ">
        
        E-certificates for bootcamp <br />and volunteer participation.
    </p>
    </div>

    <div className="relative">
    <img
          src={people}
          alt="Hero"
          className="relative w-[66%] ml-[24%] mt-[80px]"
        />
        <div className="absolute  bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-md top-[34%] left-[10%]">
        <h1 className="Text-white font-montserrat p-4 font-bold">
          JOIN US <br /> TODAY
        </h1>
        </div>
        <div className="w-full flex items-center mt-[30px]">
        <img
          src={get}
          alt="Hero"
          className="relative w-[25%] ml-[37%]"
        />
        </div>
    </div>

    <div className=" relative  w-full mt-[50px] ">
    <img
          src={main2}
          alt="Hero"
          className="absolute w-[27%] left-[15%]"
        />
        <p className="absolute text-1xl font-montserrat text-blue-900 text-right left-[56%]">
          Start a Growing <br />Career <br /> <span className="text-1xl font-montserrat text-blue-500 text-right font-bold">With Us!</span>
        </p>

        <img
          src={apple}
          alt="Hero"
          className="absolute w-[14%] left-[56%] top-[80px]"
        />
         <img
          src={play}
          alt="Hero"
          className="absolute w-[14%] left-[76%] top-[80px]"
        />
    </div>

    


    <footer className="relative bg-[#012B52] text-white py-8 px-6 mt-[250px]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Links */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold">Find Freelancers</p>
          <p className="font-semibold">Find a Job</p>
          <p className="font-semibold">How it Works</p>
          <p className="font-semibold">About Aspire</p>
          <p className="font-semibold">Why Aspire</p>
          <p className="font-semibold">Pricing</p>
        </div>

        {/* Right Links */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold">Blog</p>
          <p className="font-semibold">Enterprise Solutions</p>
          <p className="font-semibold">Agency Solutions</p>
          <p className="font-semibold">Purchase Order Solutions</p>
          <p className="font-semibold">Work Agreements</p>
          <p className="font-semibold">DeepPay</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex gap-4 px-6 pl-1">
        <i className="fa-brands fa-x-twitter text-xl"></i>
        <i className="fa-brands fa-whatsapp text-xl text-green-400"></i>
        <i className="fa-brands fa-instagram text-xl text-pink-500"></i>
      </div>
    </footer>
  

    </div>
  );
};

export default Home;
