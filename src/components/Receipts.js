import React from "react";
import {useState} from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ReceiptImage from "./receiptStock.jpeg";
const firebase = require('../firebase.js');

function Receipts() {
  const onImageChange = (e) => {
    const imageRef = ref(firebase.storage, 'users/'  + e.target.files[0].name)
    console.log(e.target.files[0].name)
    uploadBytesResumable(imageRef, e.target.files[0]).then((snapshot) => {
          console.log('Uploaded a blob or file! to ' + 'users/');
          });
    console.log("IMAGE CHANGES")
  }

  return (
    <section class="bg-[#D9D9D9]">
      <div class="bg-[#88A1F6] py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <a href="#" class="font-light text-[#3E3131] sm:text-xl">
            OVERVIEW
          </a>
          <a href="#" class="font-light text-[#3E3131] sm:text-xl">
            {" "}
            / DATABASE
          </a>
          <h2 class="py-5 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#3E3131] lg:py-2">
            My receipts
          </h2>
          <input class="mx-4 infline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#3E3131] border border-[#3E3131] rounded-lg hover:bg-[#D9D9D9] hover:text-[#3E3131]" type="file" accept="image/*" onChange={onImageChange}/>
          <br />
          <div class="relative inline-block text-left">
            <div class="mx-3 inline-flex mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src={ReceiptImage}
                  alt="receiptImage"
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Receipt 1
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">$17.34</p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Delete
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Receipts;
