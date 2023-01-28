import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState('');

  function handleClick(){
    signInWithPopup(auth,provider).then((data) => {
      setValue('data.user.email')
      localStorage.setItem('email', data.user.email)
    })
  }

  return (
    <section class="bg-[#D9D9D9]">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#3E3131]">
            Simplify your budgeting. 
          </h1>
          <p class="max-w-2xl mb-6 font-light text-[#3E3131] lg:mb-8 md:text-lg lg:text-xl">
            Upload your receipts and have an AI do the work for you.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-center text-[#3E3131] bg-[#98D095] rounded-lg hover:bg-[#98D095] dark:text-white dark:border-gray-700 dark:hover:bg-[#76aa73]"
            onClick={handleClick}
          >
            Sign in
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2704/2704332.png"
            alt="backup"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
