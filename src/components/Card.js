import React, { useEffect } from "react";
import ReceiptImage from "./receiptStock.jpeg";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { storage } from "../firebase";

const Card = ({src}) => {
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');

    const [{ user }, dispatch] = useStateValue();

    useEffect(()=>{
        var split = src.split("%2F");
        split = split[2].split("?");
        const filename = split[0];

        const price = parseInt(filename.split('_')[0]);
        dispatch({
          type: "REMOVE_TOTAL",
          price,
        });
        
    
        setPrice(filename.split('_')[0]);
        setDate(filename.split('_')[1].split('-')[1]);
        setName(filename);
    },[]);

    const deleteFile = () =>{
        const desertRef = ref(storage, `users/${user.displayName}/${name}`);

        // Delete the file
        deleteObject(desertRef).then(() => {
            window.location.href = '/next';
        }).catch((error) => {
        // Uh-oh, an error occurred!
        });
    }

    return (

<div class="mb-6 inline-flex">
  <div class="border border-[#313131] rounded-lg shadow-lg bg-[#D9D9D9] max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="w-screen h-96 rounded-t-lg" src={src} alt=""/>
    </a>
    <div class="p-6">
      <h2 class="text-gray-900 text-xl font-semibold font-large mb-2">{date}</h2>
      <p class="text-gray-700 text-base mb-4">
        ${price}
      </p>
      <button onClick = {deleteFile} type="button" class=" inline-flex px-6 py-2.5 bg-[#d83b3b] text-white font-medium text-xs leading-tight rounded-lg shadow-md hover:bg-[#c84b4b] transition duration-150 ease-in-out">Delete</button>
    </div>
  </div>
</div>


);
};

export default Card;