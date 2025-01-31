import React from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import FormLogin from "./components/LoginForms";

import Image from 'next/image'

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bottom">
        
        <AnimatedBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <Image src="/logo.png" width={150} height={150} alt="Logo do Empresa" priority className='mt-100 mx-auto mb-12'/>
        <h1 className="text-4xl font-bold">Login</h1>
        <a className=" block text-lightGreen3 decoration-2 hover:underline focus:outline-none focus:underline dark:text-lightGreen3 font-poppins text-semibold mt-2" href="../examples/html/signup.html">
            Sign up here
        </a>

        <FormLogin/>

      </div>
    </div>
  );
}


