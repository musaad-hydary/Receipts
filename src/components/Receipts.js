import React, { useEffect } from "react";
import {useState} from 'react';
import { useStateValue } from "../StateProvider";
import { ref, uploadBytes, getDownloadURL,listAll  } from "firebase/storage";
import ReceiptImage from "./receiptStock.jpeg";
import Tesseract from 'tesseract.js';
import { IFFT } from "@tensorflow/tfjs";
import { CircularProgress } from '@mui/material';
import { storage } from '../firebase';
import Card  from "./Card";
import { Toaster,toast } from "react-hot-toast";

const firebase = require('../firebase.js');

function Receipts() {
    const [{ spending, user }, dispatch] = useStateValue();
    // const [price, setPrice] = useState('');
    // const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [receiptList, setReceiptList] = useState([]);
    const [pathList, setPathList] = useState([]);
    

    let price = 0; 
    let date = 'x';

    const imageListRef = ref(storage, `users/${user?user.displayName:'test'}/`);


    const scanScan = (e) =>{
        document.getElementById('susJS').style.visibility = 'visible';
        Tesseract.recognize(
          e.target.files[0],
          'eng',
          { logger: m => {
              console.log(m)
              // setLoad(m.progress*100);
          } }
        ).then(({ data: { text } }) => {
          console.log(text);
          const extractedText = text;
          const splited = extractedText.split('\n');
          
          var check = true;

          for(var i = 0; i < splited.length; i++){
              if(splited[i].toLowerCase().includes('total') && splited[i].toLowerCase().includes('.')){
                  const splitLine = splited[i].split(' ');

                  console.log(splitLine[splitLine.length-1]);

                  price = parseFloat(splitLine[splitLine.length-1]);

                  // setPrice(splitLine[splitLine.length-1]);
              }

              if(splited[i].split('/').length - 1 == 2 && check){
                  console.log(typeof splited[i]);
                  console.log('Pranav\'s OUput: '+splited[i]);

                  var xx = splited[i].split()[0].split(" ");
                  console.log(xx);

                  for(let x = 0; x < xx.length; x++){
                    console.log("PKKPKPKPK " + xx[x].split('/').length);
                    if(xx[x].split('/').length - 1 == 2){
                      console.log('kklsadjfksjdklg: ' + xx[x]);
                      date = xx[x];
                    }
                  }
                  // setDate(splited[i]);                  
              }
          }

          console.log(date);
          setTitle(splited[0]);
          console.log('Title: ' + splited[0]);

        }).then(() => {
          console.log(user.displayName);

          console.log(e.target.files[0].name)
    
          // scanScan(e.target.files[0])
          console.log("=======================");
          console.log(price)
          

          date = date.replace('/', '-');
          console.log("date: " + date);
          toast.success("File Uploaded");

          const imageRef = ref(firebase.storage, 'users/' + user.displayName + '/' + `${price}_${date.replace('/','-')}`);
          console.log(e.target.files[0])
          uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setReceiptList((prev) => [...prev, url]);
            });
          });
          console.log("IMAGE CHANGES"); 
          
          document.getElementById('susJS').style.visibility = 'hidden';
        }).then(() =>{
          window.location.href = '/next';
        })
        
      }

      // useEffect(() => {
      //   document.getElementById('susJS').style.visibility = 'hidden';

      //   var div = document.getElementById('images');
      //   while(div.firstChild) {
      //     div.removeChild(div.firstChild);
      //   }
      //   listAll(imageListRef).then((response)=>{
      //     response.items.forEach((items) => {
      //       getDownloadURL(items).then((url) => {
      //         setReceiptList((prev)=>[...prev, url])
      //       })
      //     })
      //   });
      // })

      useEffect(() => {
        console.log(true);
        console.log(imageListRef);
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            setPathList((prev) => [...prev, item.fullPath]);
            getDownloadURL(item).then((url) => {
              console.log('call');

              var split = url.split("%2F");
              split = split[2].split("?");
              const filename = split[0];
              const price = parseInt(filename.split('_')[0]);
              const date = parseInt(filename.split('_')[1].split('-')[1])


              dispatch({
                type: "ADD_TOTAL",
                price,
              });

              setReceiptList((prev) => [...prev, url]);
            });
          });
        })

        document.getElementById('susJS').style.visibility = 'hidden';
        // window.location.href = '/next';
      },[user]);
    

  return (
    <section class="bg-[#D9D9D9]">
        <Toaster/>
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
          <input class="mx-3 cursor-pointer inline-flex items-center px-3.5 py-2 text-sm font-medium text-center bg-[#D9D9D9] border border-[#3E3131] rounded-lg text-[#3E3131] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold lg:mt-3" type="file" accept="image/*" onChange={scanScan}/>
          <select id="sort" class="mt-3 display inline-flex bg-[#D9D9D9] border border-[#3E3131] text-[#3E3131] font-medium rounded-lg p-4 ">
            <option selected="price">Price</option>
            <option value="lexicon">Alphabetically</option>
            <option value="cat">Category</option>
          </select>
          
          <div id='susJS' class="mt-5"><CircularProgress /></div>

          <div id='images'>
              {receiptList.map((url) => {
                console.log(url);
                
              return <Card src = {url}/>;
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Receipts;
