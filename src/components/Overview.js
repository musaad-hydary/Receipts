import userEvent from "@testing-library/user-event";
import { FirebaseError } from "firebase/app";
import React, { useEffect } from "react";
import {auth} from "../firebase";
import { useStateValue } from "../StateProvider";
import { ref, uploadBytes, getDownloadURL,listAll  } from "firebase/storage";
import { storage } from '../firebase';
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";


function App() {
    const [{ spending, user, drawer }, dispatch] = useStateValue();
    const [total,setTotal] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const imageListRef = ref(storage, `users/${user?user.displayName:'test'}/`);
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            
            getDownloadURL(item).then((url) => {
              console.log('call');

              var split = url.split("%2F");
              split = split[2].split("?");
              const filename = split[0];
              const price = parseInt(filename.split('_')[0]);
              const date = parseInt(filename.split('_')[1].split('-')[1])

              let updating = total;
              updating[date - 1] +=1;

              setTotal(updating);

              dispatch({
                type: "ADD_TOTAL",
                price,
              });

            });
          });
        });

      },[user]);


    
    return (        
        <section class="bg-[#D9D9D9]">
            
                    <div class="bg-[#88A1F6] py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
                <div class ="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <p class="font-light text-[#3E3131] sm:text-xl">OVERVIEW</p>          
                    <h2 class="py-5 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#3E3131] lg:py-2">Welcome, {user ? user.displayName : "Guest"}!</h2>
                    <a href="#" class="mt-3 mb-0 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#3E3131] border border-[#3E3131] rounded-lg hover:bg-[#c84d4d] hover:text-[#D9D9D9]" 
                        onClick={handleAuthentication}
                    >
                Log Out
            </a> 
            <a href="#" class="mx-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#3E3131] border border-[#3E3131] rounded-lg hover:bg-[#D9D9D9] hover:text-[#3E3131]">
                View Receipts
            </a> 
                </div>
                <div class="grid gap-4 lg:grid-cols-3">
                    <article class="p-6 bg-[#D9D9D9] rounded-lg border border-[#D9D9D9] shadow-md">
                        <div class="flex justify-between items-center mb-5 text-[#3E3131]">
                            <h3 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">My budget</a></h3>
                            <h2 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">${450.00-spending}</a></h2>
                        </div>
                    </article>
                    <article class="bg-[#D9D9D9] rounded-lg border border-[#D9D9D9] shadow-md">
                        <div class="flex items-center mb-5 text-[#3E3131]">
                        <h3 class="justify-center items-center m-3 text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">Breakdown</a></h3>
                        <center>
            <div class="mt-4 ml-24 w-1/3 content-center">

            <PieChart
                    data={[
                        { title: '01', value: total[0], color: '#CDB4DB'},
                        { title: '02', value: total[1], color: '#FFC8DD' },
                        { title: '03', value: total[2], color: '#BDE0FE' },
                        { title: '04', value: total[3], color: '#023047' },
                        { title: '05', value: total[4], color: '#2a9d8f' },
                        { title: '06', value: total[5], color: '#e76f51' },
                        { title: '07', value: total[6], color: '#778da9' },
                        { title: '08', value: total[7], color: '#ef233c' },
                        { title: '09', value: total[8], color: '#d8e2dc' },
                        { title: '10', value: total[9], color: '#4a4e69' },
                        { title: '11', value: total[10], color: '#800f2f' },
                        { title: '12', value: total[11], color: '#1b4332x' },
                    ]}
                />
            </div>
        </center>
                        </div>
                    </article>
                    <article class="p-6 bg-[#D9D9D9] rounded-lg border border-[#D9D9D9] shadow-md">
                        <div class="flex justify-between items-center mb-5 text-[#3E3131]">
                            <h3 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">My spendings</a></h3>
                            <h2 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">${spending}</a></h2>
                        </div>
                    </article>

                </div>
                </div>  

  
<div class="px-4 mx-auto max-w-screen-xl lg:px-6 rounded-lg ">
    <table class="w-full text-sm text-left text-[#3E3131]">
        <caption class="p-5 text-xl font-bold text-left text-[#3E3131] bg-[#D9D9D9]">
            My Purchases
            <p class="mt-1 text-sm font-normal text-[#3E3131]">See all your most recently summarized receipts.</p>
        </caption>
        <thead class="text-xs text-[#3E3131] uppercase bg-[#cbcbcb]">
            <tr>
                <th scope="col" class="px-6 py-3">
                    PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                    CATEGORY
                </th>
                <th scope="col" class="px-6 py-3">
                    PRICE
                </th>


            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#D9D9D9]">
                <th scope="row" class="px-6 py-4 font-medium text-[#3E3131] whitespace-nowrap">
                    Netflix Subscription
                </th>
                <td class="px-6 py-4">
                    Entertainment
                </td>
                <td class="px-6 py-4">
                    $17.37
                </td>

            </tr>
            <tr class="bg-[#D9D9D9]">
                <th scope="row" class="px-6 py-4 font-medium text-[#3E3131] whitespace-nowrap">
                    Chatime Bubble Tea
                </th>
                <td class="px-6 py-4">
                    Food
                </td>
                <td class="px-6 py-4">
                    $7.37
                </td>

            </tr>

        </tbody>
    </table>
</div>
              
        </section>


    );
  }
  
  export default App;